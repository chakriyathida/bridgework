import Link from "next/link";
import { notFound } from "next/navigation";
import { CAREERS, getCareer } from "@/data/careers";
import { getSimulation } from "@/data/simulations";

export function generateStaticParams() {
  return CAREERS.map((c) => ({ id: c.id }));
}

export default async function CareerPage({ params }) {
  const { id } = await params;
  const career = getCareer(id);
  if (!career) notFound();

  const sim = career.simId ? getSimulation(career.simId) : null;

  return (
    <div className="container section">
      <div className="stack stack-8" style={{ maxWidth: 780 }}>
        <div className="stack stack-4">
          <Link href="/careers" className="small mono" style={{ color: "var(--ink-3)", textDecoration: "none" }}>
            ← All careers
          </Link>
          <div className="row" style={{ gap: 8 }}>
            <span className="pill">{career.field}</span>
            {!career.degreeRequired && <span className="pill pill-go">No degree required</span>}
          </div>
          <h1 style={{ fontSize: 38 }}>{career.title}</h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)" }}>{career.blurb}</p>
        </div>

        {sim && (
          <div className="card card-pad-lg" style={{ background: "var(--accent-soft)", borderColor: "transparent" }}>
            <div className="stack stack-3">
              <p className="eyebrow">Try the work before you choose it</p>
              <h3>{sim.title}</h3>
              <p className="small muted">
                {sim.minutes || 10} minutes · uses {sim.curriculum.grade} {sim.curriculum.topic}
              </p>
              <div>
                <Link href={`/student/sim/${sim.id}`} className="btn btn-accent btn-sm">
                  Start the simulation
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="stack stack-4">
          <h2>What the day actually looks like</h2>
          <ul className="checklist">
            {career.day.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="stack stack-4">
          <h2>The school topics it actually uses</h2>
          <div className="grid grid-2">
            {career.subjects.map((s) => (
              <div className="card" key={`${s.subject}-${s.topic}`}>
                <div className="stack stack-2">
                  <span className="pill pill-brand">{s.subject}</span>
                  <strong>{s.topic}</strong>
                  <span className="small mono" style={{ color: "var(--ink-3)" }}>
                    {s.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="small muted">
            These are not adjacent or vaguely related. They are the specific topics the job uses on an
            ordinary day.
          </p>
        </div>

        <div className="grid grid-2">
          <div className="card">
            <div className="stack stack-2">
              <p className="eyebrow">How people get in</p>
              <p className="small">{career.pathway}</p>
            </div>
          </div>
          <div className="card">
            <div className="stack stack-2">
              <p className="eyebrow">What it pays</p>
              <p className="small">{career.pay}</p>
            </div>
          </div>
          <div className="card">
            <div className="stack stack-2">
              <p className="eyebrow">Demand</p>
              <p className="small">{career.demand}</p>
            </div>
          </div>
        </div>

        <p className="small muted">
          Pay and pathway figures are indicative ranges gathered for this prototype, not verified
          labour-market data. A production version would source them from national statistics offices
          and employer partners.
        </p>
      </div>
    </div>
  );
}
