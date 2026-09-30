export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  category: string;
  tech: string[];
  links: WorkLink[];
  featured?: boolean;
};

export const WORK: WorkItem[] = [
  {
    slug: "seeking",
    title: "seeking",
    summary:
      "A camera for coding agents. One command or MCP call produces one trustworthy image.",
    body: [
      "seeking is a Rust CLI and MCP tool that captures pages for agents that need ground truth, not guesswork.",
      "Install from the public script, point it at a URL, and get a deterministic screenshot with sizing, dark mode, selectors, and batch modes.",
      "Built as iris-troy. The product name on the door is seeking.",
    ],
    category: "Systems / tooling",
    tech: ["Rust", "CLI", "MCP"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/iris-troy" },
    ],
    featured: true,
  },
  {
    slug: "editlayer",
    title: "EditLayer",
    summary:
      "Drop-in visual editor for a React app. Layout is JSON. A person can drag it. A model can write the same file.",
    body: [
      "EditLayer turns a running React app into a shared design surface. Toggle edit, drag and restyle, save layout JSON, and work with an agent over MCP on the same elements.",
      "Overlay handles are still in comparison. Flex and grid nesting still fail in places. The README says that out loud.",
      "Flagship product craft for the paper portfolio. A short clip belongs on this page when one exists.",
    ],
    category: "Product",
    tech: ["React", "Vite", "TypeScript", "MCP"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/EditLayer" },
    ],
    featured: true,
  },
  {
    slug: "may-pasok-ba",
    title: "May Pasok Ba?",
    summary:
      "WALA or MERON for classes, work, and government offices in the Philippines, from allowlisted news.",
    body: [
      "Type a place. The page answers from allowlisted Philippine outlets, not random blogs and not Facebook.",
      "Runs on Cloudflare Workers with KV caching and careful Browser Rendering budget for Google News decode paths.",
      "Not an official LGU or DepEd feed. MERON means no matching evidence, not an all-clear.",
    ],
    category: "Shipped product",
    tech: ["Cloudflare Workers", "KV", "TypeScript"],
    links: [
      { label: "Live", href: "https://may-pasok-ba.niched.tech/" },
      { label: "GitHub", href: "https://github.com/Troy-LL/may-pasok-ba" },
    ],
    featured: true,
  },
  {
    slug: "pupsync",
    title: "Pupsync",
    summary:
      "PUP SIAS schedule, parsed off the page and dropped into Google Calendar.",
    body: [
      "A Chrome extension that turns a campus schedule page into calendar events you can actually use.",
      "Narrow problem. Real distribution on the Chrome Web Store.",
    ],
    category: "Utility",
    tech: ["JavaScript", "Chrome Extension"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/Pupsync" },
    ],
  },
  {
    slug: "ramjob",
    title: "ramjob",
    summary:
      "Windows app-group RAM limiter. Rust CLI. Build it, then run it.",
    body: [
      "ramjob caps RAM for groups of Windows processes so a machine stays usable under load.",
      "Windows-only. Unsigned binary. For systems-minded readers who will build from source.",
    ],
    category: "Systems",
    tech: ["Rust", "Windows"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/ramjob" },
    ],
  },
  {
    slug: "openreach",
    title: "OpenReach",
    summary:
      "Reach for scientific papers that were not findable before. Local-first.",
    body: [
      "OpenReach is a TypeScript tool for finding papers that usual search misses.",
      "No public click-through deploy yet. The honest proof is the repo and a local run.",
    ],
    category: "Research tooling",
    tech: ["TypeScript"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/OpenReach" },
    ],
  },
  {
    slug: "ai-compacting",
    title: "AI-Compacting",
    summary:
      "Paper-first research on compact phone LLMs. No claimed wins without a run.",
    body: [
      "Literature bounds and a Compact Curriculum Recipe hypothesis for small INT4 models under a fixed process-RSS budget.",
      "This is research scaffolding, not a shipped inference product. The README refuses result claims without a run. So does this page.",
    ],
    category: "Research",
    tech: ["Python", "PyTorch"],
    links: [
      { label: "GitHub", href: "https://github.com/Troy-LL/AI-Compacting" },
    ],
  },
  {
    slug: "alaitaptap",
    title: "ALAITAPTAP",
    summary:
      "ASEAN AI Challenge build. Walking routes in Metro Manila weighted toward safer streets.",
    body: [
      "Challenge submission using GeoJSON, OSM, and crime-related inputs available for the build.",
      "Live demo exists. Treat it as a challenge build, not an authoritative safety product.",
    ],
    category: "Challenge build",
    tech: ["TypeScript", "GeoJSON", "OSM"],
    links: [
      { label: "Live", href: "https://alaitaptap.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Troy-LL/ALAITAPTAP" },
    ],
  },
  {
    slug: "kinetic-music",
    title: "Kinetic Music",
    summary:
      "Phone sensors turn into a kinetic accordion UI.",
    body: [
      "A hardware-aware web experiment using device orientation. Color on the shelf, not core hiring proof.",
    ],
    category: "Experiment",
    tech: ["JavaScript", "Device Orientation API"],
    links: [
      { label: "Live", href: "https://accordion-kinetic.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Troy-LL/Kinetic-Music" },
    ],
  },
];

export function getFeaturedWork(): WorkItem[] {
  return WORK.filter((item) => item.featured);
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORK.find((item) => item.slug === slug);
}
