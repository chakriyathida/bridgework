import { SIMULATIONS } from "@/data/simulations";
import { CAREERS } from "@/data/careers";

// Seed simulations plus anything an instructor published in this browser.
export function allSimulations(published = []) {
  return [...published, ...SIMULATIONS];
}

export function findSimulation(id, published = []) {
  return allSimulations(published).find((s) => s.id === id) || null;
}

// Grade → subject → topic index, built from whatever is in the catalog right
// now, so an instructor-published simulation appears under its topic instantly.
export function curriculumIndex(published = []) {
  const index = {};
  for (const sim of allSimulations(published)) {
    const { grade, subject, topic } = sim.curriculum || {};
    if (!grade || !subject || !topic) continue;
    index[grade] = index[grade] || {};
    index[grade][subject] = index[grade][subject] || {};
    index[grade][subject][topic] = index[grade][subject][topic] || [];
    index[grade][subject][topic].push(sim);
  }
  return index;
}

export function gradeOrder(grades) {
  return [...grades].sort((a, b) => {
    const na = parseInt(String(a).replace(/\D/g, ""), 10) || 0;
    const nb = parseInt(String(b).replace(/\D/g, ""), 10) || 0;
    return na - nb;
  });
}

// Careers that list this exact topic among the subjects that power them,
// even when no simulation exists for them yet.
export function careersForTopic(subject, topic) {
  return CAREERS.filter((c) =>
    (c.subjects || []).some((s) => s.subject === subject && s.topic === topic)
  );
}

export function careersForSimulations(sims) {
  const ids = new Set(sims.map((s) => s.careerId).filter(Boolean));
  return CAREERS.filter((c) => ids.has(c.id));
}
