export const profile = {
  name: "Nitish Kumar M",
  email: "nitishkumar078@gmail.com",
  location: "Bengaluru, India",
  github: "https://github.com/NitishKumar078",
  linkedin: "https://www.linkedin.com/in/nitish-kumar-m",
  npm: "https://www.npmjs.com/~nitish_kumar_m",
  demos: "https://www.demos.nishkumar.dev",
  extensions: "https://www.extensions.nishkumar.dev",
  resume: "/Nitish_Kumar_Frontend.pdf",
};

export type ProjectCategory = "Websites" | "Browser tools" | "Applications";
export type Project = {
  name: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  href: string;
  action: string;
  visual: "demos" | "extensions" | "mindmesh" | "invoice" | "spy";
  image?: string;
  imageAlt?: string;
  note: string;
};

export const projects: Project[] = [
  {
    name: "Demo Lab",
    category: "Websites",
    description:
      "Nine industries. Nine distinct design directions. A collection of complete, responsive websites, from a dance studio to an AI product.",
    tags: ["Art direction", "React", "Responsive UI"],
    href: profile.demos,
    action: "Explore the demos",
    visual: "demos",
    image: "/work/northline.webp",
    imageAlt:
      "Northline Dance Studio demo, with bold lime typography and full-width dance photography",
    note: "Independent design concepts",
  },
  {
    name: "Nish / Extensions",
    category: "Browser tools",
    description:
      "A home for the small tools I build for everyday browsing. Explore Text Extractor and Pure Anime, with honest release updates and product walkthroughs.",
    tags: ["Chrome & Edge", "Product design", "Next.js"],
    href: profile.extensions,
    action: "Explore the extensions",
    visual: "extensions",
    image: "/work/extensions.webp",
    imageAlt:
      "Nish Extensions showcase with the Text Extractor product overview and its in-review status",
    note: "Text Extractor in review · Pure Anime coming soon",
  },
  {
    name: "MindMesh",
    category: "Applications",
    description:
      "One chat workspace for OpenAI, Gemini, and Perplexity. Bring your own API key and switch between models without switching applications.",
    tags: ["React", "TypeScript", "AI integration"],
    href: `${profile.github}/MindMesh`,
    action: "View on GitHub",
    visual: "mindmesh",
    note: "Multi-model AI workspace",
  },
  {
    name: "Invoice-Book",
    category: "Applications",
    description:
      "An invoicing application built around clear billing information, straightforward invoice creation, and an interface that stays out of the way.",
    tags: ["React", "TypeScript", "Web application"],
    href: `${profile.github}/Invoice-Book`,
    action: "View on GitHub",
    visual: "invoice",
    note: "Everyday business tooling",
  },
  {
    name: "Spy",
    category: "Applications",
    description:
      "A Windows desktop utility for live window capture and input monitoring. Built with C#, WPF, and native Win32 APIs, without external dependencies.",
    tags: ["C#", "WPF", "Win32"],
    href: `${profile.github}/Spy`,
    action: "View on GitHub",
    visual: "spy",
    note: "Native Windows development",
  },
];

export const packages = [
  {
    name: "favicon-extractor",
    description:
      "Get a website’s favicon from Node.js. TypeScript typings, ESM and CommonJS exports, and a focused API for your next app or extension.",
    command: "npm install favicon-extractor",
    href: "https://www.npmjs.com/package/favicon-extractor",
    tags: ["Node.js", "TypeScript", "ESM + CJS"],
  },
  {
    name: "create-react-chrome-ext",
    description:
      "A starting point for building Chrome extensions with React. Spend less time wiring up configuration and more time making your idea work.",
    command: "npx create-react-chrome-ext",
    href: "https://www.npmjs.com/package/create-react-chrome-ext",
    tags: ["React", "Chrome extensions", "Developer tooling"],
  },
];

export const capabilities = [
  {
    title: "Websites with a point of view",
    detail:
      "For businesses, creators, and people building something of their own. I bring the visual direction and frontend implementation together, with responsive layouts, accessible interactions, and clear paths to action.",
    tools: ["React", "Next.js", "TypeScript", "HTML & CSS"],
    deliverables:
      "Business websites, landing pages, portfolio sites, and interactive interfaces.",
  },
  {
    title: "Small tools that solve real problems",
    detail:
      "From a browser extension that removes a repetitive step to an npm package other developers can build on. I care about focused features, clear permissions, and a useful first experience.",
    tools: ["Chrome extensions", "Node.js", "npm", "JavaScript"],
    deliverables: "Browser tools, reusable packages, and workflow utilities.",
  },
  {
    title: "The engineering behind the interface",
    detail:
      "My work also reaches beyond the browser. I build with .NET, C#, and native Windows APIs, connecting frontend interactions to the systems that make them useful.",
    tools: [".NET", "C#", "WPF", "Python"],
    deliverables:
      "Application interfaces, backend integrations, and desktop tooling.",
  },
];
