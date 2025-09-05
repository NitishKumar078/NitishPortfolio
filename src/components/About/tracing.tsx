import { TracingBeam } from "./tracing-beam";
import GradualSpacing from "../ui/gradual-spacing";
import BlurIn from "../ui/blur-in";
import { BoxReveal } from "../ui/box-reveal";
import Reading from "@/assets/learning-animate.svg";
import Work from "@/assets/working-animate.svg";

// .
const dummyContent = [
  {
    title: "Work Experience",
    badge: "Work",
    description:
      "Inventys Technologies PVT LTD is focused on building cutting-edge Robotic Process Automation (RPA) products that help organizations automate repetitive business processes. As a contributor, I help develop solutions that streamline workflows and boost productivity through innovative automation technologies",
    image: Work,
    className: "sm:flex-row-reverse pt-5 flex-col-reverse",
    section: [
      {
        place: "Inventys Technologies PVT LTD",
        title: "Software Developer",
        location: "Karnataka, India",
        date: "2023 - Present",
        description:
          "Major contributor in developing and enhancing core features for RPA products, focusing on automation and user workflow optimization.",
        technologies: ["React", "Chrome Extension", "Python", ".Net", "C#"],
        achievements: [
          "Designed and implemented subcomponents in React for introspection within major application modules, improving maintainability and extensibility.",
          "Learned and utilized C# to monitor and automate user actions at the Windows OS level, gaining deep understanding of system internals.",
          "Developed and extended Chrome extensions to capture user activity, including visited pages and interactions, enabling advanced automation and analytics.",
          "Actively fixed bugs, added new features, and played a key role in project architecture and delivery.",
          "Recognized for taking initiative and leading efforts in building and shipping critical features for the RPA platform.",
        ],
      },
    ],
  },
  {
    title: "Education",
    badge: "Education",
    description:
      "Strong academic foundation combined with practical experience in software development and computer science.",
    image: Reading,
    className: "sm:flex-row flex-col-reverse",
    section: [
      {
        place: "KLE Society Degree College",
        score: "8.1 CGPA",
        title: "Bachelor of Computer Applications",
        location: "Karnataka, India",
        date: "2019 - 2022",
        description: "Specialized in modern software development with focus on",
        technologies: [
          "Data Structures",
          "Operating Systems",
          "Web Development",
          "Database Management",
          "Software Engineering",
        ],
        achievements: ["paticipating in hackathons", "Led College Tech Club"],
      },
    ],
  },
];

export function TracingBeamDemo() {
  return (
    <div className="relative mx-auto mt-8 max-w-6xl rounded-xl bg-transparent p-4 tracking-wide text-zinc-900/80 shadow-2xl dark:bg-transparent dark:text-zinc-100 md:p-8">
      <TracingBeam>
        <div className="mx-auto max-w-4xl">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-16">
              <h2 className="mb-8 rounded-lg bg-gray-800 px-4 py-2 text-center dark:bg-zinc-700/80 dark:text-zinc-100">
                <GradualSpacing
                  className="text-2xl font-light text-zinc-100 md:text-3xl"
                  text={item.badge}
                />
              </h2>

              <div className="prose prose-sm dark:prose-invert mb-8">
                <BlurIn
                  word={item.description}
                  className="text-base font-medium text-zinc-800 dark:text-zinc-100 md:text-lg"
                  variant={{
                    hidden: { filter: "blur(10px)", opacity: 0 },
                    visible: { filter: "blur(0px)", opacity: 1 },
                  }}
                  duration={2}
                />
              </div>

              {item.image && item.section && item.className && (
                <div
                  className={`${item.className} flex flex-col gap-8 md:flex-row md:items-start md:gap-12`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg border-2 border-zinc-700 bg-gray-100 object-cover shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-200"
                    />
                  </div>

                  <div className="w-full space-y-6 md:w-1/2">
                    {item.section.map((sectionItem, idx) => (
                      <div key={idx} className="space-y-4">
                        <BoxReveal boxColor="#433878">
                          <div className="space-y-1">
                            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 md:text-2xl">
                              {sectionItem.title}
                            </h3>
                            <p className="text-sm text-zinc-700 dark:text-zinc-200">
                              {sectionItem.date}
                            </p>
                          </div>
                        </BoxReveal>

                        <BoxReveal boxColor="#433878">
                          <div className="space-y-2">
                            <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
                              {sectionItem.place}
                            </p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-200">
                              {sectionItem.location}
                            </p>
                          </div>
                        </BoxReveal>

                        <BoxReveal boxColor="#433878">
                          <div className="space-y-4">
                            <p className="text-zinc-800 dark:text-zinc-100">
                              {sectionItem.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {sectionItem.technologies.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="rounded-full bg-purple-600/10 px-3 py-1 text-sm text-purple-800 dark:text-purple-100"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-zinc-800 dark:text-zinc-100">
                              {sectionItem.achievements.map(
                                (achievement, achIdx) => (
                                  <li
                                    key={achIdx}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-purple-600 dark:text-purple-400">
                                      →
                                    </span>
                                    {achievement}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </BoxReveal>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

export default TracingBeamDemo;
