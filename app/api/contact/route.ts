import { object, string, array, ValidationError } from 'yup';
import { budgets, needs, timelines } from '../../data/site';

const contactSchema = object({
  name: string().required('Please tell us your name').min(2).max(256),
  email: string().required('Please add your email').email('Please enter a valid email').max(256),
  telegram: string().optional().max(100),
  company: string().optional().max(500),
  needs: array().of(string().required().oneOf(needs.map((n) => n.value))).min(1, 'Pick at least one need').required('Pick at least one need'),
  budget: string().required('Please pick a budget').oneOf(budgets),
  timeline: string().required('Please pick a timeline').oneOf(timelines),
  message: string().optional().max(8000),
  // Honeypot: hidden from people, filled in by bots.
  website: string().optional(),
});

type Lead = Omit<Awaited<ReturnType<typeof contactSchema.validate>>, 'website'>;

// Best effort: per-instance memory, so limits reset on cold starts. Enough to stop a single script.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function formatLead(lead: Lead) {
  const needLabels = lead.needs.map((v) => needs.find((n) => n.value === v)?.label ?? v);
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.telegram && `Telegram: ${lead.telegram}`,
    lead.company && `Company / link: ${lead.company}`,
    `Needs: ${needLabels.join(', ')}`,
    `Budget: ${lead.budget}`,
    `Timeline: ${lead.timeline}`,
    lead.message && `\n${lead.message}`,
  ].filter(Boolean).join('\n');
}

async function sendTelegram(text: string) {
  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT_ID;
  if (!token || !chatId) throw new Error('Telegram is not configured');
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: `✨ New lead ✨\n\n${text}`,
      link_preview_options: { is_disabled: true },
    }),
  });
  const data = await response.json();
  if (!data.ok) throw new Error(`Telegram error: ${data.description ?? response.status}`);
}

// Email through Resend's HTTP API, so a lead isn't lost when Telegram is down.
async function sendEmail(lead: Lead, text: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM;
  if (!apiKey || !to || !from) throw new Error('Email is not configured');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New lead: ${lead.name} (${lead.budget})`,
      text,
    }),
  });
  if (!response.ok) throw new Error(`Resend error: ${response.status} ${await response.text()}`);
}

export async function POST(req: Request) {
  if (!req.headers.get('Content-Type')?.startsWith('application/json')) {
    return Response.json({ status: 'Error', errors: ['Invalid request type'] }, { status: 415 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (rateLimited(ip)) {
    return Response.json({ status: 'Error', errors: ['Too many requests, please try again in a few minutes'] }, { status: 429 });
  }

  let lead: Lead;
  try {
    const { website, ...parsed } = await contactSchema.validate(await req.json(), { abortEarly: false, stripUnknown: true });
    if (website) {
      // Pretend it worked so bots don't learn to skip the field.
      return Response.json({ status: 'Success' });
    }
    lead = parsed;
  } catch (error) {
    const errors = error instanceof ValidationError ? error.errors : ['Invalid request'];
    return Response.json({ status: 'Error', errors }, { status: 400 });
  }

  const text = formatLead(lead);
  const results = await Promise.allSettled([sendTelegram(text), sendEmail(lead, text)]);
  results.forEach((r) => r.status === 'rejected' && console.error('lead delivery failed:', r.reason));

  if (results.every((r) => r.status === 'rejected')) {
    return Response.json({ status: 'Error', errors: ['We could not send your request. Please book a call or message us on Telegram.'] }, { status: 500 });
  }
  return Response.json({ status: 'Success' });
}
