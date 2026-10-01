export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  description: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "ASES Manila",
    role: "Marketing Officer (Web/SEO)",
    period: "Aug 2026 – Present",
    startDate: "2026-08-01",
    description:
      "Owns engineering on chapter public sites: asesmanila.com (Vite/React/Tailwind on Cloudflare) and Build with ASES (Next.js), including deploys and live fixes. Ships SEO basics (sitemap, robots, meta) and iterates with design and chapter leadership until live pages match the org. Previously University Lead – PUP Manila (Jan–Aug 2026).",
  },
  {
    company: "Seekers Guild",
    role: "Member",
    period: "Dec 2025 – Present",
    startDate: "2025-12-01",
    description:
      "Advises the partnerships team on event partners and how to approach them.",
  },
  {
    company: "DataCamp",
    role: "DataCamp Scholar",
    period: "Dec 2025 – Present",
    startDate: "2025-12-01",
    description:
      "Scholarship for SQL, Python, and AI coursework. Ranked 1st on the department DataCamp leaderboard for four consecutive months.",
  },
  {
    company: "ED3N Ventures",
    role: "Software Engineer Intern",
    period: "Jul 2026 – Aug 2026",
    startDate: "2026-07-01",
    description:
      "With a teammate, built a RAG path over multimodal business data for a chatbot. Helped ship a Composio automation layer steered with system and RBAC prompts. Built simple dashboards so the team could decide from charts, not only chat. Hybrid, Manila.",
  },
  {
    company: "FlyRank AI",
    role: "Backend AI Engineer Intern",
    period: "Jun 2026 – Sep 2026",
    startDate: "2026-06-01",
    description:
      "Learning-focused internship studying Backend AI materials and curriculum rather than shipping production features. Remote, Philippines.",
  },
  {
    company: "GDG on Campus – PUP Manila",
    role: "Talent Development Lead",
    period: "Jan 2026 – Aug 2026",
    startDate: "2026-01-01",
    description:
      "Designed member growth programs, skill tracking, and leadership opportunities. Previously Co-Lead (Sep 2025–Jan 2026), Associate (Nov 2024–Aug 2025), and Data and ML Cadet (Nov 2024–2025).",
  },
  {
    company: "DOST–PAGASA",
    role: "Intern",
    period: "Apr 2023 – May 2023",
    startDate: "2023-04-01",
    description:
      "Science Garden, Diliman. Helped calibrate humidity and temperature instruments for product validation; rotated through forecasting teams on station data and instruments.",
  },
];
