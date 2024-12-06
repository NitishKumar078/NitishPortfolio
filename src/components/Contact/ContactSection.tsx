import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const ContactSection = () => {
  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-purple-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "/",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-500",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      label: "Resume",
      href: "/resume.pdf",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4">
      <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-transparent">
          Let's Connect
        </span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 rounded-xl border border-zinc-200 p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-zinc-700 ${link.color}`}
          >
            {link.icon}
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              {link.label}
            </span>
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl bg-white p-8 shadow-lg dark:bg-zinc-800/50"
      >
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};
