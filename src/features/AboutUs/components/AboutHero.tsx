import React from 'react';

export default function AboutHero() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="relative mx-auto h-[58vh] max-w-7xl overflow-hidden rounded-[2rem] sm:h-[68vh] md:h-[74vh]">
        {/* Background image */}
        <img
          src="/images/5bhk.avif"
          alt="Silver Storey Interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5">
          {/* Logo — displayed as-is (no circular clip) so the full S-mark shows */}
          <div className="w-28 sm:w-36 md:w-44">
            <img
              src="/images/home_logo.avif"
              alt="Silver Storey logo"
              className="h-auto w-full object-contain brightness-200"
            />
          </div>
          <p className="text-xl font-light tracking-[0.35em] text-white sm:text-2xl md:text-3xl">
            Silver Storey
          </p>
        </div>
      </div>
    </section>
  );
}
