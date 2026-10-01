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
      "Nobody reads a portfolio the way its owner imagines.",
      "I used to picture someone settling in with a coffee, clicking every project, watching every animation, leaving impressed. That person does not exist. The person who opens this page is usually between two other tabs, with a shortlist to cut before lunch, and maybe thirty seconds of patience before they bounce. They are not here for a journey. They are here to find out what I build, whether any of it is real, and whether talking to me is worth putting on a calendar.",
      "So I budget about ninety seconds. That is the honest number, and once I admitted it, a lot of design decisions became easy. In ninety seconds a page can deliver a name, one line about what I care about, three projects with one sentence each, and a way to book time. Anything past that is me enjoying my own website, which is a fine hobby and a terrible hiring surface.",
      "The first version of this site was not like this. It had a loader. It had a hero animation. Section headers came with numbers in front of them, the way a certain kind of designer portfolio does, as if the reader needed a table of contents for six paragraphs. The theme was what I would now call dark silver mood lighting. It looked like effort. It did not answer a single question a hiring manager has. Someone who already believed in me might have liked it. Someone deciding whether to believe in me had to dig.",
      "What I cut, in order of how long it took me to admit the cut: the gallery, the numbered headers, the decorative rules between every section, the project cards that hid the actual project behind a hover state, and any sentence that existed only to sound impressive. What I kept: Switzer for interface text, two display faces for headings, generous margins, and black ink on paper. The layout is a column because reading is a column. If you need a grid to make six weak projects look like a product, you do not have six strong projects.",
      "Life’s too short to be boring, which is exactly why the site is calm. The interesting part is supposed to be the work. If the page is loud, it is competing with the thing it is meant to introduce, and the page always wins that fight because it loads first. A quiet page is a handoff. A loud page is a performance of having a page.",
      "Calm is not the same as low effort. Getting something to feel quiet took more passes than making it busy ever did. Line height. The width of a measure so a sentence does not run away. How much air sits above a heading before it feels abandoned. Whether a link should be underlined or just darker on hover. Whether a button should look like a button or pretend to be a text link out of false sophistication. None of that shows up as a feature on a changelog. All of it decides whether someone keeps reading or decides, without quite knowing why, that this person is trying too hard.",
      "I also keep a second site. It is more experimental, more motion, more of the things I cut here on purpose. That room has a job too. It is where I try ideas that would make this page worse. Mixing the two is what I did at first, and it went badly in a specific way: effects do not make the work look better, they make the work look like it needs help. A good project described plainly reads as confidence. The same project behind a reveal animation reads as a sales page. So the paper site stays paper, and the other address absorbs the impulse to be clever.",
      "The rule I use for the home page is simple enough to say out loud. If a project needs a costume to look impressive, it does not belong here. Three entries survive the shortlist right now. Each one gets a sentence a recruiter could repeat to a colleague without reading it twice, and a link that proves the thing exists in the world. seeking is a camera for coding agents. EditLayer is a visual editor that shares layout with a model. Pupsync puts a campus schedule into Google Calendar and has real people using it on the Chrome Web Store. That is the whole pitch. If those sentences are not enough, a longer paragraph will not save them.",
      "I am an IT student at PUP in Manila. I like making tools and sites, then sitting with them until they work and look cared for. That is not a positioning statement cooked in a workshop. It is the shortest true thing I can say about how I spend time. The About section has a few roles that still matter. It does not have every committee I ever joined. Recruiters do not need my org chart. They need signal.",
      "There is a contact section because work starts with a conversation, and because a pretty site with no way to reach the person is a brochure. Book a slot or send an email. Either is fine. I am not going to put a chat widget on a paper page.",
      "The test I run on myself is rude and useful. Close the tab. Wait a minute. Try to say out loud what the person builds. If I cannot, the page failed, no matter how good it looked while it was open. Most of the redesign was failing that test, then deleting whatever had been performing instead of saying.",
      "This site is boring on purpose. Not empty. Not careless. Boring the way a good resume is boring: clear, checkable, done before you notice the chrome. The rest of the personality can wait until we talk.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getLatestPost(): Post | undefined {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date))[0];
}
