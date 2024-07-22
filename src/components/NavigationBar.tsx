"use client";
import { FloatingNav } from "./ui/floating-navbar.tsx";
import keypress_0 from "../assets/keyboard_key_0.png";
import keypress_1 from "../assets/keyboard_key_1.png";
import keypress_2 from "../assets/keyboard_key_2.png";
import keypress_3 from "../assets/keyboard_key_3.png";
import keypress_4 from "../assets/keyboard_key_4.png";

export const NavigationBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: keypress_0,
    },
    {
      name: "Education",
      link: "/",
      icon: keypress_1,
    },
    {
      name: "Work",
      link: "/",
      icon: keypress_2,
    },
    {
      name: "Projects",
      link: "/",
      icon: keypress_3,
    },
    {
      name: "Skill",
      link: "/",
      icon: keypress_4,
    },
  ];
  return <FloatingNav navItems={navItems} />;
};
