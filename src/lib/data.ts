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
    company: "AWS User Group e:Novators Philippines",
    role: "Start-Up Development Office – Committee Member",
    period: "Apr 2026 – Present",
    startDate: "2026-04-01",
    description: "Supporting start-up development initiatives that foster innovation and collaboration. Helping organize programs for aspiring entrepreneurs and building a vibrant environment for networking and knowledge sharing among start-ups.",
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
    title: "The Free Credential Index",
    category: "Open-Source / Education",
    summary: "A curated, rot-resistant library of industry-recognized free tech certifications.",
    description: "An 'Awesome-style' repository documenting zero-cost certifications from organizations like Google, AWS, and Microsoft. Designed for long-term reliability and metadata-rich indexing.",
    tech: ["Markdown", "GitHub Actions", "Documentation", "Open Source"],
    github: "https://github.com/Troy-LL/The-Free-Credential-Index",
  },
  {
    title: "Skill Swipe",
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
    title: "Wordle Troy Editions",
    category: "Web Game / Speedrun",
    summary: "Custom Wordle implementations with curated vocabularies and theme-based challenges.",
    description: "Custom Wordle implementations with curated vocabularies, theme-based challenges, and extended game mechanics. Created in <1hr as an AI-agentic coding test.",
    tech: ["JavaScript", "HTML/CSS", "Python", "Game Design"],
    github: "https://github.com/Troy-LL/Wordle-Troy-Editions",
    website: "https://wordleer.netlify.app/",
  },
  {
    title: "Kinetic Music",
    category: "Hardware-Integrated UI",
    summary: "A physically-responsive accordion leveraging phone hardware sensors.",
    description: "An interactive accordion that leverages on-board hardware (accelerometer and gyroscope) to create a physically-responsive, kinetic UI/UX.",
    tech: ["JavaScript", "Device Orientation API", "GSAP", "Hardware UI"],
    github: "https://github.com/Troy-LL/Kinetic-Music",
    website: "https://accordion-kinetic.vercel.app/",
  },
  {
    title: "Flavor Mapping",
    category: "Data-Driven Gastronomy",
    summary: "A data visualization tool for discovering ingredient pairings across cuisines.",
    description: "A data-driven flavor exploration tool helping users discover ingredient pairings and profile mapping across various cuisines.",
    tech: ["TypeScript", "Data Mapping", "React", "Gastronomy AI"],
    github: "https://github.com/Troy-LL/Flavor-Mapping",
    website: "https://flavormapping.netlify.app/",
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
    items: ["AWS", "Git", "GitHub Actions", "Docker", "Stellar SDK", "Solidity"]
  }
];
