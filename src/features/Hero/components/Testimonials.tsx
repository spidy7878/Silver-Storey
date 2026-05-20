'use client';

import React from 'react';

type Review = { text: string; author: string };

export default function Testimonials({
  reviews,
  currentSlide,
  nextSlide,
  prevSlide,
  setCurrentSlide,
}: {
  reviews: Review[];
  currentSlide: number;
  nextSlide: (e: React.MouseEvent) => void;
  prevSlide: (e: React.MouseEvent) => void;
  setCurrentSlide: (i: number) => void;
}) {
  return (
    <div className="relative cursor-default bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-6 text-center">
        <p className="mb-2 text-sm font-medium text-black/60">
          Happy Customers
        </p>
        <h2 className="mb-16 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          What they're saying
        </h2>

        <div className="relative mx-auto mt-10 max-w-5xl px-12 sm:px-16">
          <button
            onClick={prevSlide as any}
            className="absolute top-1/2 left-0 -translate-y-1/2 p-2 text-black/40 transition-colors hover:text-black"
            aria-label="Previous review"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <p className="mx-auto max-w-4xl text-xl font-light text-black/90 sm:text-2xl md:text-[1.75rem] md:leading-[1.5]">
                    {review.text}
                  </p>
                  <p className="mt-12 text-sm font-semibold text-black/80">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide as any}
            className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-black/40 transition-colors hover:text-black"
            aria-label="Next review"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(idx);
              }}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                currentSlide === idx
                  ? 'bg-[#f95738]'
                  : 'bg-black/10 hover:bg-black/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
