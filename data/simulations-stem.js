// Maths and computing, Grade 7 to Grade 12.
//
// Writing rule for every simulation in here: if a word would send a student to
// look something up, it doesn't go in. No trade jargon, no job-title words, no
// terms the maths doesn't need. The problem should be hard. The words shouldn't.

export const STEM_SIMULATIONS = [
  /* ------------------------------------------------------------------ *
   * GRADE 7 · Angles
   * ------------------------------------------------------------------ */
  {
    id: "draw-square",
    title: "Teach the computer to draw a square",
    role: "Software Engineer",
    org: "A team that builds learning games",
    place: "Works from home",
    industry: "Making apps and games",
    careerId: "software-engineer",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 7", subject: "Mathematics", topic: "Angles & shapes" },
    practitioner: {
      name: "Panha M.",
      role: "Builds apps, 3 years",
      note: "People think this job is typing. It isn't. It's explaining something so clearly that a computer can't get it wrong.",
    },
    brief:
      "You are making a drawing game for eight-year-olds. A little cat sits in the middle of the screen, facing right, holding a pen. Make it draw a square with sides of 100 steps. The computer does exactly what you tell it — including the parts you got wrong.",
    dataTable: {
      caption: "What the cat can do",
      rows: [
        ["Where it starts", "Middle, facing right"],
        ["Side length you want", "100 steps"],
        ["Turning", "Clockwise, in degrees"],
        ["The pen", "Only draws when it's down"],
      ],
    },
    steps: [
      {
        id: "program",
        type: "blocks",
        prompt: "Build the program. Click a block to add it. Click it again in your script to take it out.",
        hint: "A square is the same two moves, done four times. How far does the cat turn at each corner?",
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
          "Four corners, and the cat ends up facing the way it started. So the four turns add up to a full circle: 360 ÷ 4 = 90 each. If you forget 'pen down', the program still runs perfectly and draws nothing — that is the most common first bug anyone writes.",
      },
      {
        id: "triangle",
        type: "choice",
        prompt: "Now you want a triangle with three equal sides. What do you change it to?",
        options: [
          { id: "a", label: "repeat 3 times · move 100 · turn 60 degrees" },
          { id: "b", label: "repeat 3 times · move 100 · turn 120 degrees" },
          { id: "c", label: "repeat 3 times · move 100 · turn 90 degrees" },
          { id: "d", label: "repeat 6 times · move 100 · turn 60 degrees" },
        ],
        correct: "b",
        modelAnswer: "repeat 3 times · move 100 · turn 120 degrees",
        why:
          "Nearly everyone picks 60, because 60 is the angle inside the corner of that triangle and that's the number the textbook shows. But the cat doesn't turn by the angle inside the corner — it swings around the outside of it. The three turns still have to add up to 360, so each one is 120. Option (d) draws a hexagon.",
      },
      {
        id: "explain",
        type: "text",
        prompt:
          "A younger kid used 60 and their triangle came out open and strange. Tell them why, in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["360", "full circle", "all the way round", "whole turn", "right round"], label: "that the turns add up to 360" },
          { any: ["120", "corner", "turn", "three"], label: "what each turn should be" },
        ],
        modelAnswer:
          "The cat has to spin all the way round — 360 degrees — before it gets back to the start. Three corners, so 120 each, not 60.",
        why:
          "Explaining something to someone who knows less than you, without hiding behind big words, is most of what a senior engineer does all day. It's also the fastest way to find out whether you really understood it.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 8 · Area
   * ------------------------------------------------------------------ */
  {
    id: "garden-turf",
    title: "How much grass do you order for this garden?",
    role: "Garden Designer",
    org: "A small landscaping crew",
    place: "Phnom Penh",
    industry: "Gardens and outdoor spaces",
    careerId: "landscape-gardener",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 8", subject: "Mathematics", topic: "Area & perimeter" },
    practitioner: {
      name: "Sophea R.",
      role: "Garden designer, 8 years",
      note: "Order too little and the whole crew stands around waiting. Order too much and you paid for grass nobody uses. It's Grade 8 maths and it decides whether the job makes money.",
    },
    brief:
      "A family wants real grass laid in their back garden. The garden is 12 m by 8 m. There's a paved area in one corner, 4 m by 3 m, and they're keeping it. Grass comes in rolls, and each roll covers 1.6 m². You always order a bit extra, because you cut pieces off to fit the edges.",
    dataTable: {
      caption: "What you measured",
      rows: [
        ["Whole garden", "12 m × 8 m"],
        ["Paved area (staying)", "4 m × 3 m"],
        ["One roll of grass covers", "1.6 m²"],
        ["Extra to allow for cut-offs", "8%"],
        ["Price per roll", "$4.20"],
      ],
    },
    steps: [
      {
        id: "area",
        type: "number",
        prompt: "How much grass does the garden actually need?",
        hint: "The paved bit isn't getting grass.",
        unit: "m²",
        answer: 84,
        tolerance: 0.5,
        modelAnswer: "84 m²",
        why:
          "The whole garden is 12 × 8 = 96 m². The paved corner is 4 × 3 = 12 m². Take one from the other and you get 84 m². Remembering to subtract the part that doesn't count is the whole trick, and it's what people forget when they're rushing a price.",
      },
      {
        id: "rolls",
        type: "number",
        prompt: "How many rolls do you order, once you add the 8% extra?",
        hint: "Add the extra first, then divide. You can't buy half a roll.",
        unit: "rolls",
        answer: 57,
        tolerance: 0.6,
        modelAnswer: "57 rolls",
        why:
          "84 plus 8% is 90.72 m². Each roll covers 1.6 m², so that's 56.7 rolls — and you can't order 0.7 of a roll, so you round up to 57. Rounding down is what sends someone driving back to the shop halfway through the job.",
      },
      {
        id: "quote",
        type: "text",
        prompt:
          "The family asks why they're paying for 91 m² of grass on an 84 m² garden. Answer in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["cut", "trim", "extra", "waste", "edges", "off-cut", "offcut", "pieces"], label: "why the extra is there" },
          { any: ["paved", "84", "corner", "shape", "curve", "bend"], label: "the shape you're fitting around" },
        ],
        modelAnswer:
          "Your garden is 84 m², but grass comes in straight rolls and yours bends around the paving. The extra covers the pieces we cut off at the edges.",
        why:
          "People aren't annoyed by a price. They're annoyed by a price nobody explained. Being able to answer that in one sentence is why some people get called back for the next job.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 9 · Pythagoras
   * ------------------------------------------------------------------ */
  {
    id: "roof-rafter",
    title: "Will the ladder reach the window?",
    role: "Rescue Crew Member",
    org: "Provincial fire and rescue",
    place: "Phnom Penh",
    industry: "Emergency services",
    careerId: "carpenter",
    minutes: 8,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Pythagoras' theorem" },
    practitioner: {
      name: "Vuthy N.",
      role: "Rescue crew, 15 years",
      note: "I use Pythagoras three or four times a week and I have never once called it that. You just learn what reaches and what doesn't.",
    },
    brief:
      "There's a person at a second-floor window, 6 metres above the ground. You have to put a ladder up to them. A ladder is only safe if the bottom of it sits well away from the wall — the rule is 1 metre out for every 4 metres up. Your truck carries two ladders.",
    dataTable: {
      caption: "What you're working with",
      rows: [
        ["Window height", "6.0 m"],
        ["Safety rule", "1 m out for every 4 m up"],
        ["So the base sits", "1.5 m from the wall"],
        ["Ladder A", "6.0 m long"],
        ["Ladder B", "6.5 m long"],
        ["Ground", "Flat"],
      ],
    },
    steps: [
      {
        id: "ladder",
        type: "number",
        prompt: "How long does the ladder need to be to reach the window?",
        hint: "The ladder is the slanted side of a triangle. You already know the other two sides — straight up, and along the ground.",
        unit: "m",
        answer: 6.18,
        tolerance: 0.08,
        modelAnswer: "6.18 m",
        why:
          "Straight up is 6 m. Along the ground is 1.5 m. The ladder is the slanted line joining them, so it's √(6² + 1.5²) = √(36 + 2.25) = √38.25 = 6.18 m. The slanted side is always longer than either of the other two — which is exactly why a 6 m ladder does not reach a 6 m window.",
      },
      {
        id: "which",
        type: "choice",
        prompt: "Which ladder do you take off the truck?",
        options: [
          { id: "a", label: "Ladder A. It's 6 m and the window is 6 m — that matches." },
          { id: "b", label: "Ladder B. Ladder A is too short once it's leaning." },
          { id: "c", label: "Ladder A, stood up closer to the wall so it reaches." },
          { id: "d", label: "Either one — half a metre won't matter." },
        ],
        correct: "b",
        modelAnswer: "Ladder B, the 6.5 m one",
        why:
          "This is the trap, and it's the reason this maths exists. A 6 m ladder only reaches 6 m if it's standing straight up against the wall — and a ladder standing straight up falls backwards with you on it. Once you pull the base out to where it's safe, that same ladder only reaches about 5.8 m. Option (c) is the dangerous answer: it reaches, and then it tips.",
      },
      {
        id: "call",
        type: "text",
        prompt: "Radio the person at the window and tell them what's happening. Under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["longer", "bigger", "second", "another", "6.5", "swap", "change"], label: "that you're getting the right ladder" },
          { any: ["wait", "stay", "moment", "coming", "don't", "do not", "minute"], label: "what they should do meanwhile" },
        ],
        modelAnswer:
          "We're swapping to the longer ladder so it's safe to climb. Stay at the window, don't try to come down. We'll be up to you in two minutes.",
        why:
          "A frightened person who is told nothing tries to climb down on their own. Saying what's happening and what to do is the difference between waiting and jumping.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 9 · Trigonometry
   * ------------------------------------------------------------------ */
  {
    id: "solar-tilt",
    title: "What angle is this roof, and does it matter?",
    role: "Solar Panel Installer",
    org: "A solar company",
    place: "Takeo",
    industry: "Solar power",
    careerId: "solar-installer",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
    practitioner: {
      name: "Chenda O.",
      role: "Solar installer, 5 years",
      note: "Every price I write starts with a triangle. Get the angle wrong and the family gets less electricity every single day for twenty years.",
    },
    brief:
      "You're pricing solar panels for a house. You measured the roof: it's 6.4 m from the bottom edge up to the top, and the top is 2.4 m higher than the bottom. Panels make the most electricity when they sit at about 15° from flat. You can also sell metal frames that tilt panels further up off the roof.",
    dataTable: {
      caption: "The roof",
      rows: [
        ["Along the slope, bottom to top", "6.4 m"],
        ["How much higher the top is", "2.4 m"],
        ["Best angle for panels here", "15°"],
        ["Tilt frames you can sell", "5°, 7°, 10°"],
        ["Roof faces", "South (good)"],
      ],
    },
    steps: [
      {
        id: "pitch",
        type: "number",
        prompt: "What angle is this roof, measured from flat?",
        hint: "You know how high it goes, and how long the slope is. Which of sin, cos or tan uses those two?",
        unit: "degrees",
        answer: 22,
        tolerance: 1,
        modelAnswer: "22°",
        why:
          "You've got the height (2.4 m) and the slope (6.4 m), and that pair is sine. sin θ = 2.4 ÷ 6.4 = 0.375, so θ = 22°. Reaching for tan is the usual slip — tan needs the flat distance along the ground, which you never measured.",
      },
      {
        id: "frames",
        type: "choice",
        prompt: "The roof is 22° and panels like 15°. What do you tell the family?",
        options: [
          { id: "a", label: "Add a 7° tilt frame to get closer to 15°." },
          { id: "b", label: "Lay the panels flat on the roof at 22° and don't sell them frames." },
          { id: "c", label: "Add a 10° frame — more angle is better." },
          { id: "d", label: "Turn the job down, the roof is wrong." },
        ],
        correct: "b",
        modelAnswer: "Lay them flat on the roof at 22°",
        why:
          "Here's the catch: tilt frames only tip panels further up. On a 22° roof they take you away from 15°, not towards it. You'd need to tilt down, and these frames can't. Meanwhile 22° instead of 15° costs about 1% of the electricity over a year, while the frames cost real money and mean drilling more holes in someone's roof. Knowing when the maths says 'leave it alone' is worth as much as knowing how to work it out.",
      },
      {
        id: "explain-loss",
        type: "text",
        prompt:
          "The family read online that 15° is best and they're worried. Reassure them in under 30 words.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["22", "7 degrees", "close", "small", "difference", "off"], label: "how far off it really is" },
          { any: ["1%", "one percent", "tiny", "barely", "hardly", "little", "almost nothing"], label: "how little it costs them" },
        ],
        modelAnswer:
          "Your roof sits at 22°, only 7° off the ideal. That's about 1% less electricity over a year — less than what the frames to fix it would cost you.",
        why:
          "Someone who half-read something online is the hardest customer in any job. Answering with the actual size of the difference, instead of 'trust me', is what wins the work.",
      },
    ],
  },

  {
    id: "tree-height",
    title: "Is this tree tall enough to hit the house?",
    role: "Land Surveyor",
    org: "Town council",
    place: "Siem Reap",
    industry: "Measuring land and buildings",
    careerId: "land-surveyor",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Trigonometry" },
    practitioner: {
      name: "Bopha T.",
      role: "Surveyor, 7 years",
      note: "You can't climb it and you can't hold a tape measure up it. Trigonometry is how you measure things you can't reach.",
    },
    brief:
      "A family wants the council to cut down the big tree next to their house. They say it would hit the roof if a storm brought it down. You can't climb it. So you stand back a measured distance, and use a tool that tells you the angle from your eye up to the top of the tree.",
    dataTable: {
      caption: "What you measured",
      rows: [
        ["How far back you stood", "18.0 m"],
        ["Angle from your eye to the top", "38°"],
        ["Height of your eye", "1.6 m"],
        ["Tree to the house wall", "14.0 m"],
        ["Ground", "Flat"],
      ],
    },
    steps: [
      {
        id: "height",
        type: "number",
        prompt: "How tall is the tree?",
        hint: "Your eye isn't on the ground. Don't forget the last step.",
        unit: "m",
        answer: 15.7,
        tolerance: 0.4,
        modelAnswer: "15.7 m",
        why:
          "You know the flat distance (18 m) and you want the height, and that pair is tan. 18 × tan(38°) = 14.1 m — but that's the height above your eye, not above the ground. Add your eye height of 1.6 m and you get 15.7 m. Forgetting that last bit is the most common mistake in this job, and it always makes things look shorter than they are.",
      },
      {
        id: "risk",
        type: "choice",
        prompt: "The house is 14.0 m from the tree. What do you write down?",
        options: [
          { id: "a", label: "No risk. Trees hardly ever fall the wrong way." },
          { id: "b", label: "The tree is taller than the gap to the house, so it can reach it. Send someone to check the tree's health." },
          { id: "c", label: "15.7 and 14.0 are close enough. Leave it." },
          { id: "d", label: "Cut it down now, no further checks." },
        ],
        correct: "b",
        modelAnswer: "It can reach the house — pass it on for a health check",
        why:
          "15.7 m of tree against a 14.0 m gap means it reaches the wall with 1.7 m to spare. Your job isn't to decide whether it will fall — that's for someone who knows trees. Your job is to answer whether it could reach, which is a measuring question, and now it has a written answer. Knowing where your job stops is part of doing it.",
      },
      {
        id: "report",
        type: "text",
        prompt: "Write the one line that goes in your report. Under 30 words, and it has to hold up if someone argues with it.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["15.7", "15.6", "15.8", "15", "16"], label: "the height you measured" },
          { any: ["14", "house", "wall", "gap", "distance"], label: "the distance you compared it to" },
          { any: ["reach", "hit", "further", "more than", "taller", "greater"], label: "your conclusion" },
        ],
        modelAnswer:
          "Tree measured at 15.7 m from 18.0 m back. The house wall is 14.0 m from the trunk, so the tree can reach the building.",
        why:
          "A report with the numbers and how you got them survives an argument. A report that says 'the tree looks dangerous' doesn't. That's why surveyors write the way they do.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 10 · Sine & cosine rule
   * ------------------------------------------------------------------ */
  {
    id: "plot-boundary",
    title: "Two neighbours can't agree where the fence goes",
    role: "Land Surveyor",
    org: "Land records office",
    place: "Kandal",
    industry: "Measuring land and buildings",
    careerId: "land-surveyor",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 10", subject: "Mathematics", topic: "Sine & cosine rule" },
    practitioner: {
      name: "Bopha T.",
      role: "Surveyor, 7 years",
      note: "Half this job is triangles that stubbornly refuse to have a right angle in them.",
    },
    brief:
      "A triangle-shaped piece of land is being split between two families, and the old fence rotted away years ago. The land document lists two of the three sides, and the angle between them at the corner post. The third side — the one everyone is arguing about — was never written down.",
    dataTable: {
      caption: "From the land document",
      rows: [
        ["North side", "42.0 m"],
        ["East side", "35.0 m"],
        ["Angle between those two", "68°"],
        ["Third side", "Never recorded"],
        ["Corner post", "Still there"],
      ],
    },
    steps: [
      {
        id: "third-side",
        type: "number",
        prompt: "How long is the side they're arguing about?",
        hint: "Two sides and the angle between them — and no right angle anywhere, so Pythagoras won't work here.",
        unit: "m",
        answer: 43.4,
        tolerance: 0.6,
        modelAnswer: "43.4 m",
        why:
          "Use the cosine rule: c² = 42² + 35² − 2 × 42 × 35 × cos 68° = 1764 + 1225 − 1101 = 1888, so c = 43.4 m. Worth seeing what happens if you use Pythagoras anyway: you'd get 54.7 m, more than 11 metres out. In a boundary argument, 11 metres is somebody's house.",
      },
      {
        id: "area",
        type: "number",
        prompt: "How big is the whole piece of land?",
        hint: "There's a way to get the area of a triangle from two sides and the angle between them.",
        unit: "m²",
        answer: 682,
        tolerance: 8,
        modelAnswer: "682 m²",
        why:
          "Area = ½ × 42 × 35 × sin 68° = 682 m². Half base times height won't help you, because nobody gave you a height — and measuring one across a sloping field is exactly the job you're trying to avoid.",
      },
      {
        id: "neighbours",
        type: "text",
        prompt:
          "Both families are standing there watching you. Explain what you found in under 35 words, without saying the word 'cosine'.",
        minWords: 10,
        maxWords: 38,
        keywords: [
          { any: ["43", "43.4"], label: "the length you worked out" },
          { any: ["document", "record", "paper", "post", "corner", "measured", "title"], label: "where your numbers came from" },
        ],
        modelAnswer:
          "The two lengths on your own document, plus the corner post that's still standing, fix the third side at 43.4 metres. That's not my opinion — it comes straight from the paperwork.",
        why:
          "In an argument, the convincing part isn't the maths. It's showing the answer came from papers both families already agreed to, so neither of them has to take your word for anything.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 11 · Trigonometric functions
   * ------------------------------------------------------------------ */
  {
    id: "tide-window",
    title: "Is the water deep enough for the boat to get out?",
    role: "Port Scheduler",
    org: "River cargo terminal",
    place: "Sihanoukville",
    industry: "Ports and shipping",
    careerId: "port-scheduler",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 11", subject: "Mathematics", topic: "Trigonometric functions" },
    practitioner: {
      name: "Sarath D.",
      role: "Port scheduler",
      note: "The sea doesn't care about your timetable. You get a window. Either the boat is loaded and moving, or it waits twelve hours.",
    },
    brief:
      "A loaded cargo boat sits 2.5 m deep in the water. To get out to sea it has to pass over a shallow sandy patch. The water there gets deeper and shallower with the tide, and the port writes that as h(t) = 1.8 + 1.4 sin(πt/6) metres, where t is hours since the water was at its lowest. Loading isn't finished yet.",
    dataTable: {
      caption: "Today",
      rows: [
        ["Water depth over the shallow patch", "h(t) = 1.8 + 1.4 sin(πt/6)"],
        ["How deep the loaded boat sits", "2.5 m"],
        ["Tide takes", "12 hours to go round"],
        ["Lowest water at", "t = 0"],
        ["Loading finishes at", "t = 3 hours"],
        ["Crossing takes", "40 minutes"],
      ],
    },
    steps: [
      {
        id: "window",
        type: "number",
        prompt: "How many hours is the boat able to cross?",
        hint: "Set the depth equal to 2.5 and solve. Careful — sine passes the same value twice on the way up and the way down.",
        unit: "hours",
        answer: 4,
        tolerance: 0.3,
        modelAnswer: "4 hours",
        why:
          "You need 1.8 + 1.4 sin(πt/6) ≥ 2.5, so sin(πt/6) ≥ 0.5. Sine sits at or above 0.5 between 30° and 150°, which gives t from 1 to 5 — a four-hour window. The mistake that costs you a boat is doing sin⁻¹(0.5) = 30°, getting t = 1, and stopping. That's when the window opens, not how long it lasts.",
      },
      {
        id: "call",
        type: "choice",
        prompt: "Loading is done at t = 3 hours and the crossing takes 40 minutes. When do you send it?",
        options: [
          { id: "a", label: "Send it at t = 3. It's inside the window with room to spare." },
          { id: "b", label: "Wait for the next high tide to be safe." },
          { id: "c", label: "Send it at t = 4h40m to use the whole window." },
          { id: "d", label: "Take some cargo off so it sits higher, and go now." },
        ],
        correct: "a",
        modelAnswer: "Send it at t = 3",
        why:
          "The window shuts at t = 5, so leaving at 3 gets the boat across by 3h40m with 80 minutes to spare — and t = 3 is the top of the tide, the deepest water it'll ever get. Option (c) has the boat still crossing at 5h20m, after the water dropped. Waiting (b) wastes twelve hours for no reason. And (d) throws away cargo you're being paid to carry, to fix a problem you don't have.",
      },
      {
        id: "notice",
        type: "text",
        prompt: "Message the boat's captain. Under 30 words, and tell them why.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["3", "three"], label: "when to leave" },
          { any: ["tide", "window", "water", "shallow", "depth", "closes", "5", "drops"], label: "why then" },
        ],
        modelAnswer:
          "Leave at 3 hours sharp. The water's only deep enough between 1 and 5 hours, and 3 is the deepest it gets. That leaves you 80 minutes spare.",
        why:
          "A captain told 'leave at 3' asks why. A captain told why can make the right call themselves when loading runs twenty minutes late and you're not there.",
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * GRADE 12 · Probability & statistics
   * ------------------------------------------------------------------ */
  {
    id: "model-fairness",
    title: "Your AI works. For most students.",
    role: "AI Engineer",
    org: "Education ministry data team",
    place: "Phnom Penh",
    industry: "Artificial intelligence",
    careerId: "ai-engineer",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 12", subject: "Mathematics", topic: "Probability & statistics" },
    practitioner: {
      name: "Rithy S.",
      role: "Builds AI systems",
      note: "Nobody warned me that most of this job is arguing about whether a number means what everyone thinks it means. Building the thing is the short part.",
    },
    brief:
      "You built an AI that spots students likely to drop out, so schools can help them early. It gets the right answer 91% of the time overall, and the ministry wants to launch it on Monday. Then you split the results by where students live, and the picture changes.",
    dataTable: {
      caption: "How it performed",
      rows: [
        ["Right overall", "91%"],
        ["City students (2,600 of them)", "Right 94% of the time"],
        ["Countryside students (400 of them)", "Right 74% of the time"],
        ["Countryside share of what it learned from", "6%"],
        ["Countryside share of real dropouts", "31%"],
        ["Launch wanted", "Monday"],
      ],
    },
    steps: [
      {
        id: "misclassified",
        type: "number",
        prompt: "Out of the 400 countryside students, how many does it get wrong?",
        hint: "If it's right 74% of the time, how often is it wrong?",
        unit: "students",
        answer: 104,
        tolerance: 1,
        modelAnswer: "104 students",
        why:
          "Right 74% of the time means wrong 26% of the time, and 26% of 400 is 104 students. The headline number of 91% hides this completely, because countryside students are such a small slice that their mistakes barely move the average. That's why one accuracy number on its own tells you almost nothing.",
      },
      {
        id: "decision",
        type: "choice",
        prompt: "The ministry wants it live on Monday. What do you say?",
        options: [
          { id: "a", label: "Launch. 91% is above the 85% they asked for." },
          { id: "b", label: "Launch, but only report the 91% so nobody panics." },
          { id: "c", label: "Hold it. Show them the split, get more countryside data, then test again." },
          { id: "d", label: "Launch in city schools only, and quietly leave the countryside ones out." },
        ],
        correct: "c",
        modelAnswer: "Hold it, show the split, fix the data",
        why:
          "Countryside students are 6% of what the AI learned from, but 31% of the students who actually drop out. So it's least reliable exactly where it matters most — launching means the kids most likely to leave school get the worst guesses. Option (d) sounds careful but it's the worst one: the schools that need help most get nothing, and the gap gets wider. Option (b) is how careers end.",
      },
      {
        id: "brief-ministry",
        type: "text",
        prompt:
          "Write the first line of your note to the ministry. Under 35 words, no technical words, and it has to still make sense when someone forwards it.",
        minWords: 10,
        maxWords: 38,
        keywords: [
          { any: ["countryside", "rural", "some students", "village", "group"], label: "who it lets down" },
          { any: ["74", "26", "1 in 4", "one in four", "quarter"], label: "how big the gap is" },
          { any: ["hold", "wait", "delay", "before", "more data", "not ready"], label: "what you're asking for" },
        ],
        modelAnswer:
          "It's right 91% of the time overall, but only 74% for countryside students — wrong about one in four, in the group with the most dropouts. I'd hold the launch until we fix that.",
        why:
          "This is the part of AI work nobody shows you. The maths took an afternoon. Explaining a fairness problem to people who will make policy with it, in writing, in a way that doesn't get you overruled, is the actual job.",
      },
    ],
  },
];
