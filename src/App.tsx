import { useRef, useState, useEffect } from "react";
import { Greeting } from "./components/Sections/Greeting";
import { Navigation } from "./components/Navigation/Navigation";
import { TracingBeamDemo } from "./components/tracing";
import HyperText from "./components/ui/hyper-text";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/loadinganimation/Loading";
import ProjectsGrid from "@/projects/ProjectsGrid";
import { ProfileSection } from "./components/About/ProfileSection";
import { ContactSection } from "./components/Contact/ContactSection";

const App = () => {
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
          <div className="relative mx-auto max-w-7xl px-4">
            <Navigation
              aboutRef={aboutRef}
              projectsRef={projectsRef}
              skillsRef={skillsRef}
              contactRef={contactRef}
            />
            <main className="pt-16">
              <section className="flex min-h-[80vh] items-center justify-center py-12">
                <Greeting />
              </section>

              <section ref={aboutRef} className="py-16">
                <HyperText
                  text="ABOUT ME"
                  className="border-slate-300 text-center font-Permanent_Marker text-3xl sm:text-4xl"
                  duration={50}
                  animateOnLoad={false}
                />
                <div className="mt-12">
                  <ProfileSection />
                </div>
                <div className="mt-12">
                  <TracingBeamDemo />
                </div>
              </section>

              <section ref={projectsRef} className="py-16">
                <HyperText
                  text="PROJECT's"
                  className="border-slate-300 text-center font-Permanent_Marker text-3xl sm:text-4xl"
                  duration={50}
                  animateOnLoad={false}
                />
                <ProjectsGrid />
              </section>

              <section ref={skillsRef} className="py-16">
                <HyperText
                  text="SKILL's"
                  className="border-slate-300 text-center font-Permanent_Marker text-3xl sm:text-4xl"
                  duration={50}
                  animateOnLoad={false}
                />
                <div className="mt-12 flex justify-center align-middle">
                  <Skills />
                </div>
              </section>

              <section ref={contactRef} className="py-16">
                <HyperText
                  text="CONTACT"
                  className="border-slate-300 text-center font-Permanent_Marker text-3xl sm:text-4xl"
                  duration={50}
                  animateOnLoad={false}
                />
                <div className="mt-12">
                  <ContactSection />
                </div>
              </section>
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
