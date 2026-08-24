"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { findSimulation } from "@/lib/catalog";
import { getCareer } from "@/data/careers";
import { gradeAll } from "@/lib/grade";
import { getPublished, recordAttempt, subscribe } from "@/lib/store";

export default function SimulationPage() {
  const { id } = useParams();
  const [published, setPublished] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const sync = () => setPublished(getPublished());
    sync();
    setLoaded(true);
    return subscribe(sync);
  }, []);

  const sim = useMemo(() => findSimulation(id, published), [id, published]);

  if (!loaded) return <div className="container section" />;

  if (!sim) {
    return (
      <div className="narrow section">
        <div className="stack stack-4">
          <h1 style={{ fontSize: 28 }}>That simulation isn&apos;t here</h1>
          <p className="muted">It may have been removed, or the link is wrong.</p>
          <div>
            <Link href="/student" className="btn btn-primary">
              Back to topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const steps = sim.steps || [];
  const step = steps[stepIdx];
  const career = sim.careerId ? getCareer(sim.careerId) : null;

  const setAnswer = (value) => setAnswers((a) => ({ ...a, [step.id]: value }));
  const answered = (s) => {
    const v = answers[s.id];
    return v !== undefined && String(v).trim() !== "";
  };

  const submit = () => {
    const r = gradeAll(sim, answers);
    setResult(r);
    recordAttempt(sim.id, r);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retry = () => {
    setResult(null);
    setAnswers({});
    setStepIdx(0);
  };

  /* ------------------------------ results ------------------------------ */

  if (result) {
    const tone = result.verdict.tone;
    return (
      <div className="container section">
        <div className="stack stack-8" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className={`verdict verdict-${tone}`}>
            <div className="stack stack-3">
              <p className="eyebrow" style={{ color: "inherit", opacity: .8 }}>
                {sim.role} · {sim.place}
              </p>
              <h2>{result.verdict.label}</h2>
              <p style={{ fontSize: 17 }}>
                You scored <strong className="mono">{result.pct}%</strong> across {result.outOf} decisions.
              </p>
            </div>
          </div>

          <div className="stack stack-6">
            <h3>How a supervisor would mark it</h3>
            {steps.map((s, i) => {
              const r = result.results[i];
              const cls = r.score >= 1 ? "ok" : r.score > 0 ? "part" : "no";
              return (
                <div key={s.id} className={`result-item ${cls}`}>
                  <div className="stack stack-3">
                    <div className="row" style={{ gap: 8 }}>
                      <span className="mono small" style={{ color: "var(--ink-3)" }}>
                        Step {i + 1}
                      </span>
                      <span className={r.score >= 1 ? "pill pill-go" : r.score > 0 ? "pill pill-warn" : "pill pill-flag"}>
                        {r.score >= 1 ? "Correct" : r.score > 0 ? "Partly" : "Not yet"}
                      </span>
                    </div>
                    <p style={{ fontWeight: 600 }}>{s.prompt}</p>
                    <p className="small muted">{r.note}</p>
                    <div className="why">
                      <p>
                        <b>What a practitioner does:</b> {s.modelAnswer}
                      </p>
                      <p style={{ marginTop: 8 }}>{s.why}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {career && result.pct >= 55 && (
            <div className="card card-pad-lg" style={{ background: "var(--brand-soft)", borderColor: "transparent" }}>
              <div className="stack stack-4">
                <p className="eyebrow">Career unlocked</p>
                <h3 style={{ fontSize: 24 }}>{career.title}</h3>
                <p className="small">{career.blurb}</p>
                <div className="row" style={{ gap: 8 }}>
                  <span className="pill">{career.field}</span>
                  {!career.degreeRequired && <span className="pill pill-go">No degree required</span>}
                </div>
                <div>
                  <Link href={`/careers/${career.id}`} className="btn btn-primary btn-sm">
                    See the pathway
                  </Link>
                </div>
              </div>
            </div>
          )}

          {career && result.pct < 55 && (
            <div className="empty">
              Get above 55% to unlock the {career.title} pathway. Read the marking above and run it
              again — that&apos;s what the job is.
            </div>
          )}

          <div className="row">
            <button type="button" className="btn btn-primary" onClick={retry}>
              Run it again
            </button>
            <Link href="/student" className="btn btn-ghost">
              Pick another topic
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ------------------------------ working ------------------------------ */

  return (
    <div className="container section">
      <div className="stack stack-6">
        <div className="stack stack-3">
          <div className="row" style={{ gap: 8 }}>
            <span className="pill pill-brand">{sim.role}</span>
            <span className="pill">{sim.industry}</span>
            {sim.source === "community" && <span className="pill pill-accent">Community published</span>}
          </div>
          <h1 style={{ fontSize: 32 }}>{sim.title}</h1>
          <p className="muted">
            {sim.org}
            {sim.place ? ` · ${sim.place}` : ""}
          </p>
        </div>

        <div className="sim-grid">
          {/* ---------- aside: the brief ---------- */}
          <aside className="sim-aside">
            <div className="curriculum-tag">
              <span aria-hidden="true">📘</span>
              <span>
                You are using {sim.curriculum.grade} · {sim.curriculum.topic}
              </span>
            </div>

            <div className="card">
              <div className="stack stack-3">
                <p className="eyebrow">The brief</p>
                <p className="small">{sim.brief}</p>
              </div>
            </div>

            {sim.dataTable && (
              <div className="datatable">
                <div className="datatable-cap">{sim.dataTable.caption}</div>
                <dl style={{ margin: 0 }}>
                  {sim.dataTable.rows.map(([k, v]) => (
                    <div className="datarow" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {sim.practitioner?.note && (
              <div className="card">
                <div className="stack stack-2">
                  <p className="eyebrow">From the person who wrote this</p>
                  <p className="small" style={{ fontStyle: "italic" }}>
                    &ldquo;{sim.practitioner.note}&rdquo;
                  </p>
                  <p className="small mono" style={{ color: "var(--ink-3)" }}>
                    {sim.practitioner.name} — {sim.practitioner.role}
                  </p>
                </div>
              </div>
            )}
          </aside>

          {/* ---------- main: the work ---------- */}
          <div className="stack stack-4">
            <div className="steps-bar" aria-hidden="true">
              {steps.map((s, i) => (
                <span
                  key={s.id}
                  className={`step-dot ${i < stepIdx ? "done" : ""} ${i === stepIdx ? "now" : ""}`}
                />
              ))}
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-6">
                <div className="stack stack-3">
                  <span className="mono small" style={{ color: "var(--ink-3)" }}>
                    Decision {stepIdx + 1} of {steps.length}
                  </span>
                  <h3 style={{ fontSize: 20 }}>{step.prompt}</h3>
                  {step.hint && <p className="small muted">{step.hint}</p>}
                </div>

                {step.type === "number" && (
                  <label className="field">
                    <span>Your answer{step.unit ? ` (${step.unit})` : ""}</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={answers[step.id] ?? ""}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type a number"
                      autoComplete="off"
                    />
                  </label>
                )}

                {step.type === "choice" && (
                  <div className="stack stack-3">
                    {step.options.map((o) => (
                      <label key={o.id} className={answers[step.id] === o.id ? "choice picked" : "choice"}>
                        <input
                          type="radio"
                          name={step.id}
                          checked={answers[step.id] === o.id}
                          onChange={() => setAnswer(o.id)}
                        />
                        <span>{o.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {step.type === "text" && (
                  <label className="field">
                    <span>
                      Your answer
                      {step.maxWords ? ` — under ${step.maxWords} words` : ""}
                    </span>
                    <textarea
                      value={answers[step.id] ?? ""}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Write it the way you'd actually send it"
                    />
                    <span className="small mono" style={{ color: "var(--ink-3)" }}>
                      {String(answers[step.id] || "").trim().split(/\s+/).filter(Boolean).length} words
                    </span>
                  </label>
                )}

                <div className="row">
                  {stepIdx > 0 && (
                    <button type="button" className="btn btn-ghost" onClick={() => setStepIdx(stepIdx - 1)}>
                      Back
                    </button>
                  )}
                  {stepIdx < steps.length - 1 ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!answered(step)}
                      onClick={() => setStepIdx(stepIdx + 1)}
                    >
                      Next decision
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-accent"
                      disabled={!steps.every(answered)}
                      onClick={submit}
                    >
                      Submit your work
                    </button>
                  )}
                </div>
              </div>
            </div>

            <p className="small muted">
              Marked against the practitioner&apos;s own rubric. No answers are sent anywhere — the
              marking runs on this device, so it works on a weak connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
