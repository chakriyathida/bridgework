"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, DEMO_ACCOUNTS } from "@/lib/store";

const GRADES = ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Grade 9");
  const [org, setOrg] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Enter the name you want to be shown as.");
      return;
    }
    signIn({
      name: name.trim(),
      email: email.trim() || `${name.trim().toLowerCase().replace(/\s+/g, "")}@bridgework.local`,
      role,
      grade: role === "student" ? grade : null,
      org: role === "instructor" ? org.trim() : null,
    });
    router.push(role === "instructor" ? "/instructor" : "/student");
  };

  const useDemo = (account) => {
    signIn(account);
    router.push(account.role === "instructor" ? "/instructor" : "/student");
  };

  return (
    <div className="narrow section">
      <div className="stack stack-8">
        <div className="stack stack-3">
          <p className="eyebrow">Sign in</p>
          <h1 style={{ fontSize: 34 }}>Who are you here as?</h1>
          <p className="muted">
            Students run simulations. Instructors — university students, and people working in the
            field — publish them.
          </p>
        </div>

        <form className="card card-pad-lg" onSubmit={submit}>
          <div className="stack stack-6">
            <div className="stack stack-3">
              <span
                className="mono"
                style={{ fontSize: 10.5, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--ink-3)" }}
              >
                I am a
              </span>
              <div className="grid grid-2">
                <label className={role === "student" ? "choice picked" : "choice"}>
                  <input
                    type="radio"
                    name="role"
                    checked={role === "student"}
                    onChange={() => setRole("student")}
                  />
                  <span>
                    <strong>Student</strong>
                    <br />
                    <span className="small muted">Grade 7 and above</span>
                  </span>
                </label>
                <label className={role === "instructor" ? "choice picked" : "choice"}>
                  <input
                    type="radio"
                    name="role"
                    checked={role === "instructor"}
                    onChange={() => setRole("instructor")}
                  />
                  <span>
                    <strong>Instructor</strong>
                    <br />
                    <span className="small muted">Uni student or practitioner</span>
                  </span>
                </label>
              </div>
            </div>

            <label className="field">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="How you want to be shown"
              />
            </label>

            <label className="field">
              <span>Email (optional)</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            {role === "student" ? (
              <label className="field">
                <span>What grade are you in?</span>
                <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                  {GRADES.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>
            ) : (
              <label className="field">
                <span>Where do you work or study?</span>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="e.g. University of Melbourne, or Clean Water Cambodia"
                />
              </label>
            )}

            {error && (
              <p className="small" style={{ color: "var(--flag)" }}>
                {error}
              </p>
            )}

            <div className="row">
              <button type="submit" className="btn btn-primary">
                Continue
              </button>
              <span className="small muted">
                Prototype sign-in — your details stay in this browser and are never sent anywhere.
              </span>
            </div>
          </div>
        </form>

        <div className="stack stack-3">
          <p className="eyebrow">Or use a demo account</p>
          <div className="grid grid-2">
            {DEMO_ACCOUNTS.map((a) => (
              <button
                key={a.email}
                type="button"
                className="card"
                style={{ textAlign: "left", cursor: "pointer", font: "inherit", color: "inherit" }}
                onClick={() => useDemo(a)}
              >
                <div className="stack stack-2">
                  <span className={a.role === "instructor" ? "pill pill-accent" : "pill pill-brand"}>
                    {a.role}
                  </span>
                  <strong>{a.name}</strong>
                  <span className="small muted">{a.grade || a.org}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
