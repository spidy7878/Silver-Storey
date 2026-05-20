'use client';

import React from 'react';

export default function HeroHeader() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <video
        src="/videos/home_video1.mp4"
        poster="/videos/home_video1.jpg"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full -translate-y-24 transform flex-col items-center justify-center px-6 pt-20 text-center sm:-translate-y-28 sm:pt-24 md:-translate-y-32 md:pt-32">
        <div className="mb-6 flex -translate-y-2 transform flex-col items-center sm:-translate-y-3">
          <div className="h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20 md:h-20 md:w-20">
            <img
              src="images/home_logo.avif"
              alt="Silver Storey logo"
              className="h-full w-full origin-center scale-[0.78] transform object-cover"
              loading="eager"
            />
          </div>
          <div className="mt-0 pt-0 text-base font-light tracking-[0.16em] text-white sm:text-lg">
            Silver Storey
          </div>
        </div>

        <p className="mb-3 text-sm tracking-normal text-white/90 uppercase">
          INTRODUCING THE SILVER STOREY LIVING
        </p>

        <h1 className="font-regular max-w-4xl text-3xl leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="mb-2 block">India's Fastest Growing</span>
          <span className="block">Interior Design Brand</span>
        </h1>
      </div>

      <a
        href="#menu"
        aria-label="menu"
        className="fixed bottom-6 left-6 z-30 flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-medium text-black shadow-lg transition-transform hover:scale-105"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-black"
        >
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden sm:inline">Menu</span>
      </a>

      <div className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 transform items-center sm:gap-6 lg:gap-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            aria-label="facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 12.07C22 6.49 17.52 2 11.94 2S1.88 6.49 1.88 12.07C1.88 17.09 5.86 21.19 10.67 21.98v-7.01H8.08v-2.9h2.6V9.41c0-2.57 1.53-3.99 3.86-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.29c-1.27 0-1.66.79-1.66 1.6v1.93h2.83l-.45 2.9h-2.38v7.01C18.14 21.61 22 17.6 22 12.07z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="#"
            aria-label="linkedin"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.99h4v12H3v-12zM9 8.99h3.84v1.64h.06c.54-1.02 1.88-2.1 3.88-2.1 4.15 0 4.91 2.73 4.91 6.28v7.18H19v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.45 1.66-2.45 3.38v6.45H9v-12z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="#estimate"
            className="flex h-9 items-center justify-center rounded-sm bg-white px-5 text-[10px] font-semibold tracking-wider text-black shadow-lg transition-transform hover:scale-105 sm:text-[11px]"
          >
            GET FREE ESTIMATE
          </a>

          <a
            href="#"
            aria-label="youtube"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M23.5 6.2s-.23-1.62-.94-2.33C21.42 3 19.67 3 18.9 2.92 15.62 2.6 12 2.6 12 2.6s-3.6 0-6.9.32C4.33 2.98 2.58 3 1.44 3.87.73 4.58.5 6.2.5 6.2S.25 8 0 9.77v.46C-.04 13.08.5 14.9.5 14.9s.23 1.61.94 2.32c1.05 1.07 2.43 1.04 3.04 1.17 2.2.33 9.02.33 9.02.33s3.6 0 6.9-.32c.77-.08 2.52-.1 3.66-.97.71-.71.94-2.33.94-2.33s.24-1.79.49-3.57v-.46c.01-1.77-.49-3.58-.49-3.58z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="#"
            aria-label="instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm6.4-3.3a1.12 1.12 0 11-1.12 1.12 1.12 1.12 0 011.12-1.12z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      <a
        href="#contact"
        className="fixed right-6 bottom-6 z-30 flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-medium text-black shadow-lg transition-transform hover:scale-105"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="text-black"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Contact
      </a>
    </header>
  );
}
