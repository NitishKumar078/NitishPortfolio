import { useRef, useState, useEffect, Suspense, lazy } from "react";
import Greeting from "./components/greeting/Greeting";
import { Navigation } from "./components/Navigation/Navigation";
import { TracingBeamDemo } from "./components/About/tracing";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/loadinganimation/Loading";
import { ContactSection } from "./components/Contact/ContactSection";
import { useTheme } from "@/hooks/useTheme";

// Lazy loaded components
const Projects = lazy(() => import("@/projects/Projects"));
const AboutSection = lazy(() => import("./components/About/AboutSection"));
// const SkillsSection = lazy(() => import("./components/Skills/Skills"));

const App = () => {
  useTheme();
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navRefs = {
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef,
  };

  const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="relative bg-background text-foreground">
      {/* Background Wrapper */}
      <div className="fixed inset-0 min-h-screen w-full">
        {/* Light Theme Background */}
        <div
          className="absolute inset-0 z-0 dark:hidden"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #b95ddd6e 100%)",
          }}
        />

        {/* Dark Theme Background */}
        <div
          className="absolute inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage:
              "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)",
            backgroundColor: "#020617",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            {...pageTransition}
            className="relative mx-auto max-w-7xl px-4"
          >
            <Navigation navRefs={navRefs} />
            <main className="pt-20">
              <section className="flex min-h-[80vh] items-center justify-center">
                <Greeting projectsRef={projectsRef} contactRef={contactRef} />
              </section>

              <Suspense fallback={<div>Loading About Section...</div>}>
                <section ref={aboutRef}>
                  <AboutSection />
                  <div className="mt-12">
                    <TracingBeamDemo />
                  </div>
                </section>
              </Suspense>

              <Suspense fallback={<div>Loading Projects...</div>}>
                <section ref={projectsRef} className="py-16">
                  <Projects />
                </section>
              </Suspense>

              {/* <Suspense fallback={<div>Loading Tools/Framework...</div>}>
                <section ref={skillsRef} className="py-5">
                  <SkillsSection />
                </section>
              </Suspense> */}

              <section ref={contactRef} className="py-5">
                <ContactSection />
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
