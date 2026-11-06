import type { StaticImageData } from "next/image";
import dani from "../../public/testimonials/dani.webp";
import madperps from "../../public/testimonials/madperps.webp";
import marvin from "../../public/testimonials/marvin.webp";

// TODO(founders): confirm the production domain. Override with NEXT_PUBLIC_SITE_URL.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://moonday.design";

export const links = {
  bookCall: "https://cal.com/moondaystudio/introcall",
  calLink: "moondaystudio/introcall",
  telegram: "https://t.me/moondaydesign",
};

export const tagline = "Brand, product and motion design for tech & Web3 startups.";
export const description =
  "Moonday is a brand & product design studio. Web3-native, trusted by global brands. Brand identity, product UX/UI, website design and motion, handed off as developer-ready files.";

export type Package = {
  slug: string;
  title: string;
  text: string;
  items: string[];
  duration: string;
  startsAt?: string;
};

export const packages: Package[] = [
  {
    slug: "brand",
    title: "Brand launch",
    text: "Everything you need to look credible on day one: a name-worthy logo, a visual system and the kit to launch it.",
    items: ["Logo & visual identity", "Brand guidelines", "Social & launch kit"],
    duration: "4-7 days",
    startsAt: "$3,500",
  },
  {
    slug: "product",
    title: "Product design",
    text: "Apps, dApps and dashboards people understand on first use, from flows and wireframes to a full design system.",
    items: ["UX flows & wireframes", "UI & design system", "Prototypes", "Developer-ready Figma"],
    duration: "4-12 days",
    startsAt: "$4,500",
  },
  {
    slug: "website",
    title: "Website design",
    text: "A landing page or marketing site designed to convert, ready for your developers or a no-code tool.",
    items: ["Landing & marketing pages", "Responsive layouts", "Copy structure", "Handoff for devs or no-code"],
    duration: "2-4 days",
    startsAt: "$2,500",
  },
  {
    slug: "motion",
    title: "Motion & content",
    text: "Make the brand move: animations, product videos and decks that stop the scroll and win the room.",
    items: ["Brand animation", "Product videos", "Showreels", "Pitch & sales decks"],
    duration: "1-3 days",
    startsAt: "$1,000",
  },
];

export const steps = [
  {
    name: "Intro call",
    text: "30 minutes to understand your product, your audience and your deadline. You leave with a clear scope and a quote.",
  },
  {
    name: "Define",
    text: "Research, references and direction. We agree on where we're going before a single pixel is pushed.",
  },
  {
    name: "Design",
    text: "Brand, interfaces and motion designed together, with review rounds so you see progress every few days.",
  },
  {
    name: "Handoff",
    text: "Clean, documented Figma files and assets your developers or no-code tool can build from directly.",
  },
];

export const faq = [
  {
    q: "How much does a project cost?",
    a: "Each package has a starting price, and the final quote depends on scope. After the intro call you get a fixed quote, so there are no surprises.",
  },
  {
    q: "How long does it take?",
    a: "Each package shows a typical duration: a few days for a deck or a landing page, up to 12 days for a product. You get a timeline with the quote.",
  },
  {
    q: "Do you only work with Web3 projects?",
    a: "No. We're Web3-native, so we know wallets, tokens and DeFi flows well, but we've also designed for global brands in fashion, beauty, finance and tech.",
  },
  {
    q: "Do you build the website or app?",
    a: "No, we're a design studio. We hand off developer-ready Figma files, assets and specs, and stay available to your developers or no-code tool during the build.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  avatar: StaticImageData;
  /** Verbatim excerpt from the client's words, trimmed with "…" only. Never reword. */
  quote: string;
  /** Shown under the role, e.g. when the quote is translated. */
  note?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Daniel Dohne",
    role: "CEO, Aramid Labs",
    avatar: dani,
    quote:
      "She worked quickly and efficiently, delivering a fantastic design ahead of schedule. Even after the project was completed, she was incredibly helpful, providing support and ensuring everything ran smoothly. Highly recommend!",
  },
  {
    name: "Mad Bear",
    role: "Founder, MadPerps",
    avatar: madperps,
    quote:
      "…exceptional branding for MadPerps. Her style, font choices, and color palette perfectly captured our vision for our perpetual futures DEX on Berachain. What impressed us most was her speed and accuracy - nailing it on the first try.",
  },
  {
    name: "Marvin Scaringella",
    role: "CEO, VenaLabs",
    avatar: marvin,
    note: "Translated from French",
    quote:
      "…we had the pleasure of working with her on our VenaLabs project. She showed real initiative and exceptional creativity, turning our ideas into a visual reality. It's rare to meet a designer who understands her clients' needs so deeply and answers them so brilliantly.",
  },
];

// Lead form options, shared by the form and the API so they can't drift apart.
export const needs = packages.map((p) => ({ value: p.slug, label: p.title }));

export const budgets = ["Under $3k", "$3k-6k", "$6k-12k", "$12k+", "Not sure yet"];

export const timelines = ["ASAP", "Within a month", "1-3 months", "Just exploring"];
