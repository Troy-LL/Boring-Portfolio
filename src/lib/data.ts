export const EXPERIENCE = [
  {
    company: "ASES Manila",
    role: "PUP University Lead",
    period: "2026 – Present",
    startDate: "2026-01-01",
    description: "Serving as the primary campus ambassador for ASES Manila within PUP. Connecting university leads and founders to build a shared entrepreneurship ecosystem.",
  },
  {
    company: "GDG on Campus – PUP Manila",
    role: "Talent Development Lead",
    period: "2024 – Present",
    startDate: "2024-01-01",
    description: "Progressed from Associate to Co-Lead and now Lead. Designing internal programs, tracking member engagement, and creating leadership pipelines for student developers.",
  },
  {
    company: "AWS Cloud Club – Philippines",
    role: "Community Engagement Officer",
    period: "2025 – Present",
    startDate: "2025-01-01",
    description: "Leading outreach to students and alumni, coordinating speakers, and collaborating with marketing teams to increase program visibility.",
  },
  {
    company: "Microsoft Student Community – PUP",
    role: "Executive Secretary, Leadership Development",
    period: "2025 – Present",
    startDate: "2025-01-01",
    description: "Overseeing internal documentation and communications. Provided executive support for TechShift: A Whirlpool of Innovation.",
  },
  {
    company: "IBITS – PUP",
    role: "Deputy Head, Community Involvement",
    period: "Oct 2025 – Present",
    startDate: "2025-10-01",
    description: "Supporting organizational outreach projects and impact-driven community initiatives within the IT department.",
  },
  {
    company: "AWS Cloud Club – PUP",
    role: "Community Relations Resident",
    period: "2025 – Present",
    startDate: "2025-01-01",
    description: "Fostering partnerships among members and mentors. Supporting engagement in cloud technologies.",
  },
  {
    company: "JCO – Manila",
    role: "People’s Advocacies Campaign Committee",
    period: "2024 – 2025",
    startDate: "2024-01-01",
    description: "Supported student empowerment campaigns and amplified campus-wide civic awareness through outreach.",
  },
  {
    company: "DOST–PAGASA",
    role: "Intern",
    period: "Apr 2023 – May 2023",
    startDate: "2023-04-01",
    description: "Technical internship at the Science Garden, focusing on data operations and meteorological support.",
  },
  {
    company: "OpenVerse / Seekers Guild",
    role: "Volunteer / Member",
    period: "Dec 2025 – Present",
    startDate: "2025-12-01",
    description: "Active contributor and member involved in community-driven tech exploration and social networking.",
  },
];

export interface Project {
  title: string;
  category: string;
  summary: string;
  description: string;
  tech: string[];
  github: string;
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "H(AI)LP",
    category: "Technical Research",
    summary: "A research codebase exploring efficient RWKV vs. Transformer architectures.",
    description: "A comparative research codebase exploring RWKV vs. Transformer architectures. Features PyTorch implementation, INT4 quantization (GGUF), and memory-efficient inference for edge devices.",
    tech: ["PyTorch", "GGUF", "RWKV", "Research"],
    github: "https://github.com/Troy-LL/AI-Compacting",
  },
  {
    title: "Active Facial Note Taking",
    category: "Computer Vision",
    summary: "Hands-free note-taking utility using facial recognition and gesture mapping.",
    description: "Real-time facial recognition system using MediaPipe and OpenCV. Integrated with a Flask-SocketIO backend and a custom UI for floating data-overlays.",
    tech: ["MediaPipe", "OpenCV", "Flask", "SocketIO"],
    github: "https://github.com/Troy-LL/Facial-Recognition-Side-Project",
  },
  {
    title: "skill-swipe",
    category: "Developer Camp Hackathon Submission",
    summary: "A full-stack project built in 3 days under intense cultural time pressure.",
    description: "Built in 3 days under intense pressure in a cross-cultural environment where language barriers existed. Tested rapid full-stack development and front-end adaptability.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/Troy-LL/skill-swipe",
  },
  {
    title: "ALAITAPTAP",
    category: "ASEAN AI Challenge Submission",
    summary: "AI-powered walking navigation that routes women through safer streets in Metro Manila.",
    description: "AI-powered walking navigation routing users through safer streets in Metro Manila based on real-time crime data and public infrastructure mapping.",
    tech: ["TypeScript", "GeoJSON", "OSM", "AI Modeling"],
    github: "https://github.com/Troy-LL/ALAITAPTAP",
  },
  {
    title: "PledgeRun",
    category: "Blockchain / Speedrun",
    summary: "A decentralized pledge platform built in under 2 hours for a Stellar hackathon.",
    description: "A decentralized pledge and contribution platform. Built in under 2 hours as a hackathon speedrun during the Stellar Bootcamp, demonstrating rapid Web3 integration.",
    tech: ["TypeScript", "Stellar SDK", "Blockchain", "Speedrun"],
    github: "https://github.com/Troy-LL/PledgeRun",
  },
  {
    title: "accordion-kinetic",
    category: "Hardware-Integrated UI",
    summary: "A physically-responsive accordion leveraging phone hardware sensors.",
    description: "An interactive accordion that leverages on-board hardware (accelerometer and gyroscope) to create a physically-responsive, kinetic UI/UX.",
    tech: ["JavaScript", "Device Orientation API", "GSAP", "Hardware UI"],
    github: "https://github.com/Troy-LL/accordion-kinetic",
    website: "https://accordion-kinetic.vercel.app/",
  },
  {
    title: "flavor-mapping-app",
    category: "Data-Driven Gastronomy",
    summary: "A data visualization tool for discovering ingredient pairings across cuisines.",
    description: "A data-driven flavor exploration tool helping users discover ingredient pairings and profile mapping across various cuisines.",
    tech: ["TypeScript", "Data Mapping", "React", "Gastronomy AI"],
    github: "https://github.com/Troy-LL/flavor-mapping-app",
    website: "https://flavormapping.netlify.app/",
  },
  {
    title: "student-memory-map",
    category: "Cognitive Visualization",
    summary: "A cognitive mapping tool designed to improve long-term information retention.",
    description: "A cognitive visualization tool designed to help students map information hierarchies and improve long-term retention.",
    tech: ["TypeScript", "Canvas API", "Data Structures", "EdTech"],
    github: "https://github.com/Troy-LL/student-memory-map",
    website: "https://studentmapping.netlify.app/",
  },
];

export const TECH_STACK = [
  {
    category: "Front-End",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vanilla JS", "HTML/CSS"]
  },
  {
    category: "Back-End",
    items: ["Node.js", "Python", "Flask", "Socket.IO", "Prisma", "PostgreSQL", "REST APIs"]
  },
  {
    category: "AI/ML Research",
    items: ["PyTorch", "GGUF", "RWKV", "MediaPipe", "OpenCV", "Transformers"]
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Git", "Docker", "Stellar SDK", "Solidity", "Linux Ops"]
  }
];
