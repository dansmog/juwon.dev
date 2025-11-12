"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { images } from "../../utils";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-80 w-full md:h-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-80 w-full md:h-96 rounded-3xl p-2 shadow-xl border border-neutral-200 shadow-black/10 dark:shadow-white/5 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 flex-1 overflow-hidden rounded-lg">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const QuickComponentView = () => {
  // Transform images into Card format
  const cards: Card[] = images.map((image, idx) => ({
    id: idx,
    name: `Image ${idx + 1}`,
    designation: "",
    content: (
      <img
        src={image}
        alt={`image ${idx + 1}`}
        className="rounded-lg w-full h-full object-cover"
      />
    ),
  }));

  return (
    <div className="flex justify-center items-center">
      <CardStack items={cards} offset={10} scaleFactor={0.06} />
    </div>
  );
};

export default QuickComponentView;
