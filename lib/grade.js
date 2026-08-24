// Deterministic marking. No network call, no API key, no model — a student on a
// shared phone with two bars of signal gets the same feedback as everyone else.
// Every rule here mirrors how the practitioner said they'd judge the answer.

function words(text) {
  return String(text || "").trim().split(/\s+/).filter(Boolean);
}

function normalise(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9$.,:\s-]/g, " ");
}

function gradeNumber(step, value) {
  const raw = String(value ?? "").replace(/[^0-9.\-]/g, "");
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) {
    return { status: "missing", score: 0, note: "Enter a number to submit this step." };
  }
  const tol = step.tolerance ?? 0.01;
  const diff = Math.abs(n - step.answer);
  if (diff <= tol) {
    return { status: "correct", score: 1, note: "Correct — that's the number a supervisor would expect." };
  }
  // Near-miss diagnostics: these are the specific wrong answers the job produces.
  if (diff <= tol * 6) {
    return {
      status: "close",
      score: 0.5,
      note: "Close. Your method is right but the arithmetic slipped — check your units before you convert.",
    };
  }
  if (step.answer !== 0 && Math.abs(n - step.answer * 10) <= tol * 10) {
    return { status: "wrong", score: 0, note: "You're out by a factor of ten. That's a unit conversion, not a maths error." };
  }
  if (step.answer !== 0 && Math.abs(n - step.answer / 10) <= tol) {
    return { status: "wrong", score: 0, note: "You're out by a factor of ten the other way. Check litres against millilitres." };
  }
  return { status: "wrong", score: 0, note: "Not right. Work through the model answer below, then try the next step." };
}

function gradeChoice(step, value) {
  if (!value) return { status: "missing", score: 0, note: "Choose an option to submit this step." };
  if (value === step.correct) {
    return { status: "correct", score: 1, note: "That's the call the practitioner made." };
  }
  const chosen = (step.options || []).find((o) => o.id === value);
  return {
    status: "wrong",
    score: 0,
    note: chosen
      ? `You chose "${chosen.label}" — a defensible instinct, but read why it fails in practice.`
      : "Not the call a practitioner would make here.",
  };
}

function gradeText(step, value) {
  const w = words(value);
  if (w.length === 0) return { status: "missing", score: 0, note: "Write your answer to submit this step." };

  const min = step.minWords ?? 5;
  const max = step.maxWords ?? 200;

  if (w.length < min) {
    return { status: "short", score: 0, note: `Too short. This needs at least ${min} words to do the job.` };
  }
  if (w.length > max) {
    return {
      status: "long",
      score: 0.5,
      note: `${w.length} words — the brief said under ${max}. Writing to a limit is part of the task, not a formality.`,
    };
  }

  const text = normalise(value);
  const checks = (step.keywords || []).map((k) => ({
    label: k.label,
    hit: k.any.some((phrase) => text.includes(phrase.toLowerCase())),
  }));

  const hits = checks.filter((c) => c.hit).length;
  const total = checks.length || 1;
  const missed = checks.filter((c) => !c.hit).map((c) => c.label);

  if (hits === total) {
    return {
      status: "correct",
      score: 1,
      note: `Covers everything it needs to — ${checks.map((c) => c.label).join(", ")}. And it fits the word limit.`,
      checks,
    };
  }
  if (hits > 0) {
    return {
      status: "partial",
      score: hits / total,
      note: `Good, but a supervisor would send it back. Missing: ${missed.join(", ")}.`,
      checks,
    };
  }
  return {
    status: "wrong",
    score: 0,
    note: `This doesn't yet cover what the message has to do: ${missed.join(", ")}.`,
    checks,
  };
}

export function gradeStep(step, value) {
  if (step.type === "number") return gradeNumber(step, value);
  if (step.type === "choice") return gradeChoice(step, value);
  return gradeText(step, value);
}

export function gradeAll(simulation, answers) {
  const results = simulation.steps.map((step) => ({
    stepId: step.id,
    ...gradeStep(step, answers[step.id]),
  }));
  const score = results.reduce((sum, r) => sum + r.score, 0);
  const outOf = simulation.steps.length;
  const pct = outOf ? Math.round((score / outOf) * 100) : 0;

  let verdict;
  if (pct >= 85) verdict = { band: "hired", label: "Ready for the field", tone: "go" };
  else if (pct >= 55) verdict = { band: "supervised", label: "Right instincts, needs a supervisor", tone: "warn" };
  else verdict = { band: "training", label: "Worth another run", tone: "flag" };

  return { results, score, outOf, pct, verdict };
}
