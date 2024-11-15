"use client";
import GradualSpacing from "./ui/gradual-spacing";
import BlurIn from "./ui/blur-in";
import { TracingBeam } from "./ui/tracing-beam";
import { BoxReveal } from "./ui/box-reveal";
import Reading from "@/assets/Reading.png";
import Work from "@/assets/working.png";

export function TracingBeamDemo() {
  return (
    <div className="relative m-5 border bg-white p-2 md:shadow-xl">
      <TracingBeam>
        <div className="relative mx-auto max-w-5xl pt-4 md:max-w-4xl">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 justify-center rounded-full bg-black px-4 py-1 text-center text-sm text-white">
                <GradualSpacing
                  className="justify-center text-center align-middle text-2xl font-extralight text-white"
                  text={item.badge}
                />
              </h2>

              <div className="prose prose-sm dark:prose-invert text-sm dark:text-white">
                <BlurIn
                  word={item.description}
                  className="font-normal text-black"
                  variant={{
                    hidden: { filter: "blur(10px)", opacity: 0 },
                    visible: { filter: "blur(0px)", opacity: 1 },
                  }}
                  duration={2}
                />
              </div>
              {/* handle the image here  */}
              {item.image && item.section && item.className && (
                <div
                  className={`${item.className} flex items-center justify-between pt-2`}
                >
                  <img
                    src={item.image}
                    alt="SORRY NOT ABLE TO LOAD THE IMAGE HERE"
                    className="h-96 w-2/3 rounded-lg border-4 border-transparent object-cover"
                  />

                  <div>
                    {item.section.map((sectionItem, idx) => (
                      <div key={idx}>
                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                          <p className="text-[1.5rem] font-semibold">
                            {sectionItem.title}{" "}
                            <span className="text-[1rem] text-[#5046e6]">
                              {" "}
                              (recently)
                            </span>
                          </p>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                          <div>
                            <h2 className="mt-[.5rem] text-[1rem]">
                              {sectionItem.place}{" "}
                              <span className="m-2 inline-block text-[#5046e6]">
                                {sectionItem.location}{" "}
                              </span>
                            </h2>
                            <span className="inline-block text-[#5046e6]">
                              {sectionItem.date}
                            </span>
                          </div>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                          <div className="mt-6">
                            <p>
                              -&gt; {sectionItem.description}
                              <span className="font-semibold text-[#5046e6]">
                                {" "}
                                React
                              </span>
                              ,
                              <span className="font-semibold text-[#5046e6]">
                                {" "}
                                Typescript
                              </span>
                              ,
                              <span className="font-semibold text-[#5046e6]">
                                {" "}
                                Tailwind CSS
                              </span>
                              , and
                              <span className="font-semibold text-[#5046e6]">
                                {" "}
                                Framer Motion
                              </span>
                              . <br />
                              -&gt; 100% open-source, and customizable. <br />
                            </p>
                          </div>
                        </BoxReveal>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Work",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Work",
    image: Work,
    className: "sm:flex-row-reverse pt-5 flex-col-reverse ",
    section: [
      {
        place: "Inventys Pvt Ltd",
        title: "Junior Software Developer",
        location: "karnataka, India",
        date: "2023 - currently working",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.",
      },
    ],
  },
  {
    title: "Education",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Education",
    image: Reading,
    className: "sm:flex-row flex-col-reverse",
    section: [
      {
        place: "KLE Socity degree college",
        score: "8.1 CGPA",
        title: "Bachelor of Computer Application",
        location: "karnataka, India",
        date: "2019 - 2023",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.",
      },
    ],
  },
];

export default TracingBeamDemo;
