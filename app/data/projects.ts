import type { StaticImageData } from "next/image";

import looterCover from "../../public/work/looter/looter.png";
import looterPitch from "../../public/work/looter/looter.webp";
import looterLogo from "../../public/work/looter/looterlogo.webp";
import looterSwap from "../../public/work/looter/looterswap.webp";
import looterLanding from "../../public/work/looter/looter03.webp";
import looterLogoAnimated from "../../public/work/looter/logoanimated.gif";
import looterCardAnimated from "../../public/work/looter/cardanimated.gif";
import looterBtnAnimated from "../../public/work/looter/btnanimated.gif";
import looterKey from "../../public/work/looter/keygif.gif";
import looterChest from "../../public/work/looter/chest540.gif";
import looterBlur from "../../public/work/looter/looterblur.png";
import looterStep1 from "../../public/work/looter/step1.png";
import looterStep2 from "../../public/work/looter/step2.png";
import looterStep3 from "../../public/work/looter/step3.png";

import trooperCover from "../../public/work/trooper/trooper.png";
import trooperP1 from "../../public/work/trooper/problem1.png";
import trooperP2 from "../../public/work/trooper/problem2.png";
import trooperP3 from "../../public/work/trooper/problem3.png";
import trooper01 from "../../public/work/trooper/trooper01.webp";
import trooper02 from "../../public/work/trooper/trooper02.webp";
import trooper03 from "../../public/work/trooper/trooper03.webp";
import trooperWordmark from "../../public/trooper3.webp";
import trooperMascot from "../../public/trooper1.webp";
import trooperCrates from "../../public/trooper4.webp";

import coinhouseCover from "../../public/coinhouse-mockup-pages.webp";
import coinhouseLogo from "../../public/coinhouselogo.svg";
import coinhousePages from "../../public/Coinhouse-gallery.webp";
import coinhouseCoins from "../../public/coinhouseCoins.webp";
import coinhouseCard from "../../public/cartevoeux-gallery.webp";

import linxoCover from "../../public/linxo3.webp";
import linxoBank from "../../public/linxo1.webp";
import linxoBanner from "../../public/linxo2.webp";
import linxoIcons from "../../public/linxo4.webp";
import linxoData from "../../public/linxo5.webp";

import venaCover from "../../public/work/venalabs/cover.webp";
import venaDiscover from "../../public/work/venalabs/v2-discover.webp";
import venaCourses from "../../public/work/venalabs/v2-courses.webp";
import venaAirdrops from "../../public/work/venalabs/v2-airdrops.webp";
import venaRoutines from "../../public/work/venalabs/v2-routines.webp";
import venaLeaderboard from "../../public/work/venalabs/v2-leaderboard.webp";
import venaProfile from "../../public/work/venalabs/v2-profile.webp";
import venaArchitecture from "../../public/work/venalabs/architecture.webp";
import venaV1Discover from "../../public/work/venalabs/v1-discover.webp";
import venaV1Airdrops from "../../public/work/venalabs/v1-airdrops.webp";
import venaV1Routines from "../../public/work/venalabs/v1-routines.webp";
import venaV1Courses from "../../public/work/venalabs/v1-courses.webp";
import venaV1Leaderboard from "../../public/work/venalabs/v1-leaderboard.webp";
import venaV1Profile from "../../public/work/venalabs/v1-profile.webp";

import ethCover from "../../public/work/ethzurich/cover.webp";
import ethCrowd from "../../public/work/ethzurich/illustration-crowd.webp";
import ethManifesto from "../../public/work/ethzurich/illustration-manifesto.webp";
import ethVenue from "../../public/work/ethzurich/illustration-venue.webp";
import ethMeetups from "../../public/work/ethzurich/illustration-meetups.webp";
import ethAudience from "../../public/work/ethzurich/illustration-audience.webp";
import ethStage from "../../public/work/ethzurich/illustration-stage.webp";
import ethCity from "../../public/work/ethzurich/illustration-city.webp";
import ethEther from "../../public/work/ethzurich/illustration-ether.webp";
import ethPeople from "../../public/work/ethzurich/illustration-people.webp";
import ethPosterType from "../../public/work/ethzurich/poster-type.webp";
import ethPosterEth from "../../public/work/ethzurich/poster-eth.webp";
import ethPosterHand from "../../public/work/ethzurich/poster-hand.webp";
import ethLogo from "../../public/work/ethzurich/logo.webp";
import ethLogomark from "../../public/work/ethzurich/logomark.webp";
import ethPalette from "../../public/work/ethzurich/palette.webp";
import ethType from "../../public/work/ethzurich/type.webp";
import ethKeyVisual from "../../public/work/ethzurich/key-visual.webp";
import ethBillboard from "../../public/work/ethzurich/billboard.webp";
import ethTote from "../../public/work/ethzurich/tote.webp";

/*
 * Every case study on the site lives here.
 *
 * To add a project:
 *   1. Drop its images in /public/work/<slug>/ and import them above.
 *   2. Add an entry to `projects`. Order = order on /work; `featured` ones also show on the home page.
 *   3. It gets a page at /work/<slug>. Every case-study section is optional: empty ones aren't shown.
 *
 * Write in the studio voice ("we"), and only state what really happened: no invented metrics or quotes.
 */

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  /** Needed for animated GIFs so Next doesn't freeze them on the first frame. */
  unoptimized?: boolean;
};

export type Phase = {
  name: string;
  intro?: string;
  items?: { title: string; text: string }[];
};

export type Highlight = {
  title: string;
  images: ProjectImage[];
  /** The v1 screen this highlight replaces; renders a v1 / v2 comparison. */
  before?: ProjectImage;
  text?: string;
  issue?: string;
  solution?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One-line positioning, shown under the title. */
  tagline: string;
  /** Short sector label for cards, e.g. "DeFi exchange". */
  sector: string;
  year?: string;
  link?: { href: string; label: string };
  cover: ProjectImage;
  tags: string[];
  summary: string;
  /** Home page shows featured projects. */
  featured?: boolean;
  /** The challenge: what the client needed. */
  challenges?: string[];
  /** The approach: how we got there. */
  approach?: Phase[];
  highlightsTitle?: string;
  highlights?: Highlight[];
  gallery?: ProjectImage[];
  /** Measured outcomes only. Leave empty rather than estimate. */
  results?: string[];
  /** Name of a testimonial in data/site.ts from this client. */
  testimonial?: string;
};

export const projects: Project[] = [
  {
    slug: "looter",
    title: "Looter",
    tagline: "A DeFi exchange with the soul of a treasure hunt",
    sector: "DeFi exchange",
    cover: { src: looterCover, alt: "Looter brand visuals with the 3D mascot and the DEX interface" },
    tags: ["Branding", "dApp design", "3D design", "Pitch deck"],
    featured: true,
    summary:
      "Looter is a deflationary DEX where trading is a strategy game: users build yield strategies, mine liquidity and compete for loot. The team needed a brand loud enough for the Degen crowd and an interface clear enough to make its tokenomics click. We designed the identity, the 3D world, the dApp, the investor pitch deck and the social kit.",
    challenges: [
      "Make complex tokenomics clear and engaging.",
      "Design a visual identity that's both sophisticated and appealing to the Degen community.",
      "Integrate gamification into the experience without it feeling bolted on.",
    ],
    approach: [
      {
        name: "Define",
        intro:
          "DeFi has a retention problem: products are powerful but confusing, and most users leave before they get it. Research and user interviews pointed to three things Looter had to nail: tokenomics people can understand, an identity people want to belong to, and game mechanics that feel natural.",
      },
      {
        name: "Design",
        intro:
          "We built the brand on neon and cyberpunk aesthetics: sophisticated enough to be taken seriously, playful enough for the Degen crowd. In the product, every complex mechanic got a visual cue and an intuitive UI element, so users understand what they're doing while enjoying the game around it.",
      },
      {
        name: "Refine",
        intro:
          "Several rounds of user testing and iterative design sessions tuned every detail, from the color system to the micro-interactions.",
      },
    ],
    highlightsTitle: "Design highlights",
    highlights: [
      {
        title: "A guided swap that never traps you",
        images: [
          { src: looterStep1, alt: "Looter swap flow, step 1: choose tokens" },
          { src: looterStep2, alt: "Looter swap flow, step 2: confirm" },
          { src: looterStep3, alt: "Looter swap flow, step 3: transaction notification" },
        ],
        text: "Swapping is broken into clear steps, paired with real-time notifications. Users aren't stuck watching a spinner: they can keep exploring the app while the transaction runs.",
      },
      {
        title: "Motion that sells the brand",
        images: [
          { src: looterLogoAnimated, alt: "Animated Looter logo", unoptimized: true },
          { src: looterCardAnimated, alt: "Animated LOOT / ETH card", unoptimized: true },
          { src: looterBtnAnimated, alt: "Animated Open App button", unoptimized: true },
        ],
        text: "The animated logo, the living LOOT / ETH card and the fluid \"Open App\" button make the product instantly recognizable, and stop the scroll on social media, where a DeFi project wins or loses its community.",
      },
      {
        title: "A 3D world to belong to",
        images: [
          { src: looterKey, alt: "3D cryptographic key", unoptimized: true },
          { src: looterChest, alt: "3D glowing loot chest", unoptimized: true },
          { src: looterBlur, alt: "3D character in a hoodie and AR goggles" },
        ],
        text: "A glowing cube etched with circuits for the decentralized tech underneath, a key for the cryptography that secures access, and a hooded figure in AR goggles for the Looter user. Together they turn a DEX into a world people want to be part of.",
      },
    ],
    gallery: [
      { src: looterPitch, alt: "Looter pitch deck slides" },
      { src: looterLogo, alt: "Looter logo" },
      { src: looterLanding, alt: "Looter landing page" },
      { src: looterSwap, alt: "Looter swap interface" },
    ],
  },
  {
    slug: "trooper",
    title: "Trooper",
    tagline: "A job market where gamers get hired, and get paid safely",
    sector: "Web3 gaming job market",
    cover: { src: trooperCover, alt: "Trooper app screens: gamer profile, job listings and landing page" },
    tags: ["Branding", "3D mascot", "Landing page", "Web app UX/UI"],
    featured: true,
    summary:
      "Trooper connects gamers, guilds and studios in the play-to-earn economy. Companies post paid missions, players apply with a profile that proves what they can do, and a smart-contract escrow makes sure everyone gets paid. We designed the brand, the 3D mascot and the whole product, from first wireframes to polished UI.",
    challenges: [
      "Connect gamers and gaming professionals on one intuitive platform.",
      "Make a blockchain escrow feel secure and simple, without asking gamers to read a whitepaper.",
      "Use gamification to build trust between strangers.",
    ],
    approach: [
      {
        name: "Define",
        intro:
          "Research covered the audience, the competitive landscape and the latest trends in blockchain and pro gaming. Workshops with the founders kept the vision and the product goals aligned from day one.",
        items: [
          { title: "Branding", text: "A unique identity that speaks to gamers and studios alike." },
          { title: "User profiles", text: "Profiles rich enough to hire from, for players and professionals." },
          { title: "Job listings", text: "Posting and applying in a few steps, with no friction." },
          { title: "Escrow", text: "A secure, blockchain-based escrow for every payment." },
        ],
      },
      {
        name: "Design",
        intro:
          "A bold, futuristic identity with a 3D mascot players remember. Profiles act as a player's CV, studios list a mission in minutes, and funds are locked in a smart contract before a job starts. Badges and XP make reliability visible at a glance.",
      },
      {
        name: "Refine",
        intro:
          "Several rounds of user testing showed where the experience held up and where it didn't, and fed straight back into the design: better search and filters, and clearer review and reputation signals.",
      },
    ],
    highlightsTitle: "What testing revealed, and how we fixed it",
    highlights: [
      {
        title: "A brand players remember",
        images: [
          { src: trooperWordmark, alt: "Trooper wordmark in purple on a dark background" },
          { src: trooperMascot, alt: "Trooper 3D mascot wearing a purple helmet" },
          { src: trooperCrates, alt: "3D Trooper loot crates falling under parachutes" },
        ],
        text: "A bold, futuristic identity that reflects both the innovation of blockchain and the excitement of gaming, built to stand out in a crowded, noisy space. The 3D mascot gives the brand a face players remember.",
      },
      {
        title: "Studios couldn't tell applicants apart",
        images: [{ src: trooperP1, alt: "Trooper applicant review screen with player comments and badges" }],
        issue:
          "Studios hiring several players for one mission struggled to filter applications. XP and badges alone weren't enough to separate a reliable player from a lucky one.",
        solution:
          "Detailed reviews with comments for each player, so studios can read what previous employers thought. Badges were reworked to surface specific skills instead of a generic score.",
      },
      {
        title: "Will anyone see my job post?",
        images: [{ src: trooperP2, alt: "Trooper job post with social sharing options" }],
        issue: "Early users worried that a brand-new platform wouldn't attract enough gamers to their missions.",
        solution: "One-tap sharing of any job post to social media. Every studio becomes a distribution channel.",
      },
      {
        title: "Finding anything took too long",
        images: [{ src: trooperP3, alt: "Trooper global search results across gamers, guilds and jobs" }],
        issue: "Finding a specific profile or opportunity meant hunting through separate sections.",
        solution:
          "A global search across the whole platform, with filters for skills, game genres, job types and guild specialties, and results from every category on one page.",
      },
    ],
    gallery: [
      { src: trooper01, alt: "Trooper interface overview" },
      { src: trooper02, alt: "Trooper interface details" },
      { src: trooper03, alt: "Trooper brand and mascot" },
    ],
  },
  {
    slug: "venalabs",
    title: "VenaLabs",
    tagline: "A full redesign of a crypto learning app, from v1 to v2",
    sector: "Crypto education",
    year: "2025",
    link: { href: "https://venalabs.com/en/landing", label: "venalabs.com" },
    cover: { src: venaCover, alt: "The VenaLabs logo in 3D ice blue, floating above a pedestal" },
    tags: ["Product design", "Redesign", "Design system", "Gamification"],
    featured: true,
    testimonial: "Marvin Scaringella",
    summary:
      "VenaLabs helps people learn crypto and farm airdrops, with courses, step-by-step airdrop guides and daily routines from creators. We redesigned the whole app from v1 to v2: a new structure, a new design system and a rewards loop that makes progress visible.",
    challenges: [
      "Bring courses, airdrops and routines into one clear structure.",
      "Make progress visible and rewarding, so users come back every day.",
      "Give the team a design system to ship v2 and beyond.",
    ],
    approach: [
      {
        name: "Research",
        intro:
          "Before touching a screen, we mapped the whole app in FigJam: every section, every sub-page and the links between them. That map showed the problem: the same content lived in several places and nothing told you where to start.",
      },
      {
        name: "Restructure",
        intro:
          "v2 starts from what people come to do: learn, farm, keep a routine. Discover became the hub, and one layout carries everything: navigation on the left, content in the middle, your streak and today's tasks always at hand.",
      },
      {
        name: "Design system",
        intro:
          "A dark, focused interface with icy blue accents, and one card system for every content type in several sizes and states.",
      },
      {
        name: "Gamification",
        intro: "VenaPoints, chests, streaks and a leaderboard. Every useful action gives feedback, so there's always a next goal.",
      },
    ],
    highlightsTitle: "From v1 to v2",
    highlights: [
      {
        title: "Mapping the app first",
        images: [{ src: venaArchitecture, alt: "VenaLabs app architecture in FigJam" }],
        text: "The architecture became the brief for v2: five main sections, Discover linking to the rest, and premium and settings each in one place.",
      },
      {
        title: "Discover",
        before: { src: venaV1Discover, alt: "VenaLabs v1 home: a marketing hero above a table" },
        images: [{ src: venaDiscover, alt: "VenaLabs v2 Discover: recommended quest, airdrops and today's routine" }],
        issue: "The home page was a marketing page, with the table pushed below the fold. Returning users scrolled past it every time.",
        solution: "Discover answers one question: what should I do today? A recommended quest, the airdrops worth your time and today's routine.",
      },
      {
        title: "Airdrops",
        before: { src: venaV1Airdrops, alt: "VenaLabs v1 airdrops: a dense table" },
        images: [{ src: venaAirdrops, alt: "VenaLabs v2 airdrops: cards with filters" }],
        issue: "A spreadsheet: ten columns, a row of filters and unlabeled progress bars.",
        solution: "Cards you can scan in a second, with tabs for new, trending and favorites and filters for cost, network, reward and time.",
      },
      {
        title: "Routines",
        before: { src: venaV1Routines, alt: "VenaLabs v1 routines: large creator banners" },
        images: [{ src: venaRoutines, alt: "VenaLabs v2 routines as cards with progress and frequency" }],
        issue: "Big creator banners, but nothing about what a routine contains or how far along you are.",
        solution: "Each card says who made it, what it's for, how often to do it and how far along you are.",
      },
      {
        title: "Courses",
        before: { src: venaV1Courses, alt: "VenaLabs v1 course map with identical grey cards" },
        images: [{ src: venaCourses, alt: "VenaLabs v2 course page with chapter map and rewards" }],
        issue: "Every chapter looked the same: small grey cards, tiny text, no idea what a course contains.",
        solution: "A course page with the chapter map, what you'll earn and the list of chapters, before you press start.",
      },
      {
        title: "Leaderboard",
        before: { src: venaV1Leaderboard, alt: "VenaLabs v1 leaderboard: a long list" },
        images: [{ src: venaLeaderboard, alt: "VenaLabs v2 leaderboard with categories" }],
        issue: "One long list ranked by points. If you weren't near the top, there was nothing in it for you.",
        solution: "VenaPoints, chests and streaks each have their own ranking, so newer users have a race they can win.",
      },
      {
        title: "Profile",
        before: { src: venaV1Profile, alt: "VenaLabs v1 profile: an avatar on an empty page" },
        images: [{ src: venaProfile, alt: "VenaLabs v2 profile with level, rewards and achievements" }],
        issue: "An avatar and a username on an empty page.",
        solution: "The profile becomes a trophy shelf: level progress, VenaPoints, chests, streaks and everything you've completed.",
      },
    ],
  },
  {
    slug: "ethzurich",
    title: "ETHZürich",
    tagline: "Brand identity, illustrations and posters for Zürich's Ethereum conference",
    sector: "Web3 conference",
    year: "2026",
    link: { href: "https://ethereumzuri.ch/", label: "ethereumzuri.ch" },
    cover: { src: ethCover, alt: "ETHZürich illustration: a crowd at a conference in blue, red and pink" },
    tags: ["Branding", "Illustration", "Posters", "Event design"],
    featured: true,
    summary:
      "EthereumZüri.ch is a community-driven Ethereum conference at the University of Zürich. We designed the whole identity: logo, colors, type, patterns, a series of illustrations and the event posters. Bold enough for a billboard, warm enough to make people want to show up.",
    challenges: [
      "Root the brand in both Ethereum and Zürich.",
      "Stand out from the polished, corporate look of Swiss finance.",
      "Give the team a system they can apply on their own.",
    ],
    highlightsTitle: "Selected work",
    highlights: [
      {
        title: "A mark made of the city",
        images: [
          { src: ethLogo, alt: "ETHZürich logo" },
          { src: ethLogomark, alt: "Logomark construction: Zürich, Ethereum, Z and a speech bubble" },
        ],
        text: "The logomark folds four ideas into one shape: Zürich's diagonal flag, the Ethereum diamond, the letter Z and a speech bubble for the talks.",
      },
      {
        title: "Colors and type with a voice",
        images: [
          { src: ethPalette, alt: "ETHZürich color palette" },
          { src: ethType, alt: "Chaney display typeface" },
        ],
        text: "Convergence Blue, Builder Red, Alpine Light, Limmat Pink and Midnight Chain, each named after the city or the community. A wide display face for impact, a clean grotesk for reading.",
      },
      {
        title: "Illustrations that bring people in",
        images: [
          { src: ethManifesto, alt: "Illustration of a hand sprinkling sparks over a landscape" },
          { src: ethVenue, alt: "Illustration of people networking in a conference venue" },
          { src: ethMeetups, alt: "Illustration grid of people meeting and talking" },
          { src: ethAudience, alt: "Illustration of an audience facing a stage" },
          { src: ethStage, alt: "Illustration of a woman looking at an empty stage" },
          { src: ethCrowd, alt: "Illustration of conference attendees" },
          { src: ethCity, alt: "Illustration of attendees in front of Zürich buildings" },
          { src: ethEther, alt: "Illustration of two faces around the Ethereum diamond" },
          { src: ethPeople, alt: "Illustration of six attendees in a grid" },
        ],
        text: "A series of textured, flat illustrations in the brand colors. People first, technology as a spark.",
      },
      {
        title: "Welcome and agenda posters",
        images: [
          { src: ethPosterType, alt: "Typographic ETHZürich welcome poster in pink" },
          { src: ethPosterEth, alt: "ETHZürich welcome poster with the Ethereum illustration" },
          { src: ethPosterHand, alt: "ETHZürich welcome poster with the hand illustration" },
        ],
        text: "28 A0 posters for the venue from one template: seven visuals, four colorways, each with the agenda QR code and partner logos.",
      },
      {
        title: "Key visual, out in the city",
        images: [
          { src: ethKeyVisual, alt: "ETHZürich key visual" },
          { src: ethBillboard, alt: "ETHZürich billboard" },
          { src: ethTote, alt: "ETHZürich tote bag" },
        ],
        text: "The key visual uses the full name as a graphic: huge, stacked and impossible to miss, from a billboard down to a tote bag.",
      },
    ],
  },
  {
    slug: "coinhouse",
    title: "Coinhouse",
    tagline: "Rebranding, website and motion for a crypto platform",
    sector: "Digital currency exchange",
    cover: { src: coinhouseCover, alt: "Coinhouse website pages and a laptop on a lavender background" },
    tags: ["Rebranding", "Landing page", "Social content", "Motion design"],
    summary:
      "Coinhouse is a digital currency exchange. We worked on its rebranding, landing pages, social content and motion design, carrying one gradient-led identity from the website to 3D coins and seasonal cards.",
    highlightsTitle: "Selected work",
    highlights: [
      {
        title: "The identity",
        images: [
          { src: coinhouseLogo, alt: "Coinhouse logo" },
          { src: coinhouseCard, alt: "Coinhouse 2023 greeting card with a neon 2023 and a bitcoin" },
        ],
      },
      {
        title: "Website and landing pages",
        images: [{ src: coinhousePages, alt: "Coinhouse managed portfolio landing page" }],
      },
      {
        title: "3D and social content",
        images: [{ src: coinhouseCoins, alt: "3D Ethereum, Uniswap and USDC coins" }],
      },
    ],
  },
  {
    slug: "linxo",
    title: "Linxo Connect",
    tagline: "Visual identity, illustrations and icons for an open banking platform",
    sector: "Payment and financial solutions",
    cover: { src: linxoCover, alt: "Linxo Connect website on laptop, tablet and phone" },
    tags: ["Visual identity", "Landing page", "2D illustrations", "Icon design"],
    summary:
      "Linxo Connect builds payment and financial solutions. We designed its visual identity, landing page, a series of 2D illustrations and an icon set, in a warm yellow system that makes open banking feel approachable.",
    highlightsTitle: "Selected work",
    highlights: [
      {
        title: "Illustrations",
        images: [
          { src: linxoBank, alt: "Linxo illustration: a person unlocking a bank" },
          { src: linxoData, alt: "Linxo illustration: a person on a wallet surrounded by charts" },
        ],
      },
      {
        title: "Banners",
        images: [{ src: linxoBanner, alt: "Linxo illustrated banners about payments and account connections" }],
      },
      {
        title: "Icon set",
        images: [{ src: linxoIcons, alt: "Linxo icon set in yellow and orange" }],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Previous / next project, wrapping around. */
export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}
