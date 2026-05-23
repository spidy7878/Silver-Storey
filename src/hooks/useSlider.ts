import { useState } from 'react';
import type { MouseEvent } from 'react';

export function useSlider(length: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % length);
  };

  const prevSlide = (e: MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + length) % length);
  };

  return { currentSlide, setCurrentSlide, nextSlide, prevSlide };
}
