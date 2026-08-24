"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CAREERS } from "@/data/careers";

export default function CareersPage() {
  const [field, setField] = useState("All");
  const [noDegreeOnly, setNoDegreeOnly] = useState(false);

  const fields = useMemo(() => ["All", ...Array.from(new Set(CAREERS.map((c) => c.field))).sort()], []);

  const shown = CAREERS.filter(
    (c) => (field === "All" || c.field === field) && (!noDegreeOnly || !c.degreeRequired)
  );

  return (
    <div className="container section">
      <div className="stack stack-8">
        <div className="stack stack-3">
          <p className="eyebrow">Careers</p>
          <h1 style={{ fontSize: 34 }}>Jobs nobody told you existed</h1>
          <p className="muted" style={{ maxWidth: 620 }}>
            Ask a fourteen-year-old to name five jobs and you&apos;ll usually get doctor, teacher,
            police, soldier, and one relative&apos;s. Here are {CAREERS.length} more, each one traced
            back to the school subjects that power it.
          </p>
        </div>

        <div className="stack stack-3">
          <div className="row" style={{ gap: 8 }}>
            {fields.map((f) => (
              <button
                key={f}
                type="button"
                className={f === field ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
                onClick={() => setField(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="row" style={{ gap: 8, cursor: "pointer", fontSize: 14.5 }}>
            <input
              type="checkbox"
              checked={noDegreeOnly}
              onChange={(e) => setNoDegreeOnly(e.target.checked)}
              style={{ accentColor: "var(--brand)" }}
            />
            <span className="muted">Only show careers you can enter without a university degree</span>
          </label>
        </div>

        <div className="grid grid-2">
          {shown.map((c) => (
            <Link key={c.id} href={`/careers/${c.id}`} className="card">
              <div className="stack stack-3">
                <div className="row" style={{ gap: 8 }}>
                  <span className="pill">{c.field}</span>
                  {!c.degreeRequired && <span className="pill pill-go">No degree</span>}
                  {c.simId && <span className="pill pill-accent">Simulation</span>}
                </div>
                <h3>{c.title}</h3>
                <p className="small muted">{c.blurb}</p>
                <p className="small mono" style={{ color: "var(--ink-3)" }}>
                  Powered by {c.subjects.map((s) => s.subject).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {shown.length === 0 && <div className="empty">No careers match that filter yet.</div>}
      </div>
    </div>
  );
}
