import React from 'react';

export default function SocialBar({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-8 sm:gap-12 ${className}`}>
      <a
        href="#"
        aria-label="facebook"
        className="hidden transition-transform hover:scale-105 sm:flex"
      >
        <img
          src="/images/facebook.avif"
          alt="facebook"
          className="h-20 w-20 object-contain"
        />
      </a>

      <a
        href="#"
        aria-label="linkedin"
        className="hidden transition-transform hover:scale-105 sm:flex"
      >
        <img
          src="/images/linkedin.avif"
          alt="linkedin"
          className="h-12 w-12 object-contain"
        />
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
        className="hidden transition-transform hover:scale-105 sm:flex"
      >
        <img
          src="/images/youtube.avif"
          alt="youtube"
          className="h-12 w-12 object-contain"
        />
      </a>

      <a
        href="#"
        aria-label="instagram"
        className="hidden transition-transform hover:scale-105 sm:flex"
      >
        <img
          src="/images/instagram (2).avif"
          alt="instagram"
          className="h-12 w-12 object-contain"
        />
      </a>
    </div>
  );
}
