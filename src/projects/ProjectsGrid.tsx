import { ProjectCard } from "./ProjectCard";
import invoice from "../assets/invoice.png";

const projects = [
  {
    title: "Invoice-Book",
    description:
      "A responsive web application built with React and Tailwind CSS featuring smooth Exprience and a user-friendly interface to generate and manage invoices.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Tauri", "Rust"],
    imageUrl: invoice,
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/NitishKumar078/Invoice-Book",
  },
  {
    title: "Path_finder",
    description:
      "Implemented and demonstrated the functionality of five distinct path-finding algorithms, including BFS, DFS, Dijkstra's, A*, and Greedy algorithms.",
    technologies: ["js", "TypeScript", "Prisma", "tRPC"],
    imageUrl: "/project-2.jpg",
    liveUrl: "https://nitishkumar078.github.io/Path_finder/",
    githubUrl: "https://github.com/NitishKumar078/Path_finder",
  },
  {
    title: "YTTabMaster",
    description:
      "Seamlessly manage your YouTube experience. This extension automatically pauses and plays videos when you switch tabs, Additionally, enjoy the convenience of running YouTube directly in side regless in which page you are.",
    technologies: ["React", "Chrome Extension", "Chrome api"],
    imageUrl: "/project-3.jpg",
    githubUrl: "https://github.com/NitishKumar078/YTTabMaster",
  },
  ,
  {
    title: "Text-Extractor",
    description:
      "This is a web_Extensions which help to scrape the text for the selected html element in the browser.",
    technologies: ["React", "Chrome Extension", "Chrome api"],
    imageUrl: "/project-3.jpg",
    githubUrl: "https://github.com/NitishKumar078/Text-Extractor",
  },
  ,
  {
    title: "Audio-Processing",
    description:
      "Audio Extraction from given video and processing it to transcript(speech to text)",
    technologies: ["python", "thinter"],
    imageUrl: "/project-3.jpg",
    githubUrl: "https://github.com/NitishKumar078/Audio-Processing",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
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
