import React from "react";
import { ProfileImage } from "./ProfileImage.tsx";
import { BioContent } from "./BioContent.tsx";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <ProfileImage />
          <BioContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
