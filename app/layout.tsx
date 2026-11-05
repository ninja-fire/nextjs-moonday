import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./ui/globals.css";
import { fontclash } from "./ui/font";
import SideNav from './ui/sidenav';
import Footer from './ui/footer';
import StickyCta from './ui/stickycta';
import Image from 'next/image';
import gradient from '../public/gradient.webp';
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
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${fontclash.className} ${fontclash.variable} antialiased overflow-x-hidden`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-label focus:px-4 focus:py-2 focus:text-background">
          Skip to content
        </a>
        <div className="flex min-h-screen">
          <nav aria-label="Main" className="sticky top-0 flex flex-col shrink-0 h-screen justify-between items-center px-1 md:px-4 py-6 gap-4">
            <Image quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute top-0 h-screen left-24 w-[64vw] md:left-40 blur-2xl z-[-10] max-w-none pointer-events-none" />
            <SideNav />
          </nav>
          <main id="main" className="relative z-10 bgeffect flex flex-col grow min-w-0 items-center px-4 md:px-16 2xl:px-40 pb-16 pt-24 md:pt-40 gap-32 md:gap-40 rounded-l-[32px] bg-bodybg border border-label/[.08] shadow-xl">
            {children}
          </main>
        </div>
        <footer className="relative flex flex-col justify-center items-start gap-8 py-20 px-8 md:px-40">
          <Footer />
        </footer>
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
