// Career cards. The point of this list is that almost none of them are
// "doctor", "teacher" or "engineer" — the three jobs most students can name.

export const CAREERS = [
  {
    id: "water-quality-technician",
    title: "Water Quality Technician",
    field: "Public health & engineering",
    simId: "water-chlorine",
    degreeRequired: false,
    blurb:
      "You test and treat the water that a village actually drinks, and you sign off on whether it is safe today.",
    day: [
      "Drive a route of five or six community tanks and wells",
      "Run chlorine, turbidity and bacterial tests on site",
      "Calculate and add the dose, then re-test before you leave",
      "Log every reading — the log is the legal record",
      "Explain results to a village chief who is not a chemist",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Mathematics", topic: "Ratio & proportion" },
      { grade: "Grade 8", subject: "Science", topic: "Solutions & concentration" },
    ],
    pathway:
      "A 6–12 month technical certificate, or on-the-job training with an NGO or a provincial water authority. Many technicians start as field assistants at 18.",
    pay: "Entry roles commonly start around $250–400/month in Cambodia, rising with certification.",
    demand: "Steady — every provincial water scheme and rural NGO needs testing staff.",
  },
  {
    id: "agronomy-advisor",
    title: "Agronomy Field Advisor",
    field: "Agriculture & food security",
    simId: "rice-yield",
    degreeRequired: false,
    blurb:
      "Farmers call you when the crop is failing and nobody knows why. You read the soil, the leaves and the weather, then say what to do this week.",
    day: [
      "Visit member farms and inspect for disease, deficiency and pests",
      "Take soil samples and interpret the results",
      "Match a fix to the farmer's actual budget, not the ideal one",
      "Run short training sessions at the co-op",
      "Track which advice worked across the season",
    ],
    subjects: [
      { grade: "Grade 8", subject: "Science", topic: "Photosynthesis & plant nutrition" },
      { grade: "Grade 9", subject: "Science", topic: "Acids, bases & pH" },
    ],
    pathway:
      "An agriculture diploma is common, but co-ops also train experienced farmers into the role. Field experience counts heavily.",
    pay: "Roughly $300–600/month with a co-op or agri-business; more with an international NGO.",
    demand: "Growing — climate stress is making diagnosis skills more valuable, not less.",
  },
  {
    id: "health-communicator",
    title: "Health Campaign Designer",
    field: "Communications & public health",
    simId: "dengue-campaign",
    degreeRequired: false,
    blurb:
      "You work out why people aren't doing the thing that would keep them alive, then write the thirty seconds that changes it.",
    day: [
      "Interview the audience you are trying to reach",
      "Find the belief that is blocking the behaviour",
      "Write radio, SMS and poster copy — and cut it down",
      "Choose channels against reach, not against what's fashionable",
      "Measure whether behaviour moved, not whether the post did numbers",
    ],
    subjects: [
      { grade: "Grade 10", subject: "English", topic: "Persuasive writing & audience" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Data & statistics" },
    ],
    pathway:
      "Comes from journalism, teaching, social work or design as often as from a public health degree. A portfolio of writing beats a transcript.",
    pay: "$400–900/month at provincial health offices and NGOs.",
    demand: "Strong wherever donors fund health programmes.",
  },
  {
    id: "loan-officer",
    title: "Microfinance Loan Officer",
    field: "Finance & community lending",
    simId: "loan-decision",
    degreeRequired: false,
    blurb:
      "You decide whether a market vendor gets the loan that grows her stall — or the loan that closes it.",
    day: [
      "Meet applicants at their stall or workshop, not in an office",
      "Reconstruct a cash flow from a notebook and a conversation",
      "Assess repayment capacity against the lender's rules",
      "Deliver declines in person, with an alternative",
      "Follow up on repayments and restructure early when someone slips",
    ],
    subjects: [
      { grade: "Grade 10", subject: "Mathematics", topic: "Percentages & interest" },
      { grade: "Grade 10", subject: "English", topic: "Persuasive writing & audience" },
    ],
    pathway:
      "Most lenders train school-leavers directly and promote from teller or field-collection roles. Numeracy and judgement matter more than a finance degree.",
    pay: "$250–500/month plus performance, in Cambodia's MFI sector.",
    demand: "Large and established — microfinance employs tens of thousands regionally.",
  },
  {
    id: "logistics-planner",
    title: "Logistics Route Planner",
    field: "Supply chain & operations",
    simId: "route-planner",
    degreeRequired: false,
    blurb:
      "One truck, four factories, a flooded road and a cut-off you cannot move. You decide what gets left behind.",
    day: [
      "Build the day's runs against cut-off times",
      "Re-plan live when a road, a truck or a factory fails",
      "Decide which shipment matters most when you can't take them all",
      "Keep drivers and factories informed before they call you",
      "Review the week for the delays that repeat",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Rates, time & speed" },
    ],
    pathway:
      "Entry through dispatch or warehouse work; supervisors are routinely promoted from the floor. Certificates help but rarely gate the first job.",
    pay: "$300–700/month in Phnom Penh; export logistics pays above local haulage.",
    demand: "High — garment and agriculture exports both run on it.",
  },
  {
    id: "gis-mapper",
    title: "GIS Mapper",
    field: "Geospatial & data",
    degreeRequired: false,
    blurb:
      "You turn satellite imagery and survey data into the maps that decide where a clinic, a road or a flood barrier goes.",
    day: [
      "Digitise field survey data into mapping software",
      "Layer flood, population and road data to answer a planning question",
      "Ground-truth what the satellite got wrong",
      "Produce maps that a non-specialist can read and act on",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
      { grade: "Grade 10", subject: "Mathematics", topic: "Coordinates & graphing" },
    ],
    pathway: "Short GIS courses (many free and online) plus a portfolio of maps. Widely self-taught.",
    pay: "$400–1,000/month; remote contract work is realistic.",
    demand: "Rising fast with climate adaptation funding.",
  },
  {
    id: "prosthetics-technician",
    title: "Prosthetics Technician",
    field: "Health technology & craft",
    degreeRequired: false,
    blurb:
      "You build and fit the limb someone will walk on for the next five years. Part workshop craft, part anatomy, part listening.",
    day: [
      "Cast and measure a residual limb",
      "Shape, laminate and align the socket — the fit is the whole job",
      "Watch the patient walk and adjust by millimetres",
      "Repair and refit as a child grows",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Science", topic: "Forces, levers & the human body" },
      { grade: "Grade 10", subject: "Mathematics", topic: "Measurement & geometry" },
    ],
    pathway:
      "Cambodia has training programmes through rehabilitation centres — a field with a direct national history and continuing demand.",
    pay: "$300–700/month at rehabilitation centres and NGOs.",
    demand: "Persistent, and severely understaffed across the region.",
  },
  {
    id: "sound-engineer",
    title: "Live Sound Engineer",
    field: "Media & performance",
    degreeRequired: false,
    blurb:
      "Physics you can hear. You mix the room so a wedding, a concert or a broadcast doesn't sound like a hallway.",
    day: [
      "Set up and line-check a PA system",
      "Ring out feedback frequencies before a room fills",
      "Mix live and fix problems inside two seconds",
      "Maintain and repair equipment that lives in a van",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Science", topic: "Waves, sound & frequency" },
      { grade: "Grade 10", subject: "Mathematics", topic: "Ratios & logarithmic scales" },
    ],
    pathway: "Almost entirely apprenticeship — carry cables for someone good, then run your own shows.",
    pay: "Per-event; experienced engineers in Phnom Penh earn well above local salaried averages.",
    demand: "Event-driven but consistently short of skilled operators.",
  },
  {
    id: "medical-coder",
    title: "Medical Coder",
    field: "Health information",
    degreeRequired: false,
    blurb:
      "You read a doctor's notes and translate them into the codes that make a hospital's records — and its funding — work. Remote-friendly.",
    day: [
      "Read clinical notes and assign standardised diagnosis codes",
      "Query doctors when documentation is ambiguous",
      "Audit records for accuracy",
      "Work to a daily accuracy target",
    ],
    subjects: [
      { grade: "Grade 9", subject: "English", topic: "Reading for precision" },
      { grade: "Grade 9", subject: "Science", topic: "Human body systems" },
    ],
    pathway: "A certification course, no degree. One of the most accessible remote-work entries in health.",
    pay: "Certified coders working for overseas clients earn well above local averages.",
    demand: "Global shortage; work is often fully remote.",
  },
  {
    id: "drone-operator",
    title: "Agricultural Drone Operator",
    field: "Agri-technology",
    degreeRequired: false,
    blurb:
      "You fly crop surveys and spray runs, then read the imagery to tell a farmer which corner of the field is in trouble.",
    day: [
      "Plan flight paths and check airspace and weather",
      "Fly survey or spray missions over farmland",
      "Process imagery into crop-health maps",
      "Explain the map to the farmer in field terms",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
      { grade: "Grade 8", subject: "Science", topic: "Photosynthesis & plant nutrition" },
    ],
    pathway: "Operator licensing plus short vendor training. A genuinely new job that did not exist when your parents left school.",
    pay: "Contract rates per hectare; operators often run it as their own business.",
    demand: "Emerging and expanding across South-East Asian agriculture.",
  },
  {
    id: "sign-interpreter",
    title: "Sign Language Interpreter",
    field: "Access & education",
    degreeRequired: false,
    blurb:
      "You are the reason a Deaf student can sit in a classroom, a courtroom or a hospital and understand what is being said.",
    day: [
      "Interpret live in classrooms, clinics and legal settings",
      "Prepare subject vocabulary before technical sessions",
      "Work in pairs on long assignments to stay accurate",
      "Advocate for access arrangements",
    ],
    subjects: [
      { grade: "Grade 9", subject: "English", topic: "Language, meaning & translation" },
      { grade: "Grade 10", subject: "English", topic: "Register & audience" },
    ],
    pathway: "Cambodian Sign Language training through Deaf organisations; fluency is built over years, not months.",
    pay: "Sessional and salaried roles through NGOs and schools.",
    demand: "Acute shortage — access legislation outpaces the number of trained interpreters.",
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    field: "Technology & design",
    degreeRequired: false,
    blurb:
      "You watch people use an app, find the exact place they give up, and prove to a team of engineers that they built the wrong thing.",
    day: [
      "Run interviews and watch people use a product without helping them",
      "Spot the difference between what people say and what they do",
      "Turn observations into evidence a team can't argue with",
      "Test again after the fix",
    ],
    subjects: [
      { grade: "Grade 10", subject: "English", topic: "Interviewing & analysis" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Data & statistics" },
    ],
    pathway: "Portfolio-led. Psychology, teaching and journalism backgrounds are common; a computing degree is not required.",
    pay: "Among the highest-paying non-engineering roles in tech, and frequently remote.",
    demand: "Strong globally.",
  },
];

export function getCareer(id) {
  return CAREERS.find((c) => c.id === id) || null;
}
