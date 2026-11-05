'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { links } from "../data/site";
import { track } from "../lib/analytics";

type CalApi = ((...args: unknown[]) => void) & { ns?: Record<string, CalApi>; q?: unknown[]; loaded?: boolean };

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

// cal.com's official embed loader, as a function so it runs once per page.
function loadCal() {
  if (window.Cal) return window.Cal;
  /* eslint-disable prefer-rest-params, @typescript-eslint/no-explicit-any */
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api: any = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  /* eslint-enable prefer-rest-params, @typescript-eslint/no-explicit-any */
  return window.Cal!;
}

// Inline booking calendar. On a confirmed booking, records the conversion and sends people to /thanks.
export default function CalEmbed({ location }: { location: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mount = () => {
      if (el.dataset.loaded) return;
      el.dataset.loaded = "true";
      const Cal = loadCal();
      Cal("init", "intro", { origin: "https://app.cal.com" });
      const ns = Cal.ns!.intro;
      ns("inline", { elementOrSelector: el, calLink: links.calLink, config: { layout: "month_view", theme: "dark" } });
      ns("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view", cssVarsPerTheme: { dark: { "cal-brand": "#E7EEEB" } } });
      ns("on", {
        action: "bookingSuccessfulV2",
        callback: () => {
          track("Booking", { location });
          router.push("/thanks?via=call");
        },
      });
    };
    // cal.com is about 1 MB: only fetch it as the calendar comes near the screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        mount();
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location, router]);

  return (
    <div className="w-full min-h-[36rem]">
      <div ref={ref} className="w-full h-full min-h-[36rem]" />
      <noscript>
        <a href={links.bookCall} className="block p-8 text-center text-label underline">Open the booking page</a>
      </noscript>
    </div>
  );
}
