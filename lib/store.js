"use client";

// Prototype persistence layer. Everything lives in this browser — no server, no
// database, no credentials transmitted anywhere. Stated plainly in the README
// and the Devpost writeup as a known limitation of the hackathon build.

const KEYS = {
  session: "bw.session",
  consent: "bw.consent",
  progress: "bw.progress",
  published: "bw.published",
  users: "bw.users",
};

function read(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage blocked or full — the app still works for this session */
  }
}

/* ---------------- cookie / storage consent ---------------- */

export function getConsent() {
  return read(KEYS.consent, null); // null | "all" | "essential"
}

export function setConsent(choice) {
  write(KEYS.consent, choice);
  if (choice === "essential") {
    // Honour the choice: drop anything that isn't needed to run the app.
    try {
      window.localStorage.removeItem(KEYS.progress);
    } catch {}
  }
  notify();
}

export function analyticsAllowed() {
  return getConsent() === "all";
}

/* ---------------- accounts ---------------- */

export const DEMO_ACCOUNTS = [
  { email: "sreymom@student.bw", name: "Srey Mom", role: "student", grade: "Grade 9" },
  { email: "sokha@bridgework.org", name: "Sokha P.", role: "instructor", org: "Clean Water Cambodia" },
];

export function signIn({ name, email, role, grade, org }) {
  const users = read(KEYS.users, []);
  const existing = users.find((u) => u.email === email);
  const user = existing || { email, name, role, grade: grade || null, org: org || null };
  if (!existing) write(KEYS.users, [...users, user]);
  write(KEYS.session, user);
  notify();
  return user;
}

export function signOut() {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(KEYS.session);
    } catch {}
  }
  notify();
}

export function getSession() {
  return read(KEYS.session, null);
}

/* ---------------- student progress ---------------- */

export function recordAttempt(simId, result) {
  if (getConsent() === "essential") return; // progress is not essential storage
  const progress = read(KEYS.progress, {});
  const prev = progress[simId];
  const best = !prev || result.pct > prev.pct ? result.pct : prev.pct;
  progress[simId] = {
    pct: best,
    lastPct: result.pct,
    attempts: (prev?.attempts || 0) + 1,
    band: result.verdict.band,
  };
  write(KEYS.progress, progress);
  notify();
}

export function getProgress() {
  return read(KEYS.progress, {});
}

export function unlockedCareers(allSims) {
  const progress = getProgress();
  return allSims.filter((s) => progress[s.id] && progress[s.id].pct >= 55).map((s) => s.careerId);
}

/* ---------------- instructor-published simulations ---------------- */

export function publishSimulation(sim) {
  const published = read(KEYS.published, []);
  const next = [{ ...sim, source: "community", publishedAt: Date.now() }, ...published];
  write(KEYS.published, next);
  notify();
  return next;
}

export function getPublished() {
  return read(KEYS.published, []);
}

export function removePublished(id) {
  write(KEYS.published, read(KEYS.published, []).filter((s) => s.id !== id));
  notify();
}

/* ---------------- change notification ---------------- */

const listeners = new Set();

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach((fn) => {
    try {
      fn();
    } catch {}
  });
}
