import { motion } from "framer-motion";

export const TriangleBackground = () => {
  return (
    <>
      {/* Dark Theme Triangle Background */}
      <motion.div
        className="absolute h-0 w-0 border-b-[400px] border-l-[200px] border-r-[200px] border-b-[#9234eb] border-l-transparent border-r-transparent"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-0 w-0 border-b-[390px] border-l-[190px] border-r-[190px] border-white border-l-transparent border-r-transparent dark:border-[#19191c] dark:border-l-transparent dark:border-r-transparent"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </>
  );
};
