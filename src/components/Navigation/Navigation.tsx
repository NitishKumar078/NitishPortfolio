import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "../ui/theme-toggle";
import { MobileMenu } from "./MobileMenu";

interface NavigationProps {
  navRefs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export const Navigation = ({ navRefs }: NavigationProps) => {
  const links = [
    { name: "About", ref: navRefs.aboutRef, key: "aboutRef" },
    { name: "Projects", ref: navRefs.projectsRef, key: "projectsRef" },
    { name: "Skills", ref: navRefs.skillsRef, key: "skillsRef" },
    { name: "Contact", ref: navRefs.contactRef, key: "contactRef" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Function to handle scrolling to a section
  const handleScrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    key: string,
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(key);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = links
        .map(({ ref, key }) => {
          if (ref.current) {
            return { key, offsetTop: ref.current.offsetTop };
          }
          return null;
        })
        .filter(Boolean) as { key: string; offsetTop: number }[];

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const active = sectionPositions.find((section, index) => {
        const nextSection = sectionPositions[index + 1];
        return (
          scrollPosition >= section.offsetTop &&
          (!nextSection || scrollPosition < nextSection.offsetTop)
        );
      });

      setActiveSection(active?.key || null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Centered Navigation Links */}
        <nav
          className="hidden items-center justify-center space-x-8 md:flex"
          role="navigation"
        >
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => handleScrollToSection(link.ref, link.key)}
              className={`relative px-3 py-2 text-sm font-medium ${
                activeSection === link.key
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-zinc-700 hover:text-purple-600 dark:text-zinc-300 dark:hover:text-purple-400"
              }`}
            >
              {link.name}
              {activeSection === link.key && (
                <motion.div
                  layoutId="activeSectionDesktop"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-purple-600 dark:bg-purple-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navRefs={navRefs}
        />
        <ThemeToggle />
      </div>
    </header>
  );
};
