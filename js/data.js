// ============================================================
//  OTERO-LEON LAB — DATA FILE
//  Edit this file to update all content on your website.
// ============================================================

const LAB_DATA = {

  site: {
    labName: "Otero-Leon Research Group",
    shortName: "OLL",
    institution: "University of Virginia",
    department: "Department of Systems & Information Engineering",
    tagline: "Designing data-driven decision models to improve healthcare systems and patient outcomes",
    email: "dfotero@virginia.edu",
    address: "University of Virginia, Charlottesville, VA 22904",
    twitter: "",
    github: "",
    googleScholar: "",
  },

  home: {
    heroHeadline: "Designing Data-Driven Decision Models for Healthcare",
    heroSubtext: "We develop mathematical and computational models that help healthcare systems make better decisions, improving patient outcomes, reducing costs, and closing equity gaps.",
    researchAreas: [
      {
        icon: "🎲",
        title: "Decision-Making Under Uncertainty",
        description: "Building stochastic and robust optimization models that support clinical and operational decisions when data is incomplete or outcomes are uncertain."
      },
      {
        icon: "🛡️",
        title: "Disease Prevention",
        description: "Quantitative modeling of screening programs, vaccination strategies, and early-intervention policies to reduce disease burden at the population level."
      },
      {
        icon: "🏥",
        title: "Healthcare Operations & Logistics",
        description: "Designing efficient systems for resource allocation, patient flow, and supply chain management in hospitals and health networks."
      }
    ]
  },

  team: [
    {
      name: "Prof. Daniel F. Otero-León",
      role: "Principal Investigator",
      bio: "Assistant Professor at the University of Virginia",
      photo: "https://raw.githubusercontent.com/dfotero/otero_leon_lab/main/assets/images/dotero.JPG",
      email: "dfotero@virginia.edu",
      website: "https://engineering.virginia.edu/faculty/daniel-otero-leon",
      googleScholar: "https://scholar.google.com/citations?user=oA2j_v4AAAAJ&hl=en",
      twitter: "",
      github: "",
      category: "faculty"
    },
    {
      name: "Wendy Qi",
      role: "5th Year PhD Student",
      bio: "Research in Markov Decision Processes",
      photo: "",
      email: "wq3vn@virginia.edu",
      website: "https://www.linkedin.com/in/wendy-qi/",
      googleScholar: "",
      twitter: "",
      github: "",
      category: "phd"
    },	
    {
      name: "Constanza Lorca",
      role: "2nd Year PhD Student",
      bio: "Research in Stochastic Optimization and Machine Learning",
      photo: "",
      email: "wrk2pp@virginia.edu",
      website: "https://www.linkedin.com/in/constanza-lorca-19a19a26a/",
      googleScholar: "",
      twitter: "",
      github: "",
      category: "phd"
    },	
    {
      name: "Viviana Milla-Angeles",
      role: "2nd Year PhD Student",
      bio: "Research in Machine Learning",
      photo: "",
      email: "sgz2zx@virginia.edu",
      website: "https://engineering.virginia.edu/faculty/viviana-milla-angeles",
      googleScholar: "",
      twitter: "",
      github: "",
      category: "phd"
    },	
    {
      name: "Gabriel Lawrence",
      role: "1st Year PhD Student",
      bio: "Research in Network Optimization",
      photo: "",
      email: "vzh2vs@virginia.edu",
      website: "https://www.linkedin.com/in/gabriel-lawrence-ort1/",
      googleScholar: "",
      twitter: "",
      github: "",
      category: "phd"
    },	
    {
      name: "Andrew Merril",
      role: "2nd Year Master Student",
      bio: "Research in Simulation",
      photo: "",
      email: "aya2kw@virginia.edu",
      website: "",
      googleScholar: "",
      twitter: "",
      github: "",
      category: "masters"
    },
    // Add team members here. Categories: faculty | postdoc | phd | masters | alumni | collaborator
  ],

  // ============================================================
  //  RESEARCH PROJECTS
  //
  //  Each project card is clickable and opens a detail page.
  //  Fill in as many or as few fields as you like.
  //
  //  FIELD GUIDE:
  //  title       — project name (required)
  //  status      — "active" or "completed"
  //  tags        — array of keyword strings
  //  summary     — short text shown on the card (1-2 sentences)
  //  description — longer text shown in the detail view (paragraph)
  //  image       — URL to a header image (leave "" for default)
  //  funding     — grant name / agency
  //  members     — array of team member names
  //
  //  papers      — array of publication objects (see format below)
  //  tools       — array of software/dataset objects
  //  links       — array of extra links (talks, datasets, press, etc.)
  // ============================================================
  research: [
    {
      title: "Stochastic Optimization for Clinical Decision Support",
      status: "active",
      tags: ["Stochastic Optimization", "Clinical Decision-Making", "Uncertainty"],
      summary: "Optimization models that account for clinical uncertainty to support real-time and strategic decisions in healthcare settings.",
      description: "We develop stochastic and robust optimization models that help clinicians and administrators make better decisions when data is incomplete, noisy, or inherently uncertain. Applications include treatment planning, triage prioritization, and hospital capacity management. Our models are designed to be interpretable and deployable in real clinical environments.",
      image: "",
      funding: "",
      members: ["Prof. Daniel Otero-León"],

      // Papers associated with this project
      papers: [
        // {
        //   title: "Paper title here",
        //   authors: "Otero-León, I., et al.",
        //   venue: "Journal of Healthcare Systems",
        //   year: 2024,
        //   type: "journal",   // journal | conference | preprint
        //   pdf: "",
        //   doi: "",
        //   highlight: false
        // },
      ],

      // Software, datasets, or tools
      tools: [
        // {
        //   name: "Tool name",
        //   description: "What it does.",
        //   link: "https://github.com/...",
        //   type: "software"  // software | dataset | package
        // },
      ],

      // Extra links: talks, press, collaborators, etc.
      links: [
        // {
        //   label: "INFORMS 2024 Talk",
        //   url: "https://...",
        //   icon: "🎤"
        // },
      ],
    },

    {
      title: "Population-Level Disease Prevention Modeling",
      status: "active",
      tags: ["Disease Prevention", "Screening", "Epidemiological Modeling"],
      summary: "Quantitative models to evaluate and optimize cancer screening programs, vaccination schedules, and early-intervention policies.",
      description: "This project builds mathematical models that simulate disease progression and evaluate the population-level impact of prevention strategies. We work with public health partners to optimize screening intervals, target high-risk populations, and allocate limited prevention resources equitably. Methods include Markov chains, simulation, and dynamic programming.",
      image: "",
      funding: "",
      members: ["Prof. Daniel Otero-León"],
      papers: [],
      tools: [],
      links: [],
    },

    {
      title: "Healthcare Operations & Resource Allocation",
      status: "active",
      tags: ["Operations Research", "Resource Allocation", "Patient Flow"],
      summary: "Analytical tools to improve hospital operations: bed management, scheduling, staff allocation, and supply chain resilience.",
      description: "We design and implement OR-based tools that help hospitals and health systems operate more efficiently. Projects span surgical scheduling, ICU capacity planning, emergency department throughput, and pharmaceutical supply chains. Our goal is to translate rigorous mathematical models into decision tools that practitioners can actually use.",
      image: "",
      funding: "",
      members: ["Prof. Daniel Otero-León"],
      papers: [],
      tools: [],
      links: [],
    },
  ],

  publications: [
    // Add publications here — most recent first.
    // {
    //   title: "Your Paper Title",
    //   authors: "Otero-León, I., Co-Author, A.",
    //   venue: "Journal of Healthcare Systems",
    //   year: 2024,
    //   type: "journal",   // journal | conference | workshop | preprint
    //   pdf: "",
    //   code: "",
    //   doi: "",
    //   highlight: true
    // },
  ],

  news: [],

  teaching: [
    {
      code: "SYS 6XXX",
      title: "Dynamic Decision Models",
      level: "Graduate",
      description: "An advanced course covering Markov decision processes, dynamic programming, and stochastic control with applications in healthcare and operations management.",
      semester: "Spring",
      materials: "",
    },
  ],

  talks: [],

  joinUs: {
    intro: "We are looking for motivated students and collaborators passionate about using analytical methods to solve real-world healthcare problems. If that's you, we'd love to hear from you.",
    openings: [
      {
        title: "PhD Student (Systems & Information Engineering)",
        description: "We are recruiting PhD students with strong backgrounds in operations research, applied mathematics, or engineering. Ideal candidates have experience with optimization, simulation, or machine learning. Apply through the UVA SIE graduate admissions portal.",
        applyLink: "https://engineering.virginia.edu/departments/engineering-systems-and-environment"
      },
    ],
    forProspectivePhD: "If you are interested in doing a PhD with us, please apply through the UVA SIE graduate admissions portal and mention Prof. Otero-León's name in your statement of purpose. Feel free to email a brief introduction and your CV — we read every message.",
    forUndergrads: "UVA undergraduate students interested in research are encouraged to reach out directly. Please email a short description of your background, interests, and availability."
  }

};
