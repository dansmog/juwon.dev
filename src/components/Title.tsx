import React, { useState } from "react";
import { motion } from "motion/react";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: 20,
      height: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      height: "auto",
      transition: {
        type: "spring",
        mass: 5,
        stiffness: 2000,
        damping: 200,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={open ? "show" : "hidden"}
    >
      {items.map((child, index) => (
        <motion.div key={index} className="text-lg font-bold text-[#161716]" variants={item}>
          <motion.div style={{ overflow: "hidden" }}>{child}</motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function App() {
  const [open, set] = useState(true);

  return (
    <div>
      <Trail open={open}>
        <span>
          <span className="font-playfair italic text-[#6B7280]">
            Crafting web experiences
          </span> {" "}
            with care, building {" "} 
            <span className="font-playfair italic text-[#6B7280]">interactive</span> and  {" "}
            <span className="font-playfair italic text-[#6B7280]">delightful</span> products at the
          intersection of design and engineering. From Figma to production-ready Code
        </span>
      </Trail>
    </div>
  );
}
