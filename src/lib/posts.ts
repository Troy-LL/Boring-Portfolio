export type Post = {
  slug: string;
  title: string;
  date: string;
  dek: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "why-boring",
    title: "Why this site is boring on purpose",
    date: "2026-10-01",
    dek: "Recruiters get ninety seconds. The work has to carry itself.",
    body: [
      "The other portfolio folds a card and walks an L-path. That room is for presence and craft experiments.",
      "This one is paper, a name, a few projects that survive a harsh shortlist, and a way to talk. Life is too short to be boring. The site still has to be calm.",
      "If a project needs a costume to look impressive, it does not belong on the home page.",
    ],
  },
  {
    slug: "work-shortlist",
    title: "How the work shortlist got cut",
    date: "2026-10-01",
    dek: "Signal, depth, evidence, brand fit, maintenance truth. Ten points. Harsh.",
    body: [
      "seeking, EditLayer, and May Pasok Ba? landed on the home page because they clear the bar without a salesperson.",
      "Skill Swipe is gone. The repo 404s. Tinig waits for a clip. Research stays paper-first when the README refuses claimed runs.",
      "Fewer items. Honest sentences. One proof link each.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getLatestPost(): Post | undefined {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date))[0];
}
