import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillMonitorProps {
  selectedSkill: {
    name: string;
    projects: string[];
  } | null;
}

export const SkillMonitor = ({ selectedSkill }: SkillMonitorProps) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!selectedSkill) return;

    setIsTyping(true);
    setDisplayText([]);

    const lines = [
      `> Selected: ${selectedSkill.name}`,
      "> Projects:",
      ...selectedSkill.projects.map((project) => `  • ${project}`),
      "> Experience Level: Advanced",
      "> Status: Active"
    ];

    let currentLine = 0;
    let currentChar = 0;

    const typeInterval = setInterval(() => {
      if (currentLine >= lines.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
        return;
      }

      if (currentChar === 0) {
        setDisplayText((prev) => [...prev, ""]);
      }

      const currentText = lines[currentLine];
      if (currentChar < currentText.length) {
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[currentLine] = currentText.slice(0, currentChar + 1);
          return newText;
        });
        currentChar++;
      } else {
        currentLine++;
        currentChar = 0;
      }
    }, 25);

    return () => clearInterval(typeInterval);
  }, [selectedSkill]);

  return (
    <motion.div
      className="relative m-3 aspect-video w-[80%] max-w-3xl overflow-hidden rounded-lg border-4 border-gray-700 bg-black p-4 font-mono text-[#2ecc71] shadow-2xl sm:w-[95%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="absolute left-0 right-0 top-0 flex h-8 items-center gap-2 border-b border-gray-700 bg-gray-900 px-4">
        <div className="size-3 rounded-full bg-red-500"></div>
        <div className="size-3 rounded-full bg-yellow-500"></div>
        <div className="size-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-sm text-gray-400">Skill Details</span>
      </div>

      <div className="mt-8 space-y-1">
        <AnimatePresence mode="wait">
          {displayText.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex"
            >
              <span>{line}</span>
              {index === displayText.length - 1 && isTyping && (
                <span className="ml-1 animate-pulse">▊</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};