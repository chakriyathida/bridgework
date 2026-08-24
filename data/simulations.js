// Seed simulations. Each one is anchored to a named curriculum topic and written
// from a real job task. Steps are graded deterministically by lib/grade.js.

import { STEM_SIMULATIONS } from "./simulations-stem";

const FIELD_SIMULATIONS = [
  {
    id: "water-chlorine",
    title: "Is this village's water safe to drink today?",
    role: "Water Quality Technician",
    org: "Clean Water Cambodia (field team)",
    place: "Kandal Province",
    industry: "Public health & engineering",
    careerId: "water-quality-technician",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Mathematics", topic: "Ratio & proportion" },
    practitioner: {
      name: "Sokha P.",
      role: "Field technician, 4 years",
      note: "Most of my job is arithmetic I learned at 15. The hard part is deciding what to do when the number sits near the line.",
    },
    brief:
      "You service a community tank that supplies about 300 people. You have just run this morning's test. Free chlorine has to stay between 0.2 and 0.5 mg/L — below that the water is not protected, above that people complain about the taste and stop drinking it.",
    dataTable: {
      caption: "This morning's readings",
      rows: [
        ["Tank volume", "4,500 L"],
        ["Free chlorine now", "0.10 mg/L"],
        ["Target level", "0.30 mg/L"],
        ["Stock solution", "5% (50,000 mg/L)"],
        ["Turbidity", "3.1 NTU (acceptable)"],
      ],
    },
    steps: [
      {
        id: "dose",
        type: "number",
        prompt:
          "How many millilitres of the 5% stock solution do you add to bring the tank from 0.10 to 0.30 mg/L?",
        hint: "Work out the extra milligrams the whole tank needs, then how many mL of stock contains that much.",
        unit: "mL",
        answer: 18,
        tolerance: 1.5,
        modelAnswer: "18 mL",
        why:
          "You need to raise it by 0.20 mg/L across 4,500 L, so 0.20 × 4,500 = 900 mg. The stock holds 50,000 mg per litre, so 900 ÷ 50,000 = 0.018 L = 18 mL. That's a ratio question — the same one that's in the textbook.",
      },
      {
        id: "call",
        type: "choice",
        prompt: "It is 7am and the dose takes 30 minutes to mix through. Families collect water from 6am. What do you do?",
        options: [
          { id: "a", label: "Declare it safe — 0.10 mg/L is close enough to the range." },
          { id: "b", label: "Dose it, sign the tank as 'do not collect' for 30 minutes, and re-test before you leave." },
          { id: "c", label: "Dose it double so it definitely clears the range, and go to your next site." },
          { id: "d", label: "Leave it and report it to the office to deal with tomorrow." },
        ],
        correct: "b",
        modelAnswer: "Dose it, close the tank for 30 minutes, re-test before leaving.",
        why:
          "0.10 is below the protective threshold, so (a) is unsafe. Doubling the dose pushes the taste past what people will accept and they switch back to untreated water, so (c) fails in a way that isn't obvious from the chemistry. Leaving it (d) leaves 300 people unprotected for a day. The real answer costs you 30 minutes and closes the loop with a re-test.",
      },
      {
        id: "message",
        type: "text",
        prompt:
          "Write the message you send to the village chief. He will read it aloud. Keep it under 30 words and say when the water is ready.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["30 min", "30 minutes", "half an hour", "7:30", "7.30", "30-minute"], label: "when it will be ready" },
          { any: ["safe", "ready", "ok to", "can collect", "drink"], label: "whether it is safe" },
          { any: ["wait", "do not collect", "don't collect", "hold off", "not yet", "pause"], label: "what to do meanwhile" },
        ],
        modelAnswer:
          "Treating the tank now. Please ask families to wait until 7:30 before collecting. Water will be safe to drink after that. I'll re-test before I go.",
        why:
          "A supervisor is checking three things: does it say when, does it say whether it's safe, and does it tell people what to do in the meantime. Technical writing is a job skill, and it is graded here like one.",
      },
    ],
  },

  {
    id: "rice-yield",
    title: "Why is this rice plot losing yield?",
    role: "Agronomy Field Advisor",
    org: "Battambang rice cooperative",
    place: "Battambang Province",
    industry: "Agriculture & food security",
    careerId: "agronomy-advisor",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 8", subject: "Science", topic: "Photosynthesis & plant nutrition" },
    practitioner: {
      name: "Dara C.",
      role: "Field advisor, agricultural co-op",
      note: "The farmers know their land better than I do. My job is to read the signs and explain them in words they can act on the same day.",
    },
    brief:
      "One member's plot is down 22% on last season while the plots either side are normal. He has 40 dollars to spend and needs the crop to hold until harvest. You have one visit.",
    dataTable: {
      caption: "Field notes and soil test",
      rows: [
        ["Yield vs last season", "−22%"],
        ["Soil pH", "5.4 (acidic)"],
        ["Rainfall", "Normal for the season"],
        ["Leaf symptom", "Yellow between the veins, veins still green"],
        ["Affected leaves", "Older leaves first"],
        ["Neighbouring plots", "Healthy"],
      ],
    },
    steps: [
      {
        id: "diagnose",
        type: "choice",
        prompt: "Yellowing between the veins, starting on the older leaves. What is the most likely cause?",
        options: [
          { id: "a", label: "Not enough water" },
          { id: "b", label: "Magnesium deficiency" },
          { id: "c", label: "Too much nitrogen" },
          { id: "d", label: "Insect damage" },
        ],
        correct: "b",
        modelAnswer: "Magnesium deficiency",
        why:
          "Magnesium sits at the centre of the chlorophyll molecule — the thing that makes photosynthesis possible. When it runs short the plant pulls it out of its older leaves first and moves it to the new growth, which is exactly the pattern in the notes. Acidic soil at pH 5.4 makes magnesium harder to take up, so the soil test agrees with the leaves.",
      },
      {
        id: "intervene",
        type: "choice",
        prompt: "You have $40 and one visit. What do you recommend?",
        options: [
          { id: "a", label: "Nitrogen fertiliser — it's the cheapest and greens up leaves fast." },
          { id: "b", label: "Dolomite lime to lift the pH, plus a foliar magnesium spray for this season." },
          { id: "c", label: "More irrigation." },
          { id: "d", label: "Replant with a different variety next season." },
        ],
        correct: "b",
        modelAnswer: "Dolomite lime plus a foliar magnesium spray",
        why:
          "Nitrogen makes the leaves look greener without fixing the shortage, which is why it's the tempting wrong answer. The lime treats the cause — the acidity blocking uptake — but it works slowly, so the spray carries this season's crop while the lime fixes next season's. Two timescales, one budget.",
      },
      {
        id: "advice",
        type: "text",
        prompt:
          "Write what you tell the farmer. He did not finish secondary school. Under 30 words, no technical terms he can't act on.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["lime", "dolomite"], label: "the soil treatment" },
          { any: ["spray", "foliar", "leaves"], label: "the fast-acting fix" },
          { any: ["soil", "acid", "sour"], label: "why it happened" },
        ],
        modelAnswer:
          "Your soil has turned too sour, so the plants can't take up what they need. Spray the leaves this week for this crop, and spread lime before you plant again.",
        why:
          "You are graded on whether a person can act on it, not on whether it is technically complete. Naming the cause in plain words is what makes the advice stick after you drive away.",
      },
    ],
  },

  {
    id: "dengue-campaign",
    title: "Get parents to empty their water containers",
    role: "Public Health Campaign Designer",
    org: "Provincial health office",
    place: "Siem Reap",
    industry: "Communications & public health",
    careerId: "health-communicator",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 10", subject: "English", topic: "Persuasive writing & audience" },
    practitioner: {
      name: "Chanthou L.",
      role: "Health promotion officer",
      note: "People already know dengue is dangerous. Telling them again does nothing. You have to give them one thing to do on a Tuesday.",
    },
    brief:
      "Dengue cases are up 40% this month. Mosquitoes breed in standing water in household containers. Your audience is parents of young children. Half of them get information from radio, not from a phone.",
    dataTable: {
      caption: "What you know about the audience",
      rows: [
        ["Cases this month", "+40%"],
        ["Audience", "Parents, children under 10"],
        ["Radio reach", "~50%"],
        ["Social media reach", "~35%, mostly under 30"],
        ["Budget", "One channel only"],
        ["Known barrier", "People believe dengue comes from dirty water, not clean water"],
      ],
    },
    steps: [
      {
        id: "channel",
        type: "choice",
        prompt: "You can fund one channel. Which do you pick, and why does it beat the others?",
        options: [
          { id: "a", label: "Facebook video — cheapest to produce, easy to measure." },
          { id: "b", label: "Radio spot — reaches half the audience including those without smartphones." },
          { id: "c", label: "Printed posters at the health centre." },
          { id: "d", label: "SMS blast to all registered numbers." },
        ],
        correct: "b",
        modelAnswer: "Radio",
        why:
          "Facebook has the better metrics and the worse reach for this audience — it skews under 30 and these are parents. Posters only reach people who already came to a health centre, which is the wrong end of the problem. Radio reaches half the actual audience, including the households least likely to have another source.",
      },
      {
        id: "script",
        type: "text",
        prompt:
          "Write a three-line radio spot. It must correct the belief that only dirty water breeds mosquitoes, and give one concrete action.",
        minWords: 15,
        maxWords: 60,
        keywords: [
          { any: ["clean water", "clear water", "clean", "rain water", "rainwater"], label: "corrects the clean-water myth" },
          { any: ["empty", "cover", "tip out", "pour out", "scrub", "change the water"], label: "one concrete action" },
          { any: ["week", "today", "every", "friday", "sunday", "each"], label: "when to do it" },
        ],
        modelAnswer:
          "Mosquitoes that carry dengue don't breed in dirty water. They breed in the clean water beside your house — the jar, the bucket, the flower pot. Empty them once a week. That is all it takes.",
        why:
          "Three moves in three lines: break the wrong belief, name the containers they actually own, give one action with a frequency. Persuasive writing marked the way a health office marks it.",
      },
      {
        id: "defend",
        type: "text",
        prompt:
          "Your supervisor says 'the science isn't in there'. Defend one word choice in under 25 words.",
        minWords: 6,
        maxWords: 28,
        keywords: [
          { any: ["understand", "act", "action", "remember", "simple", "plain", "listener", "audience"], label: "argues from the audience" },
        ],
        modelAnswer:
          "The listener has thirty seconds and a radio in the background. If they remember one sentence, it has to be the one that changes what they do.",
        why:
          "Defending a choice is the skill. A campaign that is technically complete and forgettable saves nobody — you are being marked on whether you can argue for your audience.",
      },
    ],
  },

  {
    id: "loan-decision",
    title: "Should this market vendor get her $400?",
    role: "Microfinance Loan Officer",
    org: "Community lender",
    place: "Phnom Penh",
    industry: "Finance & community lending",
    careerId: "loan-officer",
    minutes: 12,
    source: "seed",
    curriculum: { grade: "Grade 10", subject: "Mathematics", topic: "Percentages & interest" },
    practitioner: {
      name: "Ratana S.",
      role: "Loan officer, 6 years",
      note: "Approving someone who can't repay isn't kindness. It's how you take away the only stall they have.",
    },
    brief:
      "Srey Mom sells vegetables. She wants $400 to buy stock in bulk, which she says will raise her margin. Your lender charges 2% per month, repaid over 6 months. Your rule of thumb: repayments should not exceed 30% of surplus.",
    dataTable: {
      caption: "Her last three months",
      rows: [
        ["Average monthly takings", "$310"],
        ["Average monthly costs", "$205"],
        ["Monthly surplus", "$105"],
        ["Existing loan repayment", "$18/month"],
        ["Requested", "$400 over 6 months"],
        ["Rate", "2% per month, flat"],
      ],
    },
    steps: [
      {
        id: "repayment",
        type: "number",
        prompt: "What is her monthly repayment on $400 at 2% flat per month over 6 months?",
        hint: "Flat interest: the interest is calculated on the original amount for every month of the term.",
        unit: "$",
        answer: 74.67,
        tolerance: 1.5,
        modelAnswer: "$74.67 per month",
        why:
          "Interest is 400 × 2% × 6 = $48. Total repayable is $448 over 6 months, so $74.67 a month. Flat interest is the version most people meet in real life and the version textbooks skip.",
      },
      {
        id: "capacity",
        type: "choice",
        prompt:
          "Her surplus is $105 and she already repays $18. Against your 30% rule, what is the decision?",
        options: [
          { id: "a", label: "Approve $400 — she has surplus and she asked for it." },
          { id: "b", label: "Decline. She cannot afford anything." },
          { id: "c", label: "Offer a smaller amount or a longer term so repayments fit her surplus." },
          { id: "d", label: "Approve $400 but at a higher rate to cover the risk." },
        ],
        correct: "c",
        modelAnswer: "Restructure — smaller amount or longer term",
        why:
          "30% of $105 is $31.50, and she already commits $18, leaving about $13.50 of room. $74.67 is more than five times that, so (a) sets her up to lose the stall. But she is not un-creditworthy either, so (b) is wrong: she has a real surplus. Raising the rate (d) makes an unaffordable loan more unaffordable. The job is to find the loan that fits.",
      },
      {
        id: "explain",
        type: "text",
        prompt:
          "Tell her the decision to her face. Under 35 words. She has waited two hours to see you.",
        minWords: 10,
        maxWords: 38,
        keywords: [
          { any: ["smaller", "less", "longer", "more months", "reduce", "instead", "$", "offer"], label: "the alternative you can offer" },
          { any: ["afford", "repay", "surplus", "left over", "each month", "manage"], label: "the reason in her terms" },
        ],
        modelAnswer:
          "I can't do $400 — the repayments are more than your stall clears each month. I can do $150 over six months today, and a bigger one once that's repaid.",
        why:
          "Decline without an alternative and she goes to a lender who will approve the $400. The job is not to say no. It is to leave her with something she can actually repay.",
      },
    ],
  },

  {
    id: "route-planner",
    title: "Four pickups, one truck, and a flooded road",
    role: "Logistics Route Planner",
    org: "Garment exporter",
    place: "Phnom Penh → Sihanoukville",
    industry: "Supply chain & operations",
    careerId: "logistics-planner",
    minutes: 10,
    source: "seed",
    curriculum: { grade: "Grade 9", subject: "Geography", topic: "Maps, scale & distance" },
    practitioner: {
      name: "Vibol K.",
      role: "Dispatch coordinator",
      note: "Everyone can plan the route that works. You get paid for the one where something has already gone wrong.",
    },
    brief:
      "One truck, four factories to collect from, one port with a 6pm container cut-off. National Road 4 is flooded at the 60 km mark and the detour adds 45 minutes. It is 11am.",
    dataTable: {
      caption: "Today's run",
      rows: [
        ["Departure", "11:00am"],
        ["Factory A → B → C → D", "20 / 35 / 25 min between"],
        ["Loading time", "20 min per factory"],
        ["Last factory → port", "2 h 30 (normal)"],
        ["Flood detour", "+45 min"],
        ["Port cut-off", "6:00pm"],
      ],
    },
    steps: [
      {
        id: "arrival",
        type: "number",
        prompt:
          "Driving A→B→C→D with 20 minutes loading at each, then the run to port with the detour — how many minutes past 6pm do you arrive? (Enter 0 if you make it.)",
        hint: "Add the driving between factories, four loadings, then 2h30 plus 45 minutes to the port.",
        unit: "min late",
        answer: 55,
        tolerance: 5,
        modelAnswer: "55 minutes late",
        why:
          "Driving between factories is 20+35+25 = 80 min. Loading is 4 × 20 = 80 min. Port run is 150 + 45 = 195 min. Total 355 min from 11:00 = 6:55pm. You are 55 minutes late, and that is before anything else goes wrong.",
      },
      {
        id: "cut",
        type: "choice",
        prompt: "You cannot make the cut-off with all four. What do you drop?",
        options: [
          { id: "a", label: "Drop factory D — it's last, so it's the easiest to cut." },
          { id: "b", label: "Find out which factory's shipment has the earliest vessel and keep that one; drop whichever misses nothing." },
          { id: "c", label: "Drive faster and skip loading checks." },
          { id: "d", label: "Take all four and arrive late — the port will probably wait." },
        ],
        correct: "b",
        modelAnswer: "Find out whose cargo actually sails first, then cut",
        why:
          "Cutting the last stop is convenient, not correct — the cost of a missed pickup depends on the vessel it was booked onto, not on the order you drive it. This is the step where geography becomes a business decision.",
      },
      {
        id: "notify",
        type: "text",
        prompt: "Message the factory you are dropping. Under 30 words. Give them a new time.",
        minWords: 8,
        maxWords: 32,
        keywords: [
          { any: ["tomorrow", "morning", "am", "next run", "6am", "7am", "first"], label: "a new time" },
          { any: ["flood", "road", "detour", "delay", "cut-off", "cut off"], label: "the reason" },
        ],
        modelAnswer:
          "Road 4 is flooded and we'd miss the 6pm cut-off. We're collecting you first thing tomorrow at 7am — your container still makes Thursday's vessel.",
        why:
          "Reason, new time, and what it means for them. A dispatcher who only sends the first part gets a phone call they don't have time for.",
      },
    ],
  },
];

export const SIMULATIONS = [...STEM_SIMULATIONS, ...FIELD_SIMULATIONS];

export function getSimulation(id) {
  return SIMULATIONS.find((s) => s.id === id) || null;
}
