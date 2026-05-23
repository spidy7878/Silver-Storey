'use client';

import React, { useRef, useEffect } from 'react';
import { brands } from '../constants';

export default function BrandsMarquee() {
  const brandsRef = useRef<HTMLDivElement | null>(null);
  const brandsInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = brandsRef.current;
    const inner = brandsInnerRef.current;
    if (!container || !inner) return;

    let rafId: number | null = null;
    let last = performance.now();
    const speed = 40; // pixels per second - tweakable

    const c = container as HTMLDivElement;
    const i = inner as HTMLDivElement;

    function step(now: number) {
      const delta = now - last;
      last = now;
      // advance scrollLeft
      c.scrollLeft += (speed * delta) / 1000;
      // when we've scrolled past half (since content is duplicated), jump back by half width
      const half = i.scrollWidth / 2;
      if (half && c.scrollLeft >= half) {
        c.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative cursor-default bg-white pb-32 text-center">
      {/* Convex White Wave Divider */}
      <div className="pointer-events-none absolute top-0 left-0 w-full translate-y-[-99%] overflow-hidden leading-none">
        <svg
          className="relative block h-15 w-full sm:h-25 md:h-35"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,160 C480,0 960,0 1440,160 Z" fill="#ffffff" />
        </svg>
      </div>

      <h3 className="mb-12 text-xl font-light tracking-wide sm:mb-16 sm:text-2xl md:text-3xl">
        Our Preferred Global Brands
      </h3>

      {/* Brands Container */}
      <div className="mx-auto max-w-400 overflow-hidden px-6">
        <div className="overflow-hidden">
          <div className="flex w-full items-center">
            <div className="w-full overflow-hidden">
              <div
                className="animate-marquee no-scrollbar whitespace-nowrap"
                ref={brandsRef}
              >
                {brands.concat(brands).map((brand, idx) => (
                  <span
                    key={idx}
                    className={`mx-8 inline-block text-2xl sm:text-3xl md:text-4xl ${brand.font}`}
                    aria-hidden={idx >= brands.length}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
