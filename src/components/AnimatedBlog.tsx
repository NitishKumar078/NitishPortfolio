import { useRef, useState, useEffect, FC, CSSProperties } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Skill from "./ui/Skillicon.tsx";

export const AnimatedBlog: FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [showText, setShowText] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false);

  useEffect(() => {
    if (isInView && !hasExpanded) {
      // Start the bouncing animation
      controls.start("bounce");

      // After 2 seconds, stop bouncing and switch to rectangle transition
      setTimeout(() => {
        controls.stop(); // Stop bouncing
        setHasExpanded(true); // Set flag to true after expanding
        controls.start("expandToRectangle").then(() => {
          // Show text after rectangle expansion completes
          setShowText(true);
          // Smoothly scroll to make the expanded rectangle fully visible
          ref.current?.scrollIntoView({ behavior: "smooth", block: "center" , inline: "center" });
        });
      }, 2000);
    }
  }, [isInView]);

  const ballStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "5rem",
    height: "5rem",
    backgroundColor: "white",
    borderRadius: "50%",
    borderWidth: "2px",
    borderStyle: "solid",
    boxShadow: "0px 0px 10px rgba(0,0,1,0.5)",
  };

  return (
    <motion.div ref={ref} >
      <motion.div
        style={ballStyle}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 1 },
          bounce: {
            y: ["0rem", "3rem", "0rem"],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            },
          },
          expandToRectangle: {
            y: "0rem",
            width: "90vw",
            height: "40rem",
            borderRadius: "0.5rem",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Render text only when expandToRectangle animation is active */}
        {showText && (
          <div >
            <Skill/>
          </div>
          
        )}
      </motion.div>
    </motion.div>
  );
};
