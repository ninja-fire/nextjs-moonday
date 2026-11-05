import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./ui/globals.css";
import { fontclash } from "./ui/font";
import SideNav from './ui/sidenav';
import Footer from './ui/footer';
import StickyCta from './ui/stickycta';
import TabBar from './ui/tabbar';
import Mark from './ui/mark';
import Link from 'next/link';
import { description, links, siteUrl } from "./data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moonday · Brand & Product Design Studio",
    template: "%s · Moonday",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Moonday",
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  // Lets the tab bar sit clear of the home indicator (env(safe-area-inset-bottom)).
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moonday",
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  description,
  sameAs: [links.telegram],
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${fontclash.className} ${fontclash.variable} antialiased overflow-x-clip`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-label focus:px-4 focus:py-2 focus:text-background">
          Skip to content
        </a>
        {/*
          Layers: the content is a raised, textured plate. Behind it, the light (studio gradient), blurred,
          starts under the plate's edge, so only its bleed shows along the seam. Fixed, so it stays while you scroll
          and is there when the rail slides the plate away.
          Holes cut in the plate (.hole/.light) show that same light.
        */}
        <div className="relative flex min-h-screen">
          <div aria-hidden className="light-field pointer-events-none fixed inset-y-0 left-28 -z-10 hidden w-[64vw] md:block" />
          {/* Icons only. On hover (or keyboard focus) the plate slides right to uncover the labels behind it (see .rail in globals.css).
              Phones get the tab bar instead. */}
          <nav aria-label="Main" className="rail group/nav sticky top-0 hidden h-screen w-[4.5rem] shrink-0 md:block">
            <SideNav />
          </nav>
          <div className="plate @container relative z-10 flex grow min-w-0 flex-col md:rounded-l-[32px] md:border-y md:border-l md:border-white/[.08]">
            <div aria-hidden className="plate-texture pointer-events-none absolute inset-0 md:rounded-l-[32px]" />
            <Link href="/" aria-label="Moonday home" className="absolute left-4 top-4 z-30 md:hidden">
              <Mark className="h-6 w-auto" />
            </Link>
            <main id="main" className="relative flex flex-col items-center w-full max-w-[1400px] mx-auto px-4 md:px-12 2xl:px-20 pb-24 pt-14 md:pt-20 gap-32 md:gap-44">
              {children}
            </main>
            <footer className="relative flex flex-col justify-center items-start gap-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 2xl:px-20 pt-16 pb-28 md:pb-10">
              <Footer />
            </footer>
          </div>
        </div>
        <TabBar />
        <StickyCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        {plausibleDomain && (
          <>
            <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.tagged-events.js" strategy="afterInteractive" />
            <Script id="plausible-queue" strategy="afterInteractive">
              {"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
