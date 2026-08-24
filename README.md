# Bridgework

**School subjects → real jobs.** Bridgework takes the topic a student is studying this
week and drops them into a short simulation of a real job that uses it, written by
someone who actually does that work.

Built for **Melbourne Hack 2026** — Accessible Education track.

---

## The problem

In Cambodia and across much of the region, school is taught by copying and
memorising. Students pass exams without ever being shown what any of it is for,
and a large share drop out before eighteen — before anyone has asked them what
they want to do, or shown them that the options extend past doctor and teacher.

Rewriting a national curriculum takes a ministry and a decade. Bridgework runs
*alongside* the syllabus schools already teach, so nothing has to be approved for
a student to use it tomorrow.

## What it does

**Students** pick their grade, subject and topic — Grade 9 ratio and proportion,
Grade 8 photosynthesis — and get a job simulation built on exactly that topic.
They read a real brief with real numbers, make three decisions a practitioner
actually makes, and are marked the way a supervisor would mark them. Passing
unlocks the career behind the task: what the day looks like, the pathway in, what
it pays, and whether it needs a degree. Most don't.

**Instructors** — university students and working practitioners — publish
simulations from their own jobs. A published simulation appears in the student
catalog immediately, indexed under the curriculum topic it uses.

## How it's built

- **Next.js 15 (App Router) + React 19.** No CSS framework — one hand-written
  stylesheet (`app/globals.css`) driven by CSS custom properties, with full light
  and dark themes.
- **No backend.** Content is seeded JavaScript (`data/`). Sessions, consent,
  student progress and instructor-published simulations live in `localStorage`
  (`lib/store.js`).
- **Deterministic marking** (`lib/grade.js`). Numeric answers are checked against
  a tolerance with specific diagnostics for the common failure modes — an
  order-of-magnitude slip is reported as a unit-conversion error, not just "wrong".
  Written answers are checked for word limit and for the points the practitioner
  said the message has to make. No model call, no API key, no network — a student
  on a shared phone with a weak connection gets identical feedback to everyone else.
- **Curriculum index** (`lib/catalog.js`) is built at render time from the seed
  content *plus* whatever instructors have published, which is why a new
  simulation appears under its topic instantly.

### Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

### Structure

```
app/
  page.js                    landing
  login/page.js              role picker + demo accounts
  student/page.js            grade → subject → topic picker
  student/sim/[id]/page.js   the simulation runner
  careers/                   explorer + detail pages
  instructor/page.js         publish form + dashboard
components/                  nav, cookie/storage consent
lib/       store.js  grade.js  catalog.js
data/      simulations.js  careers.js
```

## Known limitations

This is a hackathon prototype and the following are deliberate scope decisions,
not oversights:

- **Authentication is a prototype.** No password, no server, no credential is
  stored or transmitted. Sessions are a `localStorage` object.
- **Instructor-published simulations are local to the browser** that published
  them. A production version needs a real backend and moderation before
  contributed content reaches students.
- **Pay and pathway figures are indicative** ranges gathered for this prototype,
  not verified labour-market data.
- **Curriculum topics are hand-mapped** for the seeded content rather than
  imported from an official syllabus document.

## AI disclosure

Developed with AI assistance (Claude) for code generation, content drafting and
review, during the hackathon window. All architecture, scope and content
decisions are the team's own, and the codebase is small enough to be explained in
full.

No third-party datasets or pre-existing assets are used. Dependencies are
Next.js, React and React DOM. Fonts are Fraunces, Karla and JetBrains Mono via
Google Fonts (SIL Open Font License).

## Licence

MIT
