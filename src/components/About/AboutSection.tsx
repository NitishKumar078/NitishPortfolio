import React from "react";
import { ProfileImage } from "./ProfileImage.tsx";
import { BioContent } from "./BioContent.tsx";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center">
          <span className="bg-gradient-to-tr from-[#8c48d4] to-[#2575fc] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            WHO{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-5xl text-transparent">
              I'M
            </span>{" "}
            & WHAT
            {""}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-5xl text-transparent">
              {" "}
              I
            </span>{" "}
            DO
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
