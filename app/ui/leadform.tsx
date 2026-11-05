'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { budgets, links, needs, timelines } from "../data/site";

const inputClass = "flex px-4 py-3 text-sm font-medium text-label rounded-md bg-background hover:bg-transparentbg/[0.01] border border-transparentbg hover:border-placeholder focus-visible:border-label outline-0 ring-0 disabled:opacity-50";

function Choices({ legend, name, options, values, multiple, onChange, disabled }: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  values: string[];
  multiple?: boolean;
  onChange: (values: string[]) => void;
  disabled: boolean;
}) {
  return (
    <fieldset className="flex flex-col gap-3" disabled={disabled}>
      <legend className="text-sm font-semibold text-label mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const checked = values.includes(o.value);
          return (
            <label key={o.value} className={clsx(
              "cursor-pointer px-4 py-2 rounded-xl border text-sm font-medium transition-all has-[:focus-visible]:border-label",
              checked ? "bg-label text-background border-label" : "bg-transparentbg text-label border-transparentbg hover:border-placeholder",
            )}>
              <input
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={o.value}
                checked={checked}
                className="sr-only"
                onChange={() => onChange(multiple ? (checked ? values.filter((v) => v !== o.value) : [...values, o.value]) : [o.value])}
              />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

const asOptions = (list: string[]) => list.map((v) => ({ value: v, label: v }));

export default function LeadForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [inputs, setInputs] = useState({ name: "", email: "", telegram: "", company: "", message: "", website: "" });
  const [selectedNeeds, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string[]>([]);

  const set = (key: keyof typeof inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setInputs({ ...inputs, [key]: e.target.value });

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const missing = [
      !selectedNeeds.length && "Pick at least one need",
      !budget.length && "Please pick a budget",
      !timeline.length && "Please pick a timeline",
    ].filter(Boolean) as string[];
    if (missing.length) {
      setErrors(missing);
      return;
    }

    setSending(true);
    setErrors([]);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "application/json" },
        body: JSON.stringify({ ...inputs, needs: selectedNeeds, budget: budget[0], timeline: timeline[0] }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors(data.errors ?? ["Something went wrong. Please try again."]);
        setSending(false);
        return;
      }
      router.push("/thanks?via=form");
    } catch {
      setErrors(["Network error. Please check your connection and try again."]);
      setSending(false);
    }
  }

  return (
    <form onSubmit={submit} className="relative flex flex-col gap-8 w-full px-4 md:px-8 py-8 bg-bodybg/[64%] backdrop-blur-md shadow-xl border border-transparentbg rounded-2xl">
      <Choices legend="What do you need?" name="needs" multiple options={needs} values={selectedNeeds} onChange={setNeeds} disabled={sending} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-label" htmlFor="name">Your name</label>
          <input className={inputClass} type="text" name="name" id="name" required minLength={2} autoComplete="name" value={inputs.name} disabled={sending} onChange={set("name")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-label" htmlFor="email">Your email</label>
          <input className={inputClass} type="email" name="email" id="email" required autoComplete="email" value={inputs.email} disabled={sending} onChange={set("email")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-label" htmlFor="company">Company or project link <span className="text-placeholder font-medium">(optional)</span></label>
          <input className={inputClass} type="text" name="company" id="company" autoComplete="organization" value={inputs.company} disabled={sending} onChange={set("company")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-label" htmlFor="telegram">Telegram <span className="text-placeholder font-medium">(optional)</span></label>
          <input className={inputClass} type="text" name="telegram" id="telegram" placeholder="@handle" value={inputs.telegram} disabled={sending} onChange={set("telegram")} />
        </div>
      </div>

      <Choices legend="Budget" name="budget" options={asOptions(budgets)} values={budget} onChange={setBudget} disabled={sending} />
      <Choices legend="Timeline" name="timeline" options={asOptions(timelines)} values={timeline} onChange={setTimeline} disabled={sending} />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-label" htmlFor="message">Tell us about the project <span className="text-placeholder font-medium">(optional)</span></label>
        <textarea className={clsx(inputClass, "min-h-32")} name="message" id="message" value={inputs.message} disabled={sending} onChange={set("message")} />
      </div>

      {/* Honeypot: off-screen and skipped by keyboard and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" value={inputs.website} onChange={set("website")} />
      </div>

      {errors.length > 0 && (
        <div role="alert" className="flex flex-col gap-1 px-4 py-3 rounded-xl border border-red-400/40 bg-red-400/10 text-sm font-medium text-red-200">
          {errors.map((e) => <p key={e}>{e}</p>)}
          <p className="text-caption">Still stuck? <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="underline text-label">Message us on Telegram</a>.</p>
        </div>
      )}

      {/* Same look as the primary CTA (ui/bookcall.tsx). */}
      <button type="submit" disabled={sending}
        className="group/cta flex w-full items-center justify-between gap-4 rounded-full bg-label py-1.5 pl-7 pr-1.5 text-sm font-semibold whitespace-nowrap text-void shadow-[0_8px_30px_-8px_rgba(200,180,255,0.45)] transition-all hover:bg-white active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50">
        {sending ? "Sending…" : "Send my request"}
        <span aria-hidden className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-void shadow-[inset_0_3px_8px_rgba(0,0,0,0.6)]">
          <span className="light absolute inset-0 scale-[0.55] rounded-full transition-transform duration-500 ease-out group-hover/cta:scale-100" />
        </span>
      </button>
    </form>
  );
}
