import React from "react";

const skills = [
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description: "Expert in building interactive user interfaces and SPAs.",
  },
  {
    name: "Node.js",
    image: "https://via.placeholder.com/80",
    description: "Proficient in backend development and API creation.",
  },
  {
    name: "TypeScdript",
    image: "https://via.placeholder.com/80",
    description: "Experienced in writing scalable and type-safe code.",
  },
  {
    name: "TypeScript",
    image: "https://via.placeholder.com/80",
    description: "Experienced in writing scalable and type-safe code.",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 text-center text-dark">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group transform rounded-lg bg-gray-200 p-6 text-center transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-[0px_4px_15px_4px_rgba(106,17,203,0.8)] dark:bg-[#1e1e1e]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mx-auto mb-4 h-20 w-20"
              />
              <h3 className="mb-2 text-lg font-semibold text-dark dark:text-zinc-200">
                {skill.name}
              </h3>
              <p className="text-black-600 text-m opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-zinc-200">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
