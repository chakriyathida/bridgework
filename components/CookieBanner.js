"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/store";

export default function CookieBanner() {
  const [choice, setChoice] = useState("pending");

  useEffect(() => {
    setChoice(getConsent());
  }, []);

  if (choice === "pending" || choice) return null;

  const decide = (value) => {
    setConsent(value);
    setChoice(value);
  };

  return (
    <div className="cookiebar" role="dialog" aria-label="Storage choices">
      <div className="stack stack-2">
        <strong style={{ fontSize: 15 }}>Bridgework stores a little data on this device</strong>
        <p className="small muted">
          Essential storage keeps you signed in and remembers your consent choice. Optional storage
          saves your simulation progress and scores so you can pick up where you left off. Nothing is
          sent to a server — this prototype has no backend, and no data leaves this browser.
        </p>
      </div>
      <div className="row">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => decide("all")}>
          Accept all
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => decide("essential")}>
          Essential only
        </button>
      </div>
    </div>
  );
}
