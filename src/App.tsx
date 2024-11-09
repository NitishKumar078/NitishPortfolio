import { useRef, useState, useEffect } from "react";
import { Projects } from "./components/Sections/Projects";
import { Greeting } from "./components/Sections/Greeting";
import { Navigation } from "./components/Navigation/Navigation";
import { TracingBeamDemo } from "./components/tracing";
import { DotPattern } from "./components/ui/dot-pattern";
import HyperText from "./components/ui/hyper-text";
import Button from "./components/ui/Button";
import { AnimatedBlog } from "./components/AnimatedBlog";
import mansitting from "@/assets/Problem addicent oops.png";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/loadinganimation/Loading";

export function App() {
  // Step 1: Set up refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }} // Moves down on exit
            transition={{ duration: 1 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <div className="grid-flow-col">
            {/* background design */}
            <DotPattern className="fixed -z-10 h-screen w-screen" />

            {/* <div className=""> */}
            <Navigation
              aboutRef={aboutRef}
              projectsRef={projectsRef}
              skillsRef={skillsRef}
            />
            {/* </div> */}

            <div className="flex flex-row items-center justify-between p-2">
              <Greeting />
              <img src={mansitting} className="hidden w-1/3 sm:inline-block" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="p-4 font-Rubik_Marker_Hatch text-4xl">
                {" "}
                Feel free to skip and connect with me. &#128516;
              </span>
              <Button />
            </div>

            {/* {This is the section of ABOUT} */}
            <div ref={aboutRef} className="m-5 items-center justify-center">
              <HyperText
                text="ABOUT ME"
                className="border-slate-300 text-center font-Permanent_Marker text-4xl"
                duration={50}
                animateOnLoad={false}
              />

              <TracingBeamDemo />
            </div>

            {/* {This is the section of PROJECT} */}
            <div
              ref={projectsRef}
              className="grid grid-flow-row justify-center"
            >
              <HyperText
                text="PROJECT's"
                className="border-slate-300 text-center font-Permanent_Marker text-4xl"
                duration={50}
                animateOnLoad={false}
              />

              <div className="grid grid-flow-row gap-4 sm:grid-flow-col">
                <Projects
                  heading="Project_1"
                  sub_heading="sub_Project_1"
                  title="Project_1"
                  href="https://github.com/NitishKumar078"
                />
                <Projects
                  heading="Project_2"
                  sub_heading="sub_Project_2"
                  title="Project_2"
                  href="https://github.com/NitishKumar078"
                />
                <Projects
                  heading="Project_3"
                  sub_heading="sub_Project_3"
                  title="Project_3"
                  href="https://github.com/NitishKumar078"
                />
              </div>
            </div>
            {/* {This is the section of SKILL} */}
            <div
              ref={skillsRef}
              className="grid-flow-clo m-10 grid justify-center gap-4"
            >
              <HyperText
                text="SKILL's"
                className="border-slate-300 text-center font-Permanent_Marker text-4xl"
                duration={50}
                animateOnLoad={false}
              />
              <AnimatedBlog />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
