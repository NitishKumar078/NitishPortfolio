import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Array<string>;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg bg-transparent shadow-lg transition-all hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mt-4 space-y-2 px-2 pb-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index: number) => (
            <span
              key={index}
              className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="group mt-4 flex gap-4">
          {liveUrl !== "/" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Live Demo
              <svg
                className="h-8 w-8 rotate-90 justify-end rounded-full border border-gray-700 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-45 group-hover:border-none group-hover:bg-gray-50"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            View Code
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
