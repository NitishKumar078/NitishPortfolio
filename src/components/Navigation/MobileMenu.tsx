import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navRefs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export const MobileMenu = ({ isOpen, onClose, navRefs }: MobileMenuProps) => {
  const links = [
    { name: "About", ref: navRefs.aboutRef, key: "aboutRef" },
    { name: "Projects", ref: navRefs.projectsRef, key: "projectsRef" },
    // { name: "Tools/Frameworks", ref: navRefs.skillsRef, key: "skillsRef" },
    { name: "Contact", ref: navRefs.contactRef, key: "contactRef" },
  ];

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close the menu after clicking
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sliding Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 flex h-auto w-full overflow-visible overflow-y-auto bg-white p-6 shadow-lg dark:bg-zinc-900"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="mt-8" role="navigation">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleScrollToSection(link.ref)}
                      className="block w-full text-left text-zinc-700 hover:text-purple-600 dark:text-zinc-300 dark:hover:text-purple-400"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
