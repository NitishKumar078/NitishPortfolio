import { motion } from "framer-motion";
import { SkillMonitor } from "./SkillMonitor";

interface MonitorScreenProps {
  hoverCard: { img: string; name: string; projects: string[] } | null;
}

const MonitorScreen = ({ hoverCard }: MonitorScreenProps) => {
  return (
    <div className="hidden grid-rows-3 justify-center gap-0 align-middle sm:block">
      <div className="z-10 mx-auto h-[300px] w-[450px] overflow-hidden rounded-lg bg-[#333] shadow-lg">
        <div className="flex h-full w-full bg-[#111] p-2">
          <SkillMonitor selectedSkill={hoverCard} />
        </div>
      </div>

      <motion.div className="mx-auto h-7 w-[20px] bg-[#333]"></motion.div>
      <div className="mx-auto h-3 w-52 rounded-md bg-[#333]"></div>
    </div>
  );
};

export default MonitorScreen;
