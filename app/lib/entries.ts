export type TrackType = "work" | "personal" | "learn";
export type CategoryType =
  | "blog"
  | "thought"
  | "working-on"
  | "update"
  | "personal";

export interface LogEntry {
  id: string;
  track: TrackType;
  type: CategoryType;
  date: string; // ISO yyyy-mm-dd
  dateLabel: string;
  title: string;
  body: string;
  tags: string[];
  link?: { href: string; label: string } | null;
}

export const TRACK_META: Record<
  TrackType,
  { label: string; color: string; colorRgb: string }
> = {
  work: {
    label: "Work",
    color: "#ff5757",
    colorRgb: "255,87,87",
  },
  personal: {
    label: "Personal",
    color: "#d4ff1e",
    colorRgb: "212,255,30",
  },
  learn: {
    label: "Learn",
    color: "#38bdf8",
    colorRgb: "56,189,248",
  },
};

export const CATEGORY_META: Record<
  CategoryType,
  { label: string; track: TrackType }
> = {
  "working-on": { label: "Working on", track: "work" },
  update: { label: "Update", track: "work" },
  personal: { label: "Personal", track: "personal" },
  blog: { label: "Blog", track: "learn" },
  thought: { label: "Thought", track: "learn" },
};

export const ENTRIES: LogEntry[] = [
  // ── 2026 ───────────────────────────────────────────────────────────────
  {
    id: "e001",
    track: "work",
    type: "working-on",
    date: "2026-04-22",
    dateLabel: "Apr 22, 2026",
    title: "Portfolio redesign — this page",
    body: "Building a completely new version of my portfolio with Bebas Neue + DM Mono, a full responsive system using clamp() throughout, and now this living log feed so visitors can see what I'm actually working on day-to-day.",
    tags: ["html", "css", "design"],
    link: null,
  },
  {
    id: "e002",
    track: "learn",
    type: "blog",
    date: "2026-04-10",
    dateLabel: "Apr 10, 2026",
    title: "Why I built favicon-extractor",
    body: "I needed reliable favicon fetching for a side project and every solution I found either ran in the browser or had heavy dependencies. Wrote a clean Node.js-only utility, published it on npm, and documented it properly. Here's what I learned about dual ESM/CJS exports.",
    tags: ["npm", "typescript", "node"],
    link: {
      href: "https://www.npmjs.com/package/favicon-extractor",
      label: "NPM →",
    },
  },
  {
    id: "e003",
    track: "learn",
    type: "thought",
    date: "2026-04-05",
    dateLabel: "Apr 5, 2026",
    title: "The ESM/CJS export mess is real",
    body: "Setting up dual exports in package.json sounds simple until you hit the edge cases — require() vs import, .mjs extensions, and bundler quirks. Spent two hours on something that should take ten minutes. Documenting this so future-me doesn't repeat it.",
    tags: ["esm", "node", "dx"],
    link: null,
  },
  {
    id: "e004",
    track: "work",
    type: "working-on",
    date: "2026-03-28",
    dateLabel: "Mar 28, 2026",
    title: "Chrome extension — productivity tool",
    body: "Experimenting with a Manifest V3 Chrome extension using React + Vite. The goal: a lightweight tab manager that surfaces context without getting in the way. Early stage — just getting the background service worker pattern right.",
    tags: ["chrome-extension", "react", "mv3"],
    link: null,
  },
  {
    id: "e005",
    track: "work",
    type: "update",
    date: "2026-03-15",
    dateLabel: "Mar 15, 2026",
    title: "Spy — refactored input capture",
    body: "Rewrote the keyboard and mouse hook logic in Spy to use lower-level Win32 hooks instead of WPF event routing. Much more reliable across different window types, and no longer drops events under high-frequency input.",
    tags: ["csharp", "wpf", "win32"],
    link: { href: "https://github.com/NitishKumar078/Spy", label: "GitHub →" },
  },
  {
    id: "e006",
    track: "learn",
    type: "thought",
    date: "2026-03-08",
    dateLabel: "Mar 8, 2026",
    title: "DSA isn't just interview prep",
    body: "The more I practice DSA the more I see it show up in real code — choosing the right data structure for a cache, recognising a graph problem in a dependency resolver, knowing when O(n log n) actually matters. It's worth doing consistently, not just before interviews.",
    tags: ["dsa", "learning"],
    link: null,
  },
  {
    id: "e007",
    track: "personal",
    type: "personal",
    date: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    title: "Started a daily coding streak",
    body: "Made a commitment to write at least 30 minutes of code every single day. Using GitHub's contribution graph as accountability. It's surprising how much compounds when you're consistent — even small sessions add up to real projects.",
    tags: ["habit", "growth"],
    link: null,
  },
  {
    id: "e008",
    track: "work",
    type: "working-on",
    date: "2026-02-10",
    dateLabel: "Feb 10, 2026",
    title: "MidMesh — real-time sync layer",
    body: "Designing a WebSocket-based sync layer for MidMesh that handles optimistic UI updates and conflict resolution. The challenge is keeping the client state consistent when multiple tabs update the same resource simultaneously.",
    tags: ["websocket", "react", "architecture"],
    link: null,
  },
  {
    id: "e009",
    track: "learn",
    type: "blog",
    date: "2026-01-28",
    dateLabel: "Jan 28, 2026",
    title: "How I structure my Next.js projects",
    body: "After working with several Next.js projects of different scales, I've settled on a folder structure that separates concerns cleanly — lib/ for pure logic, components/ only for UI, and keeping data at the route level. Here's the rationale.",
    tags: ["nextjs", "architecture", "dx"],
    link: null,
  },
  {
    id: "e010",
    track: "personal",
    type: "personal",
    date: "2026-01-15",
    dateLabel: "Jan 15, 2026",
    title: "Set up my dev environment properly",
    body: "Finally took the time to configure Neovim, WSL2, and a proper terminal workflow. Also dotfile-managed everything so I can reproduce the setup on any machine in minutes. Should have done this years ago.",
    tags: ["devtools", "setup", "wsl2"],
    link: null,
  },

  // ── 2025 ───────────────────────────────────────────────────────────────
  {
    id: "e011",
    track: "work",
    type: "update",
    date: "2025-12-18",
    dateLabel: "Dec 18, 2025",
    title: "Invoice-book — PDF export shipped",
    body: "After weeks of wrestling with puppeteer vs jsPDF, landed on a React-to-PDF approach using @react-pdf/renderer. Gives pixel-perfect output and runs entirely client-side, so no server cost.",
    tags: ["react", "pdf", "invoice-book"],
    link: {
      href: "https://github.com/NitishKumar078/Invoice-Book",
      label: "GitHub →",
    },
  },
  {
    id: "e012",
    track: "learn",
    type: "thought",
    date: "2025-12-05",
    dateLabel: "Dec 5, 2025",
    title: "Rethinking error handling in async JS",
    body: "Been using try/catch everywhere but recently started wrapping async functions in a Result<T> pattern. Explicit success/failure makes error paths impossible to miss — and it pairs well with TypeScript's discriminated unions.",
    tags: ["typescript", "patterns", "async"],
    link: null,
  },
  {
    id: "e013",
    track: "personal",
    type: "personal",
    date: "2025-11-22",
    dateLabel: "Nov 22, 2025",
    title: "Contributed to an open-source project",
    body: "Submitted my first non-trivial PR to a popular utility library — a bug fix in the ESM build path. Got merged within 48 hours. Small contribution but a big confidence boost for contributing more.",
    tags: ["open-source", "community"],
    link: null,
  },
  {
    id: "e014",
    track: "work",
    type: "working-on",
    date: "2025-11-10",
    dateLabel: "Nov 10, 2025",
    title: "create-react-chrome-ext — CLI tool",
    body: "Publishing a scaffolding CLI for React-based Chrome extensions. The goal is zero-config Manifest V3 setup with hot reload out of the box. Based on lessons learned building my own extension.",
    tags: ["cli", "npm", "chrome-extension"],
    link: {
      href: "https://www.npmjs.com/package/create-react-chrome-ext",
      label: "NPM →",
    },
  },
  {
    id: "e015",
    track: "learn",
    type: "blog",
    date: "2025-10-30",
    dateLabel: "Oct 30, 2025",
    title: "Understanding React 19's compiler",
    body: "Spent a weekend with the React 19 beta. The compiler's memoization is genuinely impressive — it eliminates the need for useMemo and useCallback in most cases. But there are edge cases around refs and context that need careful attention.",
    tags: ["react19", "compiler", "performance"],
    link: null,
  },
  {
    id: "e016",
    track: "personal",
    type: "personal",
    date: "2025-10-12",
    dateLabel: "Oct 12, 2025",
    title: "Read 'A Philosophy of Software Design'",
    body: "Finished John Ousterhout's book in two sittings. The chapter on 'deep vs shallow modules' reshaped how I think about API design. The thesis: complexity is the enemy, and the best code hides complexity behind clean interfaces.",
    tags: ["books", "software-design"],
    link: null,
  },
  {
    id: "e017",
    track: "work",
    type: "update",
    date: "2025-09-20",
    dateLabel: "Sep 20, 2025",
    title: "MidMesh v2 — dashboard redesign",
    body: "Complete UI overhaul for MidMesh's analytics dashboard. Moved from a table-heavy layout to a card-based system with sparklines. Reduced cognitive load significantly — users can now scan the state of all their connections at a glance.",
    tags: ["design", "react", "midmesh"],
    link: null,
  },
  {
    id: "e018",
    track: "learn",
    type: "thought",
    date: "2025-09-05",
    dateLabel: "Sep 5, 2025",
    title: "Why I prefer vanilla CSS over utility frameworks",
    body: "After two years of Tailwind, I've come back to writing CSS properly. Custom properties + modern selectors like :has() give me everything I need. The main advantage: styles that communicate intent, not just visual output.",
    tags: ["css", "dx", "design-systems"],
    link: null,
  },
  {
    id: "e019",
    track: "personal",
    type: "personal",
    date: "2025-08-18",
    dateLabel: "Aug 18, 2025",
    title: "Mentored a junior dev for 3 months",
    body: "Wrapped up a informal mentorship with a college student learning web dev. We did weekly code reviews and pair programming sessions. Teaching is the best way to solidify your own knowledge — I learned as much as they did.",
    tags: ["mentoring", "community", "growth"],
    link: null,
  },
  {
    id: "e020",
    track: "work",
    type: "working-on",
    date: "2025-07-30",
    dateLabel: "Jul 30, 2025",
    title: "Spy — cross-platform port to .NET MAUI",
    body: "Started porting the Windows-only Spy monitoring app to .NET MAUI so it can run on macOS. The platform abstraction layer is cleaner than expected, but platform-specific keyboard hooks are still OS-level implementations.",
    tags: ["dotnet", "maui", "cross-platform"],
    link: null,
  },
];

export const ALL_FILTERS = [
  { label: "All", value: "all" as const },
  { label: "Work", value: "work" as const },
  { label: "Personal", value: "personal" as const },
  { label: "Learn", value: "learn" as const },
];
