"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Egg from "../../../public/data/Brown-eggs.png";
import Tea from "../../../public/data/tea.png";
import Soft from "../../../public/data/soft_drinks.jpg";
import Coffee from "../../../public/data/coffee.png";
import FrozenFood from "../../../public/data/frozen_food.png";
import IceCream from "../../../public/data/ice_cream.jpg";
import Noodles from "../../../public/data/noodle.jpg";

export default function Card() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const images = [
    {
      src: Egg,
      alt: "Egg",
      title: "Egg",
    },
    {
      src: Tea,
      alt: "Tea",
      title: "Tea",
    },
    {
      src: Soft,
      alt: "Soft Drinks",
      title: "Soft Drinks",
    },
    {
      src: Coffee,
      alt: "Coffee",
      title: "Coffee",
    },
    {
      src: FrozenFood,
      alt: "Frozen Food",
      title: "Frozen Food",
    },
    {
      src: IceCream,
      alt: "Ice Cream",
      title: "Ice Cream",
    },
    {
      src: Noodles,
      alt: "Noodles",
      title: "Noodles",
    },
  ];

  return (
    <div className="flex items-center overflow-hidden">
      <button
        className="absolute left-2 z-0 p-2 bg-white rounded-full shadow-md"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <div
        className="flex overflow-x-auto overflow-hidden gap-4 p-4 scroll-smooth hide-scrollbar"
        ref={scrollContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none text-center w-40 sm:w-24 md:w-56 lg:w-56"
          >
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-sm md:text-lg font-semibold mt-2">
              <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                {image.title}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-2 z-0 p-2 bg-white rounded-full shadow-md"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
}
