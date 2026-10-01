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
    slug: "pupsync",
    title: "Pupsync",
    summary:
      "PUP SIAS schedule into Google Calendar. 120+ active users on the Chrome Web Store.",
    body: [
      "A Chrome extension that turns a campus schedule page into calendar events you can actually use.",
      "Also reads GWA and Latin honors standing from the grades page. 120+ active users on the Chrome Web Store.",
    ],
    category: "Shipped product",
    tech: ["JavaScript", "Chrome Extension"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/pupsync/lajkaclhliicgdfdlnfioaodjnkjmedp",
      },
      { label: "Site", href: "https://pupsync.niched.tech" },
      { label: "GitHub", href: "https://github.com/Troy-LL/Pupsync" },
    ],
    featured: true,
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
      "Reach for scientific papers that were not findable before. Local-first scoring, hosted UI.",
    body: [
      "OpenReach retrieves candidates across a dozen scholarly indexes, then scores title and abstract against your question with Jev. No embeddings, no vector database.",
      "Live at openreach.niched.tech, including remote MCP. Browse sample results works without a key.",
    ],
    category: "Research tooling",
    tech: ["TypeScript"],
    links: [
      { label: "Live", href: "https://openreach.niched.tech" },
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
