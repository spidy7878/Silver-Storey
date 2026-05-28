'use client';

import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="videos/OFFICE full_1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/95 uppercase sm:text-sm">
          Delivering complicated craftsmanship is our expertise
        </p>
        <h2 className="mb-12 text-4xl font-normal text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
          Designs for the Bold of Heart
        </h2>

        <div className="flex w-full flex-col items-center gap-4 sm:gap-5">
          <a
            href="tel:+918336917221"
            className="flex w-full max-w-52 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-64"
          >
            Call +91 83369 17221
          </a>
          <a
            href="https://calendly.com/silverstorey/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-52 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-64"
          >
            Book a meeting
          </a>
          <a
            href="mailto:care@silverstorey.com"
            className="flex w-full max-w-72 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-80"
          >
            Email - care@silverstorey.com
          </a>
          <a
            href="https://calendly.com/silverstorey/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-52 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-64"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
