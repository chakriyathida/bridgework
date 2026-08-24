import Link from "next/link";
import { SIMULATIONS } from "@/data/simulations";


export default function Home() {
  const featuredIds = ["draw-square", "solar-tilt", "water-chlorine"];
  const featured = featuredIds.map((id) => SIMULATIONS.find((s) => s.id === id)).filter(Boolean);

  return (
    <>
      <section className="container section">
        <div className="stack stack-6" style={{ maxWidth: 720 }}>
          <p className="eyebrow">Accessible education · School subjects, real jobs</p>
          <h1>The ratio question in your homework decides whether 300 people drink safe water.</h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)" }}>
            Most students are taught to copy, memorise and pass. Nobody shows them what any of it is
            for, so the ones who can&apos;t see the point leave — long before anyone asks them what they
            want to be. Bridgework takes the topic a student is studying <em>this week</em> and drops
            them into a real job that uses it.
          </p>
          <div className="row">
            <Link href="/student" className="btn btn-primary">
              Explore real-world applications
            </Link>
            <Link href="/careers" className="btn btn-ghost">
              Explore career simulations
            </Link>
          </div>
        </div>
      </section>

      <hr className="hero-rule" />

      <section className="container section">
        <div className="stack stack-8">
          <div className="stack stack-2">
            <p className="eyebrow">How it works</p>
            <h2>Three steps, no new curriculum required</h2>
          </div>
          <div className="numbered">
            <div>
              <span className="n">01</span>
              <h3>Start from the syllabus</h3>
              <p className="muted small" style={{ marginTop: 6 }}>
                A student picks their grade, subject and topic — Grade 9 ratio and proportion, Grade 8
                photosynthesis. Not a course we invented. The thing they have homework on tonight.
              </p>
            </div>
            <div>
              <span className="n">02</span>
              <h3>Do the job, not a quiz</h3>
              <p className="muted small" style={{ marginTop: 6 }}>
                They get a real brief with real numbers, make three decisions a practitioner actually
                makes, and get marked the way a supervisor would mark them.
              </p>
            </div>
            <div>
              <span className="n">03</span>
              <h3>See where it leads</h3>
              <p className="muted small" style={{ marginTop: 6 }}>
                Finishing unlocks the career behind the task: what the day looks like, what it pays,
                and whether it needs a degree. Most of them don&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hero-rule" />

      <section className="container section">
        <div className="stack stack-6">
          <div className="stack stack-2">
            <p className="eyebrow">Written by people who do the work</p>
            <h2>Simulations in the catalog</h2>
            <p className="muted" style={{ maxWidth: 560 }}>
              Each one comes from a practitioner, not a textbook publisher. University students and
              working professionals publish them; students anywhere can run them.
            </p>
          </div>
          <div className="grid grid-3">
            {featured.map((sim) => (
              <Link key={sim.id} href={`/student/sim/${sim.id}`} className="card">
                <div className="stack stack-3">
                  <span className="pill pill-accent">{sim.curriculum.subject}</span>
                  <h3>{sim.title}</h3>
                  <p className="small muted">
                    {sim.role} · {sim.place}
                  </p>
                  <p className="small mono" style={{ color: "var(--ink-3)" }}>
                    {sim.curriculum.grade} · {sim.curriculum.topic}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="hero-rule" />

      <section className="container section">
        <div className="card card-pad-lg" style={{ background: "var(--surface-2)" }}>
          <div className="stack stack-4" style={{ maxWidth: 640 }}>
            <p className="eyebrow">Why this can exist where textbooks can&apos;t</p>
            <h2>Contributed, not commissioned</h2>
            <p className="muted">
              Rewriting a national curriculum takes a ministry and a decade. Bridgework runs alongside
              the syllabus schools already teach, so nothing has to be approved for a student to use it
              tomorrow. The content is written by university students and practitioners who already
              know the work, it runs in any browser on a shared phone, and once a page has loaded it
              keeps working when the connection doesn&apos;t.
            </p>
            <div className="row">
              <Link href="/login" className="btn btn-accent">
                Sign in as a student or instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="container" style={{ padding: "20px 20px 48px", color: "var(--ink-3)", fontSize: 13.5 }}>
        Bridgework · A Melbourne Hack 2026 prototype in the Accessible Education track. Prototype
        authentication — no real credentials are stored or transmitted.
      </footer>
    </>
  );
}
