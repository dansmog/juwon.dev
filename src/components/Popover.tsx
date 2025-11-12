"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    companyName: "Squarelabs Studios",
    role: "Pushing pixels",
    url: "https://www.squarelabs.agency",
  },
  {
    id: 2,
    companyName: "Bujeti (YC23)",
    role: "Previously Senior Frontend Developer",
    url: "https://www.bujeti.com",
  },
];
const Popover = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="mt-2 md:mt-0 flex md:items-center relative gap-2 md:gap-4 flex-col md:flex-row ">
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className="relative   items-center cursor-pointer group"
       
          onMouseEnter={() => setHoveredId(experience.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <AnimatePresence>
            {hoveredId === experience.id && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={`absolute bottom-full mb-2 ${
                  index <= 2
                    ? "left-2 md:left-1/2 md:-translate-x-1/2"
                    : "left-1/2 -translate-x-1/2"
                } bg-white border border-[#F3F3F3] rounded-xl p-4 w-72 z-30`}
              >
                {/* Profile Info */}
                <div className="flex items-center mb-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-xs"></span>
                    <span className="text-gray-400 text-[10px]">
                      built by Squarelabs
                    </span>
                  </div>
                </div>

                <div className="bg-[#fafafa] text-gray-700 text-xs p-3 rounded-md mb-3 leading-snug">
                  Your testimonial text here
                </div>

                <div className="flex flex-col w-full gap-1">
                  <span className="font-semibold text-gray-900 text-xs">
                    Projects
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-xs underline hover:text-gray-600"
                      >
                        Project name
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Text that triggers popover */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative cursor-pointer  text-[#6B7280]"
            animate={{
              scale: hoveredId === experience.id ? 1.1 : 1,
              zIndex: hoveredId === experience.id ? 20 : 10,
            }}
          >
            <p>
              {experience?.role} @{" "}
              <a target="_blank" href={experience?.url}>
                {experience?.companyName}
              </a>
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Popover;
