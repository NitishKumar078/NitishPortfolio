import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark mode support.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/project-1.jpg",
    liveUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Full-featured admin dashboard for managing products, orders, and customers with real-time analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    imageUrl: "/project-2.jpg",
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/yourusername/dashboard",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses and natural language processing.",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI"],
    imageUrl: "/project-3.jpg",
    liveUrl: "https://ai-chat.com",
    githubUrl: "https://github.com/yourusername/ai-chat",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
