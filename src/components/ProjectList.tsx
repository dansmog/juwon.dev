"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";



const ProjectList = ({projects}: {projects: Project}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="space-y-4">
        {projects.map((project) => (
          <Modal key={project.id}>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <ModalTrigger className="w-full p-0 text-left bg-transparent border-none cursor-pointer">
                <div className="flex items-center justify-between py-4 border-dotted-b border-gray-200">
                  <div className="flex-1">
                    <div className="relative">
                      {/* Text - stays visible */}
                      <div>
                        <h3 className="text-base font-medium tracking-tight text-gray-900">
                          {project.title} - <span className="text-sm">{project?.tagline}</span>
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
                    className="text-xs md:text-sm text-gray-500 ml-4 whitespace-nowrap"
                    animate={{
                      x: hoveredId === project.id ? [0, -2, 2, -2, 2, 0] : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    Tap/click to reveal
                  </motion.span>
                </div>
              </ModalTrigger>
            </div>

            {/* Modal Content */}
            <ModalBody>
              <ModalContent>
                <h4 className="text-2xl cursor-pointer md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-500 mb-6">{project.category}</p>
                <div className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <p className="text-gray-700 mt-6">
                  Project description and details will go here...
                </p>
              </ModalContent>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
