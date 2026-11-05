'use client';

import { useEffect } from "react";
import { track } from "../lib/analytics";

// Fires once per visit to /thanks. Bookings are already counted by the calendar embed.
export default function TrackLead({ via }: { via: string }) {
  useEffect(() => {
    if (via === "form") track("Lead", { via });
  }, [via]);
  return null;
}
