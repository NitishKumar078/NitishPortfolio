import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <div>
      <h2 className="mb-12 text-center text-3xl font-semibold sm:text-4xl">
        <span className="bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
          Featured Projects
        </span>
      </h2>
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
