'use client';

import React from 'react';

interface CommercialHeroProps {
  heroImageUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

export default function CommercialHero({
  heroImageUrl,
  heroTitle = 'Commercial',
  heroSubtitle = 'spaces',
}: CommercialHeroProps) {
  return (
    <>
      <img
        src={heroImageUrl ?? '/images/5bhk.avif'}
        alt="Commercial Interior Design"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full -translate-y-20 transform flex-col items-center justify-center px-6 text-center sm:-translate-y-24">
        {/* Logo */}
        <div className="mb-6 flex flex-col items-center">
          <div className="h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
            <img
              src="/images/home_logo.avif"
              alt="Silver Storey logo"
              className="h-full w-full origin-center scale-[0.78] transform object-cover"
              loading="eager"
            />
          </div>
          <div className="mt-0 pt-0 text-base font-light tracking-[0.16em] text-white sm:text-lg">
            Silver Storey&apos;s
          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl leading-tight font-normal tracking-tight text-white">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {heroTitle}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {heroSubtitle}
          </span>
        </h1>
      </div>
    </>
  );
}
