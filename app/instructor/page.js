"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPublished, getSession, publishSimulation, removePublished, subscribe } from "@/lib/store";

const GRADES = ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const BLANK = {
  title: "",
  role: "",
  org: "",
  place: "",
  industry: "",
  grade: "Grade 9",
  subject: "",
  topic: "",
  brief: "",
  note: "",
  choicePrompt: "",
  optA: "",
  optB: "",
  optC: "",
  optD: "",
  correct: "a",
  choiceWhy: "",
  textPrompt: "",
  maxWords: 30,
  mustMention: "",
  modelAnswer: "",
  textWhy: "",
};

const EXAMPLE = {
  title: "Which building do you inspect first after the flood?",
  role: "Structural Safety Inspector",
  org: "Provincial public works",
  place: "Kampong Cham",
  industry: "Engineering & disaster response",
  grade: "Grade 10",
  subject: "Science",
  topic: "Forces, load & structures",
  brief:
    "Floodwater has receded overnight. Four buildings need clearing before anyone goes back inside: a school, a clinic, a market row and a two-storey house. You have one inspector — you — and daylight until 5pm.",
  note: "People want to hear 'it's safe'. The job is being willing to say it isn't.",
  choicePrompt: "Which do you inspect first, and on what basis?",
  optA: "The school — it holds the most people when it reopens.",
  optB: "The house — the family is waiting outside it right now.",
  optC: "The market row — it's losing income every hour it stays closed.",
  optD: "The clinic — it's the only one treating injuries from the flood itself.",
  correct: "d",
  choiceWhy:
    "You order by consequence-if-it-fails multiplied by how soon people re-enter. The clinic is already taking patients today, so it is the only one where people are inside before you get there. The school holds more people but reopens Monday, which gives you time.",
  textPrompt: "Write the notice you nail to the door of a building you have failed. Under 30 words.",
  maxWords: 30,
  mustMention: "do not enter, reason, who to contact",
  modelAnswer:
    "DO NOT ENTER. Flood damage to the ground floor supports — this building is not safe. Inspection booked Thursday. Questions: provincial public works office, 023 xxx xxx.",
  textWhy:
    "A notice that only says 'unsafe' gets ignored or torn down. It has to say what to do, why, and who to argue with — otherwise people go back inside.",
};

export default function InstructorPage() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [published, setPublished] = useState([]);
  const [form, setForm] = useState(BLANK);
  const [justPublished, setJustPublished] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const sync = () => {
      setUser(getSession());
      setPublished(getPublished());
    };
    sync();
    setReady(true);
    return subscribe(sync);
  }, []);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError("");
  };

  if (!ready) return <div className="container section" />;

  if (!user) {
    return (
      <div className="narrow section">
        <div className="stack stack-4">
          <h1 style={{ fontSize: 28 }}>Sign in to publish</h1>
          <p className="muted">
            Simulations come from people who do the work — university students and practitioners.
          </p>
          <div>
            <Link href="/login" className="btn btn-primary">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const publish = (e) => {
    e.preventDefault();
    const required = ["title", "role", "subject", "topic", "brief", "choicePrompt", "textPrompt"];
    const missing = required.filter((k) => !String(form[k]).trim());
    if (missing.length) {
      setError("Fill in the job title, role, subject, topic, brief and both decisions before publishing.");
      return;
    }

    const slug =
      form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 40) || "simulation";

    const keywords = form.mustMention
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean)
      .map((k) => ({ any: [k.toLowerCase()], label: k }));

    const sim = {
      id: `${slug}-${published.length + 1}`,
      title: form.title.trim(),
      role: form.role.trim(),
      org: form.org.trim() || user.org || "Community contributor",
      place: form.place.trim(),
      industry: form.industry.trim() || "General",
      careerId: null,
      minutes: 10,
      curriculum: { grade: form.grade, subject: form.subject.trim(), topic: form.topic.trim() },
      practitioner: { name: user.name, role: user.org || "Contributor", note: form.note.trim() },
      brief: form.brief.trim(),
      dataTable: null,
      steps: [
        {
          id: "decision",
          type: "choice",
          prompt: form.choicePrompt.trim(),
          options: [
            { id: "a", label: form.optA.trim() || "Option A" },
            { id: "b", label: form.optB.trim() || "Option B" },
            { id: "c", label: form.optC.trim() || "Option C" },
            { id: "d", label: form.optD.trim() || "Option D" },
          ].filter((o) => o.label && !/^Option [A-D]$/.test(o.label) || o.id === form.correct),
          correct: form.correct,
          modelAnswer:
            [form.optA, form.optB, form.optC, form.optD][
              ["a", "b", "c", "d"].indexOf(form.correct)
            ]?.trim() || "See below",
          why: form.choiceWhy.trim() || "Written by the practitioner who published this simulation.",
        },
        {
          id: "written",
          type: "text",
          prompt: form.textPrompt.trim(),
          minWords: 6,
          maxWords: Number(form.maxWords) || 30,
          keywords,
          modelAnswer: form.modelAnswer.trim() || "See the practitioner's note.",
          why: form.textWhy.trim() || "Written by the practitioner who published this simulation.",
        },
      ],
    };

    publishSimulation(sim);
    setJustPublished(sim);
    setForm(BLANK);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container section">
      <div className="stack stack-8" style={{ maxWidth: 800 }}>
        <div className="stack stack-3">
          <p className="eyebrow">Instructor · {user.org || user.name}</p>
          <h1 style={{ fontSize: 34 }}>Publish what your job actually involves</h1>
          <p className="muted" style={{ maxWidth: 620 }}>
            You know a decision you make at work that a fourteen-year-old has never seen. Write it
            down once, link it to the topic it uses, and every student studying that topic can try it.
          </p>
        </div>

        {justPublished && (
          <div className="card card-pad-lg" style={{ background: "var(--go-soft)", borderColor: "var(--go)" }}>
            <div className="stack stack-3">
              <p className="eyebrow" style={{ color: "var(--go)" }}>
                Published — it&apos;s live for students now
              </p>
              <h3>{justPublished.title}</h3>
              <p className="small">
                Students who pick {justPublished.curriculum.grade} · {justPublished.curriculum.subject} ·{" "}
                {justPublished.curriculum.topic} will see it immediately.
              </p>
              <div className="row">
                <Link href={`/student/sim/${justPublished.id}`} className="btn btn-primary btn-sm">
                  View it as a student
                </Link>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => setJustPublished(null)}>
                  Publish another
                </button>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={publish}>
          <div className="stack stack-6">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <h2 style={{ fontSize: 22 }}>New simulation</h2>
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setForm(EXAMPLE)}>
                Fill with an example
              </button>
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-4">
                <p className="eyebrow">1 · The job</p>
                <label className="field">
                  <span>The question the student has to answer</span>
                  <input type="text" value={form.title} onChange={set("title")} placeholder="e.g. Is this village's water safe to drink today?" />
                </label>
                <div className="grid grid-2">
                  <label className="field">
                    <span>Job title</span>
                    <input type="text" value={form.role} onChange={set("role")} placeholder="Water Quality Technician" />
                  </label>
                  <label className="field">
                    <span>Organisation</span>
                    <input type="text" value={form.org} onChange={set("org")} placeholder="Where this happens" />
                  </label>
                  <label className="field">
                    <span>Place</span>
                    <input type="text" value={form.place} onChange={set("place")} placeholder="Kandal Province" />
                  </label>
                  <label className="field">
                    <span>Industry</span>
                    <input type="text" value={form.industry} onChange={set("industry")} placeholder="Public health & engineering" />
                  </label>
                </div>
              </div>
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-4">
                <p className="eyebrow">2 · The curriculum link</p>
                <p className="small muted">
                  This is what makes it findable. Use the wording from the syllabus, not from your degree.
                </p>
                <div className="grid grid-3">
                  <label className="field">
                    <span>Grade</span>
                    <select value={form.grade} onChange={set("grade")}>
                      {GRADES.map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field">
                    <span>Subject</span>
                    <input type="text" value={form.subject} onChange={set("subject")} placeholder="Mathematics" />
                  </label>
                  <label className="field">
                    <span>Topic</span>
                    <input type="text" value={form.topic} onChange={set("topic")} placeholder="Ratio & proportion" />
                  </label>
                </div>
              </div>
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-4">
                <p className="eyebrow">3 · The situation</p>
                <label className="field">
                  <span>The brief — what is happening and what is at stake</span>
                  <textarea value={form.brief} onChange={set("brief")} placeholder="Set the scene in three or four sentences. Include the constraint that makes it hard." />
                </label>
                <label className="field">
                  <span>One line from you about this work (optional)</span>
                  <input type="text" value={form.note} onChange={set("note")} placeholder="The thing you wish someone had told you" />
                </label>
              </div>
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-4">
                <p className="eyebrow">4 · Decision one — the judgement call</p>
                <label className="field">
                  <span>The question</span>
                  <input type="text" value={form.choicePrompt} onChange={set("choicePrompt")} placeholder="What do you do?" />
                </label>
                <div className="stack stack-3">
                  {[
                    ["a", form.optA, set("optA")],
                    ["b", form.optB, set("optB")],
                    ["c", form.optC, set("optC")],
                    ["d", form.optD, set("optD")],
                  ].map(([id, value, onChange]) => (
                    <div className="row" key={id} style={{ gap: 10, flexWrap: "nowrap" }}>
                      <input
                        type="radio"
                        name="correct"
                        checked={form.correct === id}
                        onChange={() => setForm((f) => ({ ...f, correct: id }))}
                        style={{ width: "auto", accentColor: "var(--brand)" }}
                        aria-label={`Mark option ${id.toUpperCase()} correct`}
                      />
                      <input type="text" value={value} onChange={onChange} placeholder={`Option ${id.toUpperCase()}`} />
                    </div>
                  ))}
                  <p className="small muted">Select the radio button next to the answer a practitioner would give.</p>
                </div>
                <label className="field">
                  <span>Why the others fail in practice</span>
                  <textarea value={form.choiceWhy} onChange={set("choiceWhy")} placeholder="This is the most valuable part. Explain the trap in the tempting wrong answer." />
                </label>
              </div>
            </div>

            <div className="card card-pad-lg">
              <div className="stack stack-4">
                <p className="eyebrow">5 · Decision two — the written one</p>
                <label className="field">
                  <span>The task</span>
                  <input type="text" value={form.textPrompt} onChange={set("textPrompt")} placeholder="Write the message you send to..." />
                </label>
                <div className="grid grid-2">
                  <label className="field">
                    <span>Word limit</span>
                    <input type="number" value={form.maxWords} onChange={set("maxWords")} min="10" max="200" />
                  </label>
                  <label className="field">
                    <span>Must mention (comma separated)</span>
                    <input type="text" value={form.mustMention} onChange={set("mustMention")} placeholder="do not enter, reason, who to contact" />
                  </label>
                </div>
                <label className="field">
                  <span>Your model answer</span>
                  <textarea value={form.modelAnswer} onChange={set("modelAnswer")} placeholder="Write it the way you'd actually send it." />
                </label>
                <label className="field">
                  <span>Why it has to be written that way</span>
                  <textarea value={form.textWhy} onChange={set("textWhy")} placeholder="What goes wrong when it isn't?" />
                </label>
              </div>
            </div>

            {error && <p className="small" style={{ color: "var(--flag)" }}>{error}</p>}

            <div className="row">
              <button type="submit" className="btn btn-accent">
                Publish to students
              </button>
              <span className="small muted">Goes live immediately. You can remove it at any time.</span>
            </div>
          </div>
        </form>

        <hr className="hero-rule" />

        <div className="stack stack-4">
          <h2 style={{ fontSize: 22 }}>What you&apos;ve published</h2>
          {published.length === 0 ? (
            <div className="empty">Nothing yet. The form above takes about two minutes.</div>
          ) : (
            <div className="stack stack-3">
              {published.map((s) => (
                <div className="card" key={s.id}>
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="stack stack-2">
                      <strong>{s.title}</strong>
                      <span className="small mono" style={{ color: "var(--ink-3)" }}>
                        {s.curriculum.grade} · {s.curriculum.subject} · {s.curriculum.topic}
                      </span>
                    </div>
                    <div className="row" style={{ gap: 8 }}>
                      <Link href={`/student/sim/${s.id}`} className="btn btn-ghost btn-sm">
                        View
                      </Link>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => removePublished(s.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
