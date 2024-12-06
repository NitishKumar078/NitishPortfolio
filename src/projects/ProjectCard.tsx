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
      className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-zinc-800/50"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mt-4 space-y-2">
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

        <div className="mt-4 flex gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Live Demo
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>

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
