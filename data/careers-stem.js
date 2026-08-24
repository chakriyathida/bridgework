// Careers reached through the maths and computing simulations.
// "IT person writes code" is the assumption these are here to break.

export const STEM_CAREERS = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    field: "Technology & design",
    simId: "draw-square",
    degreeRequired: false,
    blurb:
      "Not typing. Breaking a problem into steps small enough that a machine can't misunderstand them — then finding out which step you got wrong.",
    day: [
      "Read someone else's code and work out what it was meant to do",
      "Break a vague request into precise, ordered instructions",
      "Write the thing — usually the fastest part of the day",
      "Hunt the bug that only appears on someone else's phone",
      "Explain a technical trade-off to someone who isn't technical",
      "Review a teammate's work and say why it will break",
    ],
    subjects: [
      { grade: "Grade 7", subject: "Mathematics", topic: "Angles & shapes" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Algebra & patterns" },
      { grade: "Grade 9", subject: "English", topic: "Reading for precision" },
    ],
    pathway:
      "The most portfolio-driven job in this list. Scratch, then a free language course, then things you actually built. Plenty of working engineers have no computing degree — but nobody gets hired without something they can show.",
    pay: "Junior roles in Phnom Penh commonly start around $600–1,200/month; remote work for overseas employers pays multiples of that.",
    demand: "Very high, and one of the few careers where a fourteen-year-old can start building tonight for free.",
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    field: "Artificial intelligence & data",
    simId: "model-fairness",
    degreeRequired: true,
    blurb:
      "You build systems that learn from data — and then spend most of your time working out who they fail, and arguing for the delay that fixes it.",
    day: [
      "Check whether the data you were given represents the people it will be used on",
      "Train a model and measure it — overall, then group by group",
      "Find where it fails and why",
      "Argue for the launch delay when the numbers say so",
      "Explain a statistical result to people who will decide policy with it",
      "Monitor the model after launch, because the world moves and the model doesn't",
    ],
    subjects: [
      { grade: "Grade 12", subject: "Mathematics", topic: "Probability & statistics" },
      { grade: "Grade 11", subject: "Mathematics", topic: "Functions & graphs" },
      { grade: "Grade 12", subject: "English", topic: "Argument & evidence" },
    ],
    pathway:
      "The one job here that genuinely does want a degree — maths, statistics or computer science — because the statistics run deep. Many people arrive after a few years as a software engineer or data analyst rather than straight from university.",
    pay: "Among the highest-paid technical roles globally; strong remote demand.",
    demand: "Growing fast, and the fairness and evaluation side is short of people everywhere.",
  },
  {
    id: "landscape-gardener",
    title: "Landscape Gardener",
    field: "Landscaping & horticulture",
    simId: "garden-turf",
    degreeRequired: false,
    blurb:
      "Design and build outdoor spaces — and quote them accurately enough that the job still makes money when you've finished it.",
    day: [
      "Measure a site and sketch it to scale",
      "Calculate areas, volumes and material orders — turf, soil, gravel, paving",
      "Quote the job, including the waste nobody sees",
      "Build it: levels, drainage, planting, hard landscaping",
      "Explain to a client why a number on their invoice is what it is",
    ],
    subjects: [
      { grade: "Grade 8", subject: "Mathematics", topic: "Area & perimeter" },
      { grade: "Grade 7", subject: "Mathematics", topic: "Angles & shapes" },
      { grade: "Grade 8", subject: "Science", topic: "Photosynthesis & plant nutrition" },
    ],
    pathway:
      "Start as a labourer on a crew and learn the trade on site. A horticulture certificate helps you charge more; it is rarely needed to get the first job.",
    pay: "Crew work is wage-based; people who can quote and run their own jobs earn considerably more.",
    demand: "Steady, and it scales into running your own business faster than most trades.",
  },
  {
    id: "solar-installer",
    title: "Solar Panel Installer",
    field: "Renewable energy & trades",
    simId: "solar-tilt",
    degreeRequired: false,
    blurb:
      "Every quote starts with a triangle. Get the angle wrong and a family loses power every day for twenty years.",
    day: [
      "Survey a roof: pitch, orientation, shading, structure",
      "Work out the tilt and yield, and whether frames are worth it",
      "Size the array against what the household actually uses",
      "Install, wire and commission the system",
      "Explain the numbers to a customer who read something online",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
      { grade: "Grade 9", subject: "Science", topic: "Electricity & circuits" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Pythagoras' theorem" },
    ],
    pathway:
      "Short vendor and electrical-safety training, then on-the-job. Electrical licensing is required for the wiring side in most places, and that pathway starts as an apprenticeship, not a degree.",
    pay: "Trades rates plus commission on installs; experienced installers often subcontract independently.",
    demand: "Expanding quickly across the region as solar costs fall.",
  },
  {
    id: "land-surveyor",
    title: "Land Surveyor",
    field: "Surveying & land management",
    simId: "tree-height",
    degreeRequired: false,
    blurb:
      "Measuring things you can't reach and can't climb. Where a boundary sits, how tall that tower is, whether the road will actually meet the bridge.",
    day: [
      "Set up instruments and take angle and distance readings",
      "Work out heights, distances and areas from those readings",
      "Resolve boundaries against title documents",
      "Stand between two people who disagree and show them the evidence",
      "Write findings that hold up when someone disputes them",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
      { grade: "Grade 10", subject: "Mathematics", topic: "Sine & cosine rule" },
      { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
    ],
    pathway:
      "Enter as a survey assistant carrying the staff and learn the instruments on site. A diploma is needed to sign off cadastral work, but the first job is not gated on it.",
    pay: "Assistants start modestly; licensed surveyors who can certify boundaries earn well.",
    demand: "Consistent — construction, land titling and infrastructure all depend on it.",
  },
  {
    id: "rescue-technician",
    title: "Rescue Crew Member",
    field: "Emergency services",
    simId: "roof-rafter",
    degreeRequired: false,
    blurb:
      "Ladders, ropes, cutting gear and fast decisions. Half the job is working out what will reach, and whether it will hold.",
    day: [
      "Check and maintain every piece of kit before a shift",
      "Work out reach, angles and safe footing at speed",
      "Get people out of buildings, cars and water",
      "Keep frightened people calm and told what's happening",
      "Train constantly, because you can't look things up mid-rescue",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Mathematics", topic: "Pythagoras' theorem" },
      { grade: "Grade 9", subject: "Science", topic: "Forces, levers & the human body" },
    ],
    pathway:
      "Recruit training, then years of it on the job. No degree — you're paid from the first week and tested on fitness and judgement rather than exam results.",
    pay: "Salaried, with allowances for shifts and specialist skills.",
    demand: "Every province needs crews, and rural stations are hardest to staff.",
  },
  {
    id: "carpenter",
    title: "Carpenter",
    field: "Construction & trades",
    degreeRequired: false,
    blurb:
      "Turning flat timber into something that holds a roof up. Uses Pythagoras three or four times a day and has never once called it that.",
    day: [
      "Set out and square a foundation with a tape and a string line",
      "Calculate rafter lengths, cut angles and material orders",
      "Frame walls and roofs to tolerances measured in millimetres",
      "Solve the problem where the drawing and the actual building disagree",
      "Order timber before the yard closes",
    ],
    subjects: [
      { grade: "Grade 9", subject: "Mathematics", topic: "Pythagoras' theorem" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
      { grade: "Grade 8", subject: "Mathematics", topic: "Area & perimeter" },
    ],
    pathway:
      "Apprenticeship. You are paid from the first week and qualified in a few years, which is the opposite financial shape to university.",
    pay: "Rises sharply with skill; carpenters who can set out a roof unsupervised are always in demand.",
    demand: "High and not going anywhere.",
  },
  {
    id: "port-scheduler",
    title: "Port Operations Scheduler",
    field: "Shipping & logistics",
    simId: "tide-window",
    degreeRequired: false,
    blurb:
      "The tide doesn't care about your schedule. You get a window — either the barge is loaded and moving, or it waits twelve hours.",
    day: [
      "Read tide tables and work out the crossing windows for each vessel",
      "Sequence loading against those windows",
      "Re-plan the moment a crane, a truck or the weather fails",
      "Tell masters not just when to sail but why",
      "Review the delays that keep repeating",
    ],
    subjects: [
      { grade: "Grade 11", subject: "Mathematics", topic: "Trigonometric functions" },
      { grade: "Grade 9", subject: "Mathematics", topic: "Rates, time & speed" },
      { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
    ],
    pathway:
      "Usually promoted from terminal or dispatch operations. Maritime certificates help; the scheduling judgement is learned on shift.",
    pay: "Above general logistics rates because the cost of a bad call is a missed vessel.",
    demand: "Steady wherever there is a working port or river freight.",
  },
];
