import { cn } from "@/utils/cn";
import Marquee from "./marquee";
import MonitorScreen from "./MonitorScreen";
import { useState } from "react";

const skills = [
  {
    name: "React",
    img: "https://skillicons.dev/icons?i=react",
    projects: [
      "Modern Portfolio Website",
      "E-commerce Dashboard",
      "Real-time Chat Application",
      "Task Management System",
    ],
  },
  {
    name: "TypeScript",
    img: "https://skillicons.dev/icons?i=ts",
    projects: [
      "Type-safe API Client",
      "Component Library",
      "State Management System",
      "Data Visualization Tool",
    ],
  },
  {
    name: "Node.js",
    img: "https://skillicons.dev/icons?i=nodejs",
    projects: [
      "RESTful API Server",
      "Authentication Service",
      "WebSocket Server",
      "File Processing System",
    ],
  },
  {
    name: "Tailwind",
    img: "https://skillicons.dev/icons?i=tailwind",
    projects: [
      "Responsive UI Components",
      "Design System",
      "Landing Pages",
      "Admin Dashboard",
    ],
  },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  projects: string[];
  setHoverCard: (
    skill: { img: string; name: string; projects: string[] } | null,
  ) => void;
}

const SkillCard = ({ img, name, projects, setHoverCard }: ReviewCardProps) => {
  return (
    <div
      className={cn(
        "relative h-32 w-32 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      onMouseEnter={() => setHoverCard({ img, name, projects })}
      onMouseLeave={() => setHoverCard(null)}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="size-8 rounded-lg object-contain"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium dark:text-white">{name}</span>
        </div>
      </div>
    </div>
  );
};

export function Skills() {
  const [hoverCard, setHoverCard] = useState<{
    img: string;
    name: string;
    projects: string[];
  } | null>(null);

  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-transparent">
          Project's
        </span>
      </h2>
      <div className="relative flex h-[500px] w-[85vw] flex-row items-center justify-between gap-6 overflow-hidden rounded-lg border-black bg-background dark:border sm:w-[60vw] md:shadow-xl">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
              setHoverCard={setHoverCard}
            />
          ))}
        </Marquee>

        <MonitorScreen hoverCard={hoverCard} />

        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((skill) => (
            <SkillCard
              key={skill.name}
              {...skill}
              setHoverCard={setHoverCard}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[17%] bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[17%] bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
}
