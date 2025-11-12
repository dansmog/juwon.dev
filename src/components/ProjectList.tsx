"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

const ProjectList = ({ projects }: { projects: Project }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="space-y-4">
        {projects.map((project) => (
          <Modal key={project.id}>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <ModalTrigger className="w-full p-0 text-left bg-transparent border-none cursor-pointer">
                <div className="flex items-center justify-between py-4 border-b border-dashed border-gray-200">
                  <div className="flex-1">
                    <div className="relative">
                      {/* Text - stays visible */}
                      <div>
                        <h3 className="text-base font-medium tracking-tight text-gray-900">
                          {project.title} -{" "}
                          <span className="text-sm">{project?.tagline}</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {project.industry} · {project.role}
                        </p>
                      </div>

                      {/* Image popover - appears on hover */}
                      <AnimatePresence>
                        {hoveredId === project.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 8 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute left-0 top-0 z-20 pointer-events-none"
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-[200px] h-auto object-cover rounded-lg border-4 border-[#f3f3f3]"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Tap to reveal text */}
                  <motion.span
                    className="text-xs tracking-normal md:text-sm text-gray-500 ml-4 whitespace-nowrap"
                    animate={{
                      x: hoveredId === project.id ? [0, -2, 2, -2, 2, 0] : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    Click to reveal
                  </motion.span>
                </div>
              </ModalTrigger>
            </div>

            {/* Modal Content */}
            <ModalBody>
              <ModalContent>
                <div className="mb-5">
                  <h3 className="text-base font-medium tracking-tight text-gray-900">
                    {project.title} -{" "}
                    <span className="text-sm">{project?.tagline}</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {project.industry} · {project.role}
                  </p>

                  <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between md:items-center mt-4">
                    <div className="flex flex-wrap gap-2 items-center ">
                      {project?.stacks?.map((stack, idx) => {
                        return (
                          <p className="text-sm text-gray-500" id={idx}>
                            {stack}
                          </p>
                        );
                      })}
                    </div>
                    <a href={project.url} target="_blank" className="text-black text-sm cursor-pointer">View Page</a>
                  </div>
                </div>
                <div className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <div className="mt-5 flex flex-col gap-5">
                    {project.images?.map((image, idx) => {
                      return (
                        <img
                          src={image}
                          id={idx}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      );
                    })}
                  </div>
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
