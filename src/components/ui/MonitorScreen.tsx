import { motion } from "framer-motion";

const MonitorScreen = () => {
  return (
    <div className="grid-row-3 hidden justify-center gap-0 align-middle sm:block">
      <div className="z-10 mx-auto h-[250px] w-[400px] overflow-hidden rounded-lg bg-[#333] shadow-lg">
        <motion.div
          className="flex h-full w-full items-center justify-center bg-[#111] font-sans text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Content inside the "monitor" */}
          <motion.h2
            initial={{ x: -80 }}
            animate={{ x: 80 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-xl font-bold"
          >
            Welcome to My Portfolio!
          </motion.h2>
        </motion.div>
      </div>

      <motion.div className="mx-auto h-7 w-[20px] bg-[#333]"></motion.div>

      <div className="mx-auto h-3 w-52 rounded-md bg-[#333]"></div>
    </div>
  );
};

export default MonitorScreen;
