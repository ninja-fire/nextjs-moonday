// Thin wrapper around Plausible's custom events. A no-op when the script isn't loaded
// (NEXT_PUBLIC_PLAUSIBLE_DOMAIN unset, ad blockers), so callers never need to check.
//
// Funnel: pageview → "CTA Click" → "Booking" (cal.com) or "Lead" (form, fired on /thanks).

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: ((event: string, options?: { props?: Props }) => void) & { q?: unknown[] };
  }
}

export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}
