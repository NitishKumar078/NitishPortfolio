import { ProjectCard } from "./ProjectCard";
import invoice from "../assets/invoice.png";
import spy from "../assets/spy.png";
import TextExt from "../assets/TextExt.png";
import AudioProcessing from "../assets/AudioProcessing.png";
import pathfinder from "../assets/pathfinder.png";

const projects = [
  {
    key: "Invoice",
    title: "Invoice-Book",
    description:
      "A responsive web application built with React and Tailwind CSS featuring smooth Exprience and a user-friendly interface to generate and manage invoices.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Tauri", "Rust"],
    imageUrl: invoice,
    githubUrl: "https://github.com/NitishKumar078/Invoice-Book",
  },
  {
    key: "Spy",
    title: "Spy",
    description:
      "Capture real-time images and monitor keyboard and mouse actions for specific windows on a PC.",
    technologies: [".Net", "C#", "UIAutomation", "WPF"],
    imageUrl: spy,
    githubUrl: "https://github.com/NitishKumar078/Spy",
  },
  {
    key: "path_finder",
    title: "Path_finder",
    description:
      "Implemented and demonstrated the functionality of five distinct path-finding algorithms, including BFS, DFS, Dijkstra's, A*, and Greedy algorithms.",
    technologies: ["js", "TypeScript", "Prisma", "tRPC"],
    imageUrl: pathfinder,
    liveUrl: "https://nitishkumar078.github.io/Path_finder/",
    githubUrl: "https://github.com/NitishKumar078/Path_finder",
  },
  {
    key: "text_extractor",
    title: "Text-Extractor",
    description:
      "This is a web_Extensions which help to scrape the text for the selected html element in the browser.",
    technologies: ["React", "Chrome Extension", "Chrome api"],
    imageUrl: TextExt,
    githubUrl: "https://github.com/NitishKumar078/Text-Extractor",
  },
  {
    key: "audio_processing",
    title: "Audio-Processing",
    description:
      "Audio Extraction from given video and processing it to transcript(speech to text)",
    technologies: ["python", "thinter"],
    imageUrl: AudioProcessing,
    githubUrl: "https://github.com/NitishKumar078/Audio-Processing",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.key}
          title={project?.title || "Project Title"}
          description={project?.description || "Project Description"}
          technologies={project?.technologies || []}
          imageUrl={project?.imageUrl || "project image url"}
          liveUrl={project?.liveUrl || "/"}
          githubUrl={
            project?.githubUrl || "https://github.com/yourusername/project"
          }
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
