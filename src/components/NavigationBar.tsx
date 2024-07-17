"use client";
import { FloatingNav } from "./ui/floating-navbar.tsx";
// import { IconHome, IconMessage, IconUser } from //



export const NavigationBar = () =>{

  const navItems = [
    {
      name: "Home",
      link: "/",
    //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,/
    },
    {
      name: "About",
      link: "/about",
    //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: "Contact",
      link: "/contact",
    //   icon: (
    //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    },
  ];
    return(
        <FloatingNav navItems={navItems} />
    )
}