import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export const Greeting = () => {
  const words = ["Design", "Build", "Create"];
  
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="rounded-xl bg-gradient-to-r from-purple-500/10 via-transparent to-transparent p-6 backdrop-blur-sm dark:from-purple-500/20">
          <h1 className="flex flex-col space-y-2 font-Righteous">
            <span className="text-lg text-purple-600 dark:text-purple-400">
              Welcome, it's a beautiful
            </span>
            <span className="flex flex-wrap items-baseline gap-3 text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-100 dark:to-neutral-400">
                Good
              </span>
              <span className="font-Rubik_Marker_Hatch text-[#ffcc33]">
                {getGreeting()}!
              </span>
            </span>
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-300">
            I'm a passionate developer who loves to
          </p>
          
          <div className="flex items-center gap-3 text-2xl font-bold md:text-3xl">
            <FlipWords 
              words={words} 
              className="min-w-[120px] dark:bg-white/80 bg-black/80 text-white" 
            />
            <span className="text-neutral-600 dark:text-neutral-300 ">
              amazing web experiences
            </span>
          </div>

          <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
            Specializing in modern web technologies and creating responsive, 
            user-friendly applications that make a difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-lg bg-purple-600 px-4 py-2 text-white transition-transform hover:translate-y-[-2px]"
          >
            <span className="relative z-10">Get in touch</span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#projects"
            className="group rounded-lg border border-neutral-200 px-4 py-2 text-neutral-600 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
          >
            View my work
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};