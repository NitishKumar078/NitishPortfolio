import { useRef, useState, useEffect } from "react";
import Greeting from "./components/greeting/Greeting";
import { Navigation } from "./components/Navigation/Navigation";
import { TracingBeamDemo } from "./components/tracing";
import HyperText from "./components/ui/hyper-text";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/loadinganimation/Loading";
import Projects from "@/projects/Projects";
import AboutSection from "./components/About/AboutSection";
import { ContactSection } from "./components/Contact/ContactSection";
import { useTheme } from "@/hooks/useTheme";

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

  return (
    <div className="dark:text-white">
      <div className="fixed inset-0 -z-10 bg-dotted-pattern-light bg-15 dark:bg-dotted-pattern" />

      <AnimatePresence>
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
          <>
            <Navigation navRefs={navRefs} />
            <div className="relative mx-auto max-w-7xl px-4">
              <main>
                <section className="flex min-h-[80vh] items-center justify-center">
                  <Greeting />
                </section>

                <section ref={aboutRef} className="py-16">
                  <AboutSection />
                  <div className="mt-12">
                    <TracingBeamDemo />
                  </div>
                </section>

                <section ref={projectsRef}>
                  <Projects />
                </section>

                <section ref={skillsRef} className="py-16">
                  <Skills />
                </section>

                <section ref={contactRef} className="py-16">
                  <div className="mt-12">
                    <ContactSection />
                  </div>
                </section>
              </main>
              <Footer />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
