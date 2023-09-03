"use client";

import { useEffect, useRef, useState } from "react";

import CarouselItem from "./CarouselItem";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/images/carousel_1.jpg",
    alt: "image one",
  },
  {
    src: "/images/carousel_2.jpg",
    alt: "image two",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!intervalRef.current)
      intervalRef.current = setInterval(() => {
        setIndex((index) => (index === images.length - 1 ? 0 : ++index));
      }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section>
      <CarouselItem image={images[index].src} className="h-[800px]">
        <p className="bg-slate-600/50 text-center">
          Оазис на Спокойствие: Вашият Идеален Отдих в Монтана, България
        </p>
      </CarouselItem>
    </section>
  );
}
