import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-zinc-800 py-6 dark:border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <a
              href="https://github.com/yourusername"
              className="transition hover:text-teal-500 dark:hover:text-teal-400"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="transition hover:text-teal-500 dark:hover:text-teal-400"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};