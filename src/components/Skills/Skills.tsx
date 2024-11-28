import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";
import MonitorScreen from "./MonitorScreen";
import { useState } from "react";

// const skills = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
// ];
const skills = [
  {
    name: "C",
    img: "https://avatar.vercel.sh/john",
    projects: ["System Utilities", "Data Structures Implementation"],
  },
  {
    name: "C++",
    img: "https://avatar.vercel.sh/john",
    projects: ["Game Engine", "Algorithm Visualizer"],
  },
  {
    name: "Python",
    img: "https://avatar.vercel.sh/john",
    projects: ["ML Models", "Web Scraping Tools"],
  },
  {
    name: "Java",
    img: "https://avatar.vercel.sh/john",
    projects: ["Android Apps", "Enterprise Software"],
  },
  {
    name: "HTML",
    img: "https://avatar.vercel.sh/john",
    projects: ["Portfolio Website", "Landing Pages"],
  },
  {
    name: "JavaScript",
    img: "https://avatar.vercel.sh/john",
    projects: ["Interactive Web Apps", "Browser Extensions"],
  },
  {
    name: "CSS",
    img: "https://avatar.vercel.sh/john",
    projects: ["UI Components", "Responsive Layouts"],
  },
  {
    name: "TypeScript",
    img: "https://avatar.vercel.sh/john",
    projects: ["React Applications", "Node.js APIs"],
  },
  {
    name: "MongoDB",
    img: "https://avatar.vercel.sh/john",
    projects: ["NoSQL Database", "Data Analytics"],
  },
  {
    name: "MySQL",
    img: "https://avatar.vercel.sh/john",
    projects: ["E-commerce Backend", "CMS Systems"],
  },
  {
    name: "Apache",
    img: "https://avatar.vercel.sh/john",
    projects: ["Web Servers", "Load Balancers"],
  },
  {
    name: "Node.js",
    img: "https://avatar.vercel.sh/john",
    projects: ["REST APIs", "Real-time Applications"],
  },
  {
    name: "React",
    img: "https://avatar.vercel.sh/john",
    projects: ["Single Page Apps", "Component Libraries"],
  },
  {
    name: "Electron",
    img: "https://avatar.vercel.sh/john",
    projects: ["Desktop Applications", "Cross-platform Tools"],
  },
  {
    name: "Tauri",
    img: "https://avatar.vercel.sh/john",
    projects: ["System Utilities", "Developer Tools"],
  },
  {
    name: ".NET",
    img: "https://avatar.vercel.sh/john",
    projects: ["Enterprise Solutions", "Windows Applications"],
  },
  {
    name: "Rust",
    img: "https://avatar.vercel.sh/john",
    projects: ["CLI Tools", "System Programming"],
  },
  {
    name: "Nodemon",
    img: "https://avatar.vercel.sh/john",
    projects: ["Development Tools", "Auto-reload Servers"],
  },
  {
    name: "Jira",
    img: "https://avatar.vercel.sh/john",
    projects: ["Project Management", "Agile Workflows"],
  },
  {
    name: "SQLite",
    img: "https://avatar.vercel.sh/john",
    projects: ["Local Databases", "Mobile Apps"],
  },
  {
    name: "GitHub",
    img: "https://avatar.vercel.sh/john",
    projects: ["Version Control", "CI/CD Pipelines"],
  },
  {
    name: "Vercel",
    img: "https://avatar.vercel.sh/john",
    projects: ["Web Deployment", "Serverless Functions"],
  },
  {
    name: "Canva",
    img: "https://avatar.vercel.sh/john",
    projects: ["Design Assets", "Marketing Materials"],
  },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  projects: string[];
  setHoverCard: (
    skill: { img: string; name: string; projects: string[] } | null
  ) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  img,
  name,
  projects,
  setHoverCard,
}) => {
  return (
    <figure
      className={cn(
        "relative h-24 w-32 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      onMouseEnter={() => setHoverCard({ img, name, projects })}
      onMouseLeave={() => setHoverCard(null)}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default ReviewCard;
// const firstRow = skills.slice(0, skills.length / 2);
// const secondRow = skills.slice(skills.length / 2);

export function Skills() {
  const [hoverCard, setHoverCard] = useState<{
    img: string;
    name: string;
    projects: string[];
  } | null>(null);

  return (
    <div className="bg-background relative flex h-[400px] w-[80vw] gap-6 flex-row items-center justify-between overflow-hidden rounded-lg border sm:w-[60vw] md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((skill) => (
          <ReviewCard key={skill.name} {...skill} setHoverCard={setHoverCard} />
        ))}
      </Marquee>
      <MonitorScreen hoverCard={hoverCard} />
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((skill) => (
          <ReviewCard key={skill.name} {...skill} setHoverCard={setHoverCard} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
    </div>
  );
}
