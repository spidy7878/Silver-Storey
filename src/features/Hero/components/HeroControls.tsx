import React from 'react';
import SocialBar from './SocialBar';

export default function HeroControls({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  return (
    <>
      <button
        onClick={onMenuClick}
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
      </button>

      <div className="fixed bottom-6 left-1/2 z-30 flex -translate-x-1/2 transform items-center sm:gap-6 lg:gap-8">
        <SocialBar />
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
    </>
  );
}
