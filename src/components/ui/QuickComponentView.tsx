"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { images } from "../../utils";

const QuickComponentView = () => {

  return (
    <div className="flex justify-center items-center">
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
        >
          <img
            src={image}
            alt="bali images"
            width="500"
            height="500"
            className="rounded-lg h-40 w-50 md:h-70 md:w-90 object-cover shrink-0"
          />
        </motion.div>
      ))}
    </div>
  );
};


export default QuickComponentView;