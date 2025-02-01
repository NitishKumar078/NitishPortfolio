import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import { Confetti } from "@/components/ui/Confetti"; // You'll need to create this component

const _SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const _TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const _PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

export const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:nishkumar562@gmail.com",
      color: "hover:text-purple-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nitish-kumar-m/",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/NitishKumar078",
      color: "hover:text-gray-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(_SERVICE_ID, _TEMPLATE_ID, formData, _PUBLIC_ID).then(
      () => {
        setIsSending(false);
        setMessageSent(true);
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        setIsSending(false);
        alert("Failed to send the message. Please try again.");
      },
    );
  };

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
        className="grid grid-cols-3 items-center gap-5 sm:grid-cols-3"
      >
        {contactLinks.map((link) => (
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
        {messageSent ? (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="flex flex-col items-center space-y-4"
            >
              <Confetti /> {/* Add your confetti component here */}
              <div className="relative">
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-24 w-24 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                  Message Sent!
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  I'll get back to you within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleInputChange}
                required
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
                value={formData.email}
                onChange={handleInputChange}
                required
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
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-md bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#2575fc] hover:to-[#6a11cb] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
              disabled={isSending}
            >
              {isSending ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
