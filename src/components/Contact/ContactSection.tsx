import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import msgsent from "@/assets/message_sent.mp4";
const _SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const _TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const _PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

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
      href: "/",
      color: "hover:text-blue-500",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
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

    emailjs
      .send(
        _SERVICE_ID, // Replace with your EmailJS Service ID
        _TEMPLATE_ID, // Replace with your EmailJS Template ID
        formData,
        _PUBLIC_KEY, // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setIsSending(false);
          setMessageSent(true);
          setFormData({ name: "", email: "", message: "" }); // Clear the form
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
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-lg font-semibold text-green-500">
              Message sent successfully!
            </p>
            <video
              src={msgsent}
              autoPlay
              muted
              className="h-auto w-64 rounded-lg shadow-md"
            ></video>
          </div>
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
            <button
              type="submit"
              className="hover:cursor-hand w-full rounded-md bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-tr hover:from-[#2575fc] hover:to-[#6a11cb] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
