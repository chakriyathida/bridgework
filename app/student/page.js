"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { curriculumIndex, gradeOrder, careersForTopic } from "@/lib/catalog";
import { getPublished, getProgress, getSession, subscribe } from "@/lib/store";

export default function StudentPage() {
  const [published, setPublished] = useState([]);
  const [progress, setProgress] = useState({});
  const [user, setUser] = useState(null);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [grade, setGrade] = useState(null);
  const [subject, setSubject] = useState(null);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    const sync = () => {
      setPublished(getPublished());
      setProgress(getProgress());
      setUser(getSession());
      setSessionLoaded(true);
    };
    sync();
    return subscribe(sync);
  }, []);

  const index = useMemo(() => curriculumIndex(published), [published]);
  const grades = useMemo(() => gradeOrder(Object.keys(index)), [index]);

  // Default to the signed-in student's own grade — but only once the session has
  // actually been read, otherwise we'd lock in grades[0] before the user loads.
  useEffect(() => {
    if (grade || !sessionLoaded || grades.length === 0) return;
    setGrade(grades.includes(user?.grade) ? user.grade : grades[0]);
  }, [grades, user, grade, sessionLoaded]);

  const subjects = grade && index[grade] ? Object.keys(index[grade]).sort() : [];
  const topics = grade && subject && index[grade]?.[subject] ? Object.keys(index[grade][subject]).sort() : [];
  const sims = grade && subject && topic ? index[grade][subject][topic] : [];
  const relatedCareers = subject && topic ? careersForTopic(subject, topic) : [];

  const done = Object.keys(progress).length;

  return (
    <div className="container section">
      <div className="stack stack-8">
        <div className="stack stack-3">
          <p className="eyebrow">Start from what you&apos;re studying</p>
          <h1 style={{ fontSize: 34 }}>
            {user ? `What are you working on, ${user.name.split(" ")[0]}?` : "What are you working on?"}
          </h1>
          <p className="muted" style={{ maxWidth: 620 }}>
            Pick the topic you have homework on. We&apos;ll show you the jobs that use it, and let you
            try one.
            {done > 0 && ` You've completed ${done} simulation${done === 1 ? "" : "s"} so far.`}
          </p>
        </div>

        {/* --- grade --- */}
        <div className="stack stack-3">
          <span className="eyebrow">1 · Grade</span>
          <div className="row" style={{ gap: 8 }}>
            {grades.map((g) => (
              <button
                key={g}
                type="button"
                className={g === grade ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
                onClick={() => {
                  setGrade(g);
                  setSubject(null);
                  setTopic(null);
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* --- subject --- */}
        {grade && (
          <div className="stack stack-3">
            <span className="eyebrow">2 · Subject</span>
            <div className="row" style={{ gap: 8 }}>
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={s === subject ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}
                  onClick={() => {
                    setSubject(s);
                    setTopic(null);
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- topic --- */}
        {grade && subject && (
          <div className="stack stack-3">
            <span className="eyebrow">3 · Topic</span>
            <div className="row" style={{ gap: 8 }}>
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={t === topic ? "btn btn-accent btn-sm" : "btn btn-ghost btn-sm"}
                  onClick={() => setTopic(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- results --- */}
        {topic && (
          <div className="stack stack-6">
            <hr className="hero-rule" />
            <div className="stack stack-2">
              <h2>
                {sims.length} job{sims.length === 1 ? "" : "s"} use {topic.toLowerCase()}
              </h2>
              <p className="muted small">
                {grade} · {subject} · {topic}
              </p>
            </div>

            <div className="grid grid-2">
              {sims.map((sim) => {
                const p = progress[sim.id];
                return (
                  <Link key={sim.id} href={`/student/sim/${sim.id}`} className="card">
                    <div className="stack stack-3">
                      <div className="row" style={{ gap: 8 }}>
                        <span className="pill pill-brand">{sim.role}</span>
                        {sim.source === "community" && <span className="pill pill-accent">New</span>}
                        {p && (
                          <span className={p.pct >= 85 ? "pill pill-go" : p.pct >= 55 ? "pill pill-warn" : "pill pill-flag"}>
                            {p.pct}%
                          </span>
                        )}
                      </div>
                      <h3>{sim.title}</h3>
                      <p className="small muted">
                        {sim.org}
                        {sim.place ? ` · ${sim.place}` : ""}
                      </p>
                      {sim.practitioner?.name && (
                        <p className="small mono" style={{ color: "var(--ink-3)" }}>
                          Written by {sim.practitioner.name} · {sim.minutes || 10} min
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {relatedCareers.length > 0 && (
              <div className="stack stack-3">
                <p className="eyebrow">Careers that also use this topic</p>
                <div className="row" style={{ gap: 8 }}>
                  {relatedCareers.map((c) => (
                    <Link key={c.id} href={`/careers/${c.id}`} className="btn btn-ghost btn-sm">
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {grade && subject && topics.length === 0 && (
          <div className="empty">
            No simulations for this subject yet. If you know someone who does this work, they can
            publish one in about two minutes.
          </div>
        )}
      </div>
    </div>
  );
}
