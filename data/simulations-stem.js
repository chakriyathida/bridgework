// Maths and computing simulations, Grade 7 through Grade 12.
//
// The through-line: angles, area, Pythagoras and trigonometry are not separate
// school topics that happen to share a chapter. They are the same handful of
// tools, and people are paid to use them every day — laying turf, squaring a
// roof, siting a solar panel, timing a barge, and teaching a computer to draw.

export const STEM_SIMULATIONS = [
  /* ------------------------------------------------------------------ *
   * GRADE 7 · Angles — and the first program you ever write
   * ------------------------------------------------------------------ */
  {
    id: "draw-square",
    title: "Teach the computer to draw a square",
    role: "Junior Software Engineer",
    org: "Ed-tech studio",
    place: "Remote team",
    industry: "Software engineering",
    careerId: "software-engineer",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 7", subject: "Mathematics", topic: "Angles & shapes" },
    practitioner: {
      name: "Panha M.",
      role: "Software engineer, 3 years",
      note: "People think this job is typing. It isn't. It's breaking something into steps small enough that a machine can't misunderstand them.",
    },
    brief:
      "You are building a drawing lesson for eight-year-olds. The character starts in the middle of the screen facing right, holding a pen. Your job is to write the shortest program that makes it draw a square with sides of 100 steps — and the computer will do exactly what you say, including the parts you got wrong.",
    dataTable: {
      caption: "What the character can do",
      rows: [
        ["Starting position", "Centre, facing right"],
        ["Side length wanted", "100 steps"],
        ["Turning", "Clockwise, in degrees"],
        ["Pen", "Draws only while pen is down"],
      ],
    },
    steps: [
      {
        id: "program",
        type: "blocks",
        prompt: "Build the program. Click blocks to add them to your script, click a block in your script to remove it.",
        hint: "A square is the same two instructions done four times. Think about how far the character turns at each corner.",
        palette: [
          { id: "when", label: "when ▶ clicked", cat: "event" },
          { id: "pen", label: "pen down", cat: "pen" },
          { id: "repeat3", label: "repeat 3 times", cat: "control" },
          { id: "repeat4", label: "repeat 4 times", cat: "control" },
          { id: "move100", label: "move 100 steps", cat: "motion" },
          { id: "turn60", label: "turn ↻ 60 degrees", cat: "motion" },
          { id: "turn90", label: "turn ↻ 90 degrees", cat: "motion" },
          { id: "turn120", label: "turn ↻ 120 degrees", cat: "motion" },
        ],
        answer: ["when", "pen", "repeat4", "move100", "turn90"],
        modelAnswer: "when ▶ clicked → pen down → repeat 4 times → move 100 steps → turn ↻ 90 degrees",
        why:
          "Four corners, and the character comes back to where it started facing the same way — so the four turns have to add up to a full circle, 360 ÷ 4 = 90 degrees each. Miss the 'pen down' block and the program still runs perfectly and draws nothing, which is the single most common bug a beginner writes.",
      },
      {
        id: "triangle",
        type: "choice",
        prompt: "Now you want an equilateral triangle instead. What do you change it to?",
        options: [
          { id: "a", label: "repeat 3 times · move 100 · turn 60 degrees" },
          { id: "b", label: "repeat 3 times · move 100 · turn 120 degrees" },
          { id: "c", label: "repeat 3 times · move 100 · turn 90 degrees" },
          { id: "d", label: "repeat 6 times · move 100 · turn 60 degrees" },
        ],
        correct: "b",
        modelAnswer: "repeat 3 times · move 100 · turn 120 degrees",
        why:
          "Almost everyone picks 60, because the inside angles of an equilateral triangle are 60 degrees and that is the number the textbook gives you. But the character doesn't turn through the inside angle — it turns through the outside one, and the three turns still have to total 360. So 360 ÷ 3 = 120. Option (d) draws a hexagon.",
      },
      {
        id: "explain",
        type: "text",
        prompt:
          "A younger student used turn 60 and their triangle came out as a strange open shape. Explain why, in under 30 words, without using the word 'exterior'.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["360", "full circle", "all the way round", "whole turn"], label: "that the turns must total 360" },
          { any: ["120", "outside", "corner", "turn"], label: "what the turn actually is" },
        ],
        modelAnswer:
          "The character has to spin all the way round — 360 degrees — by the time it gets back to the start. Three corners means 120 each, not 60.",
        why:
          "Explaining something to someone with less knowledge than you, without hiding behind vocabulary, is most of what a senior engineer does. It is also the fastest way to find out whether you understood it yourself.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 8 · Area & perimeter
   * ------------------------------------------------------------------ */
  {
    id: "garden-turf",
    title: "How much turf do you order for this garden?",
    role: "Landscape Gardener",
    org: "Residential landscaping crew",
    place: "Phnom Penh suburb",
    industry: "Landscaping & horticulture",
    careerId: "landscape-gardener",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 8", subject: "Mathematics", topic: "Area & perimeter" },
    practitioner: {
      name: "Sophea R.",
      role: "Landscape gardener, 8 years",
      note: "Order too little and the crew stands around for a day. Order too much and it comes out of your margin. The maths is Grade 8 and it decides whether the job makes money.",
    },
    brief:
      "A client wants their back garden turfed. The garden is a 12 m by 8 m rectangle, but a 4 m by 3 m paved patio sits in one corner and stays. Turf comes in rolls covering 1.6 m² each, and you always allow 8% extra for offcuts around the edges.",
    dataTable: {
      caption: "Site measurements",
      rows: [
        ["Garden", "12 m × 8 m"],
        ["Patio (stays)", "4 m × 3 m"],
        ["Turf roll covers", "1.6 m²"],
        ["Waste allowance", "8%"],
        ["Roll price", "$4.20"],
      ],
    },
    steps: [
      {
        id: "area",
        type: "number",
        prompt: "What area of turf does the garden actually need?",
        hint: "The patio is not getting turfed.",
        unit: "m²",
        answer: 84,
        tolerance: 0.5,
        modelAnswer: "84 m²",
        why:
          "12 × 8 = 96 m² for the whole garden, minus 4 × 3 = 12 m² of patio, leaves 84 m². Subtracting the bit that doesn't count is the entire trick, and it is the step people skip when they're quoting fast.",
      },
      {
        id: "rolls",
        type: "number",
        prompt: "How many rolls do you order, including the 8% waste allowance?",
        hint: "Add the waste first, then divide. You cannot buy part of a roll.",
        unit: "rolls",
        answer: 57,
        tolerance: 0.6,
        modelAnswer: "57 rolls",
        why:
          "84 × 1.08 = 90.72 m². Divided by 1.6 m² per roll gives 56.7, and you cannot order 0.7 of a roll, so you round up to 57. Rounding down here is the mistake that sends someone back to the supplier mid-job.",
      },
      {
        id: "quote",
        type: "text",
        prompt:
          "The client asks why they're paying for 91 m² of turf on an 84 m² lawn. Answer in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["waste", "offcut", "off-cut", "trim", "cut", "edges", "extra"], label: "why the extra exists" },
          { any: ["patio", "84", "shape", "corner", "curve"], label: "the shape you're working around" },
        ],
        modelAnswer:
          "The lawn is 84 m², but turf comes in rectangles and your garden bends around the patio. The extra covers what we trim off at the edges.",
        why:
          "Clients are not annoyed by cost, they're annoyed by cost they don't understand. Being able to explain a number in one sentence is why some tradespeople get repeat work and others don't.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 9 · Pythagoras
   * ------------------------------------------------------------------ */
  {
    id: "roof-rafter",
    title: "Cut the rafters before the timber delivery closes",
    role: "Carpenter",
    org: "House-building crew",
    place: "Kampong Speu",
    industry: "Construction & trades",
    careerId: "carpenter",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Pythagoras' theorem" },
    practitioner: {
      name: "Vuthy N.",
      role: "Carpenter, 15 years",
      note: "I use Pythagoras three or four times a day and I have never once called it that.",
    },
    brief:
      "You are framing a simple gable roof. The building is 7.2 m wide and the ridge sits 2.1 m above the wall plate. You need to order rafters before the timber yard shuts at four, and rafters are sold in fixed lengths.",
    dataTable: {
      caption: "The frame",
      rows: [
        ["Building width (span)", "7.2 m"],
        ["Ridge height above wall plate", "2.1 m"],
        ["Half span (run)", "3.6 m"],
        ["Rafters sold in", "4.2 m and 4.8 m lengths"],
        ["Overhang wanted", "None"],
      ],
    },
    steps: [
      {
        id: "rafter",
        type: "number",
        prompt: "How long is one rafter, from wall plate to ridge?",
        hint: "The rafter is the sloping side of a right triangle whose other two sides you already have.",
        unit: "m",
        answer: 4.17,
        tolerance: 0.05,
        modelAnswer: "4.17 m",
        why:
          "The run is half the span, 3.6 m, and the rise is 2.1 m. So the rafter is √(3.6² + 2.1²) = √(12.96 + 4.41) = √17.37 = 4.17 m. Using the full 7.2 m span instead of half of it is the classic error, and it gives you a rafter almost twice as long as you need.",
      },
      {
        id: "order",
        type: "choice",
        prompt: "Which length do you order?",
        options: [
          { id: "a", label: "4.2 m — it's the closest and cheapest." },
          { id: "b", label: "4.8 m — always order longer, you can cut it down." },
          { id: "c", label: "4.2 m, but check the cut angle at the ridge first." },
          { id: "d", label: "Round the calculation to 4 m and order 4.2 m." },
        ],
        correct: "c",
        modelAnswer: "4.2 m, after checking the ridge cut",
        why:
          "4.17 m fits inside a 4.2 m rafter with 3 cm to spare — but only if the cut is square. The ridge end is cut at an angle, and an angled cut eats length. Ordering 4.8 m 'to be safe' wastes 60 cm on every rafter, and on a 14-rafter roof that is real money. The right answer is the cheap one plus one check.",
      },
      {
        id: "square",
        type: "text",
        prompt:
          "Your apprentice asks how you check the foundation is square without a big set square. Answer in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["3", "three"], label: "the first measurement" },
          { any: ["4", "four"], label: "the second measurement" },
          { any: ["5", "five", "diagonal", "hypotenuse"], label: "the diagonal it must match" },
        ],
        modelAnswer:
          "Measure 3 along one edge, 4 along the other, then check the diagonal between those marks is exactly 5. If it is, the corner is square.",
        why:
          "The 3-4-5 method is Pythagoras used backwards, and it is on every building site in the world. A student who can do this can square a corner with a piece of string.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 9 · Trigonometry
   * ------------------------------------------------------------------ */
  {
    id: "solar-tilt",
    title: "Will these panels fit this roof at the right angle?",
    role: "Solar Panel Installer",
    org: "Rooftop solar contractor",
    place: "Takeo Province",
    industry: "Renewable energy & trades",
    careerId: "solar-installer",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
    practitioner: {
      name: "Chenda O.",
      role: "Solar installer, 5 years",
      note: "Every quote I write starts with a triangle. Get the angle wrong and the customer loses power every single day for twenty years.",
    },
    brief:
      "You are quoting a rooftop solar install. You measured the roof: it runs 6.4 m up the slope and rises 2.4 m from the gutter to the ridge. At this latitude panels produce best at about 15° from horizontal, and you can supply wedge frames to lift the panels off the roof surface.",
    dataTable: {
      caption: "Roof survey",
      rows: [
        ["Slope length (gutter to ridge)", "6.4 m"],
        ["Vertical rise", "2.4 m"],
        ["Optimal panel tilt here", "15°"],
        ["Wedge frames available", "5°, 7°, 10°"],
        ["Roof faces", "South"],
      ],
    },
    steps: [
      {
        id: "pitch",
        type: "number",
        prompt: "What is the pitch of this roof, in degrees?",
        hint: "You have the side opposite the angle and the sloping side. Which ratio is that?",
        unit: "degrees",
        answer: 22,
        tolerance: 1,
        modelAnswer: "22°",
        why:
          "You know the opposite side (2.4 m rise) and the hypotenuse (6.4 m slope), so this is sine. sin θ = 2.4 ÷ 6.4 = 0.375, and θ = sin⁻¹(0.375) = 22°. Reaching for tan here is the usual slip — tan needs the horizontal run, which you did not measure and would have to work out first.",
      },
      {
        id: "frames",
        type: "choice",
        prompt: "The roof sits at 22° and you want the panels at 15°. What do you quote?",
        options: [
          { id: "a", label: "Add a 7° wedge frame to bring it closer to optimal." },
          { id: "b", label: "Mount the panels flush to the roof at 22°." },
          { id: "c", label: "Add a 10° wedge to overshoot slightly — more angle is better." },
          { id: "d", label: "Decline the job; the roof is the wrong pitch." },
        ],
        correct: "b",
        modelAnswer: "Mount flush at 22°",
        why:
          "This is the trap. Wedges tilt panels *up*, so on a 22° roof they take you further from 15°, not closer — you would need to tilt down, and these frames can't. Flush mounting at 22° costs you roughly 1% of annual yield against perfect, while wedge frames add cost, wind load and roof penetrations. Knowing when the maths says 'do nothing' is worth as much as knowing how to calculate.",
      },
      {
        id: "explain-loss",
        type: "text",
        prompt:
          "The customer read online that 15° is optimal and is worried. Reassure them in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["22", "7 degrees", "close", "small", "difference"], label: "how far off you actually are" },
          { any: ["1%", "one percent", "tiny", "barely", "hardly", "negligible", "little"], label: "how little it costs them" },
        ],
        modelAnswer:
          "Your roof is at 22°, only 7° off ideal. That costs about 1% of yearly output — less than the cost of frames to correct it.",
        why:
          "Customers who half-understand a number are the hardest part of a trade job. Answering with the actual size of the effect, instead of 'trust me', is what closes the sale.",
      },
    ],
  },

  {
    id: "tree-height",
    title: "Is this tree tall enough to hit the house?",
    role: "Land Surveyor",
    org: "Municipal works assessment",
    place: "Siem Reap",
    industry: "Surveying & land management",
    careerId: "land-surveyor",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
    practitioner: {
      name: "Bopha T.",
      role: "Surveyor, 7 years",
      note: "You cannot climb it and you cannot lay a tape up it. Trigonometry is how you measure things you can't reach.",
    },
    brief:
      "A family has asked the council to remove a large tree beside their house, saying it would hit the roof if it fell in a storm. You cannot climb it. You stand back, measure the distance to the base, and take an angle reading to the top with a clinometer held at eye height.",
    dataTable: {
      caption: "Field measurements",
      rows: [
        ["Distance to base of trunk", "18.0 m"],
        ["Angle of elevation to top", "38°"],
        ["Instrument height (your eye)", "1.6 m"],
        ["Distance from trunk to house wall", "14.0 m"],
        ["Ground", "Level"],
      ],
    },
    steps: [
      {
        id: "height",
        type: "number",
        prompt: "How tall is the tree?",
        hint: "The clinometer is not on the ground. Don't forget the last step.",
        unit: "m",
        answer: 15.7,
        tolerance: 0.4,
        modelAnswer: "15.7 m",
        why:
          "You have the adjacent side (18 m) and want the opposite side, so this is tangent. 18 × tan(38°) = 18 × 0.781 = 14.1 m — but that is the height above your eye, not above the ground. Add the 1.6 m instrument height for 15.7 m. Forgetting to add it is the single most common surveying error, and it always makes things look shorter than they are.",
      },
      {
        id: "risk",
        type: "choice",
        prompt: "The house wall is 14.0 m from the trunk. What goes in your report?",
        options: [
          { id: "a", label: "No risk — trees rarely fall in exactly the wrong direction." },
          { id: "b", label: "The tree is taller than the distance to the house, so it can reach it. Recommend assessment for removal." },
          { id: "c", label: "Safe — 15.7 m and 14.0 m are close enough to call it borderline and take no action." },
          { id: "d", label: "Recommend removal immediately without further inspection." },
        ],
        correct: "b",
        modelAnswer: "It can reach the house — flag it for assessment",
        why:
          "15.7 m of tree against 14.0 m of clearance means the crown reaches the wall with 1.7 m to spare. Your job is not to decide whether it will fall — that's an arborist's call on the tree's health — but to establish whether it *could* reach, which is a geometry question and now has a documented answer. Knowing the edge of your own authority is part of the work.",
      },
      {
        id: "report",
        type: "text",
        prompt: "Write the finding line of your report. Under 30 words, and it has to hold up if someone disputes it.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["15.7", "15.6", "15.8", "15", "16"], label: "the measured height" },
          { any: ["14", "distance", "clearance", "wall", "house"], label: "the distance it's compared against" },
          { any: ["reach", "strike", "hit", "exceed", "greater", "more than"], label: "the conclusion" },
        ],
        modelAnswer:
          "Tree height measured at 15.7 m by clinometer from 18.0 m. House wall is 14.0 m from trunk, so the tree can reach the structure.",
        why:
          "A finding that states the numbers and the method survives a dispute. A finding that says 'the tree looks dangerous' does not. This is why surveyors write the way they do.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 10 · Sine & cosine rule
   * ------------------------------------------------------------------ */
  {
    id: "plot-boundary",
    title: "Two neighbours disagree about where the fence goes",
    role: "Cadastral Surveyor",
    org: "Land titles office",
    place: "Kandal Province",
    industry: "Surveying & land management",
    careerId: "land-surveyor",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 10", subject: "Mathematics", topic: "Sine & cosine rule" },
    practitioner: {
      name: "Bopha T.",
      role: "Surveyor, 7 years",
      note: "Half of land surveying is triangles that refuse to have a right angle in them.",
    },
    brief:
      "A triangular plot is being split between two families and the old fence has rotted away. Two boundary lengths are recorded on the title, along with the angle between them at the corner marker. The third boundary — the one in dispute — was never written down.",
    dataTable: {
      caption: "From the title document",
      rows: [
        ["Boundary A (north edge)", "42.0 m"],
        ["Boundary B (east edge)", "35.0 m"],
        ["Angle between them", "68°"],
        ["Third boundary", "Not recorded"],
        ["Corner marker", "Found, intact"],
      ],
    },
    steps: [
      {
        id: "third-side",
        type: "number",
        prompt: "How long is the disputed boundary?",
        hint: "Two sides and the angle between them. There is no right angle here, so Pythagoras won't do it.",
        unit: "m",
        answer: 43.4,
        tolerance: 0.6,
        modelAnswer: "43.4 m",
        why:
          "Cosine rule: c² = a² + b² − 2ab·cos C = 42² + 35² − 2(42)(35)cos 68° = 1764 + 1225 − 2940(0.3746) = 1887.6, so c = 43.4 m. Notice that Pythagoras alone would have given √(1764+1225) = 54.7 m — more than 11 metres wrong, and in a boundary dispute that is somebody's house.",
      },
      {
        id: "area",
        type: "number",
        prompt: "What is the total area of the plot, to the nearest square metre?",
        hint: "There's a formula for the area of a triangle when you know two sides and the angle between them.",
        unit: "m²",
        answer: 682,
        tolerance: 8,
        modelAnswer: "682 m²",
        why:
          "Area = ½ab·sin C = ½ × 42 × 35 × sin 68° = 735 × 0.9272 = 681.5, so 682 m². Half base times height doesn't work here because you don't have a height — and measuring one on sloping ground is exactly what you're trying to avoid.",
      },
      {
        id: "neighbours",
        type: "text",
        prompt:
          "Both families are standing there watching. Explain your finding in under 35 words, without using the word 'cosine'.",
        minWords: 10,
        maxWords: 38,
        keywords: [
          { any: ["43", "43.4"], label: "the boundary length you found" },
          { any: ["title", "record", "document", "marker", "corner", "measured"], label: "where your numbers came from" },
        ],
        modelAnswer:
          "The two lengths on your title and the corner marker fix the third boundary at 43.4 metres. That line is not a judgement call — it follows from the record.",
        why:
          "In a dispute, the persuasive thing is not the arithmetic. It is showing that the answer came from the documents both parties already agreed to, so neither of them is being asked to trust you personally.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 11 · Trigonometric functions
   * ------------------------------------------------------------------ */
  {
    id: "tide-window",
    title: "Can the barge cross the sandbar today?",
    role: "Port Operations Scheduler",
    org: "River freight terminal",
    place: "Sihanoukville",
    industry: "Shipping & logistics",
    careerId: "port-scheduler",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 11", subject: "Mathematics", topic: "Trigonometric functions" },
    practitioner: {
      name: "Sarath D.",
      role: "Operations scheduler",
      note: "The tide does not care about your schedule. You get a window, and either you're loaded and moving or you wait twelve hours.",
    },
    brief:
      "A loaded barge draws 2.5 m and has to cross a sandbar to reach open water. Depth over the bar follows the tide, which the harbour models as h(t) = 1.8 + 1.4·sin(πt/6) metres, where t is hours after low tide. Loading is not finished yet.",
    dataTable: {
      caption: "Today's numbers",
      rows: [
        ["Tide model", "h(t) = 1.8 + 1.4 sin(πt/6)"],
        ["Barge draught (loaded)", "2.5 m"],
        ["Tide period", "12 hours"],
        ["Low tide", "t = 0"],
        ["Loading complete at", "t = 3 h"],
        ["Crossing takes", "40 minutes"],
      ],
    },
    steps: [
      {
        id: "window",
        type: "number",
        prompt: "How many hours long is the window where the barge can cross safely?",
        hint: "Set the depth equal to the draught and solve. Remember sine hits the same value twice per cycle.",
        unit: "hours",
        answer: 4,
        tolerance: 0.3,
        modelAnswer: "4 hours",
        why:
          "You need 1.8 + 1.4·sin(πt/6) ≥ 2.5, so sin(πt/6) ≥ 0.5. Sine is at or above 0.5 between 30° and 150°, so πt/6 runs from π/6 to 5π/6, giving t from 1 to 5 — a four-hour window. The mistake that costs you a barge is solving sin⁻¹(0.5) = 30°, getting t = 1, and stopping there without finding the second crossing point.",
      },
      {
        id: "call",
        type: "choice",
        prompt:
          "Loading finishes at t = 3 h and the crossing takes 40 minutes. What do you schedule?",
        options: [
          { id: "a", label: "Sail at t = 3 h — inside the window with time to spare." },
          { id: "b", label: "Wait for the next high tide to be safe." },
          { id: "c", label: "Sail at t = 4 h 40 m to use the whole window." },
          { id: "d", label: "Part-load the barge to reduce draught and sail immediately." },
        ],
        correct: "a",
        modelAnswer: "Sail at t = 3 h",
        why:
          "The window closes at t = 5, so departing at 3 h clears the bar by 3 h 40 m with 80 minutes of margin — and t = 3 is the peak of the tide, the deepest water you'll get. Option (c) leaves the bar at exactly 5 h 20 m, after the window shut. Waiting (b) burns twelve hours for nothing, and (d) throws away paid cargo to solve a problem you don't have.",
      },
      {
        id: "notice",
        type: "text",
        prompt: "Send the departure notice to the barge master. Under 30 words, with the reason.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["3", "three", "15:00", "1500"], label: "the departure time" },
          { any: ["tide", "window", "bar", "sandbar", "depth", "closes", "5"], label: "why that time" },
        ],
        modelAnswer:
          "Depart at t+3h sharp. Tide window over the bar runs 1h to 5h — leaving at 3 gives you deepest water and 80 minutes of margin.",
        why:
          "A master who is told 'leave at 3' asks why. A master who is told why can make the right call themselves when something slips by twenty minutes.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 12 · Probability & statistics
   * ------------------------------------------------------------------ */
  {
    id: "model-fairness",
    title: "Your model works. For most students.",
    role: "AI Engineer",
    org: "Education ministry data team",
    place: "Phnom Penh",
    industry: "Artificial intelligence & data",
    careerId: "ai-engineer",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 12", subject: "Mathematics", topic: "Probability & statistics" },
    practitioner: {
      name: "Rithy S.",
      role: "ML engineer",
      note: "Nobody warned me that most of this job is arguing about whether a number means what everyone thinks it means. Writing the model is the short part.",
    },
    brief:
      "You built a model that flags students at risk of dropping out, so schools can reach them early. It reports 91% accuracy overall and the ministry wants to launch on Monday. Breaking the results down by group, you find it performs very differently for rural students.",
    dataTable: {
      caption: "Evaluation set",
      rows: [
        ["Overall accuracy", "91%"],
        ["Urban students (n = 2,600)", "94% accurate"],
        ["Rural students (n = 400)", "74% accurate"],
        ["Rural share of training data", "6%"],
        ["Rural share of real dropouts", "31%"],
        ["Launch date requested", "Monday"],
      ],
    },
    steps: [
      {
        id: "misclassified",
        type: "number",
        prompt: "Of the 400 rural students in the evaluation set, how many does the model get wrong?",
        hint: "Accuracy is the share it gets right.",
        unit: "students",
        answer: 104,
        tolerance: 1,
        modelAnswer: "104 students",
        why:
          "74% correct means 26% wrong, and 26% of 400 is 104. The headline 91% hides this completely, because rural students are such a small slice of the evaluation set that their errors barely move the average. This is why a single accuracy number is close to meaningless on its own.",
      },
      {
        id: "decision",
        type: "choice",
        prompt: "The ministry wants to launch Monday. What do you recommend?",
        options: [
          { id: "a", label: "Launch. 91% is well above the 85% the ministry asked for." },
          { id: "b", label: "Launch, but report only the overall accuracy so the rollout isn't derailed." },
          { id: "c", label: "Delay. Report the breakdown, collect more rural data, and re-evaluate by group before launch." },
          { id: "d", label: "Launch for urban schools only and quietly exclude rural ones." },
        ],
        correct: "c",
        modelAnswer: "Delay, report the breakdown, fix the data",
        why:
          "Rural students are 6% of your training data but 31% of actual dropouts — so the model is least reliable exactly where it matters most, and launching means the students most likely to drop out get the worst predictions. Option (d) is the seductive one: it sounds cautious, but it means the schools with the greatest need get no tool at all, and the gap widens. Option (b) is how careers end.",
      },
      {
        id: "brief-ministry",
        type: "text",
        prompt:
          "Write the opening line of your note to the ministry. Under 35 words, no jargon, and it has to survive being forwarded.",
        minWords: 10,
        maxWords: 38,
        keywords: [
          { any: ["rural", "some students", "group"], label: "who it fails" },
          { any: ["74", "26", "1 in 4", "one in four", "quarter"], label: "the size of the gap" },
          { any: ["delay", "wait", "before", "more data", "not ready", "hold"], label: "what you're asking for" },
        ],
        modelAnswer:
          "The model is 91% accurate overall but only 74% for rural students — roughly one in four wrong, in the group with most dropouts. I'd hold the launch until we've fixed that.",
        why:
          "This is the part of AI engineering nobody shows you. The maths took an afternoon; explaining a fairness problem to non-technical decision-makers, in writing, in a way that doesn't get you overruled, is the job.",
      },
    ],
  },
];
