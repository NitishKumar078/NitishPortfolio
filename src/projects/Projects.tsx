import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  return (
    <div>
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-transparent">
          Few Project's
        </span>
      </h2>
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
