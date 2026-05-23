import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="/images/laptop.avif"
          alt="Silver Storey Kitchen Background"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
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
            className="flex w-full max-w-70 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-[320px]"
          >
            Call +91 83369 17221
          </a>
          <button className="flex w-full max-w-85 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-115">
            Book a meeting
          </button>
          <a
            href="mailto:care@silverstorey.com"
            className="flex w-full max-w-85 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-115"
          >
            Email - care@silverstorey.com
          </a>
          <button className="flex w-full max-w-85 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-115">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
