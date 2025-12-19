import React from "react";
import { ProfileImage } from "./ProfileImage.tsx";
import { BioContent } from "./BioContent.tsx";

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          <span className="text-primary">
            WHO I'M <span>& </span>
            <span className="text-foreground">WHAT I Do</span>
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
