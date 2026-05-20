'use client';

import React, { useState } from 'react';

const reviews = [
  {
    text: 'From start to finish, my experience was fantastic. The complimentary 3D visualization gave me confidence in the design, and the entire process was smooth and transparent. I highly recommend their services to anyone looking for reliable interior design',
    author: 'Priya Mehta',
  },
  {
    text: 'The sheer professionalism and attention to detail from the Silver Storey team was spectacular. They understood my vision perfectly and executed it within the promised 45 days. My home feels absolutely magical now.',
    author: 'Rahul Sharma',
  },
  {
    text: 'I loved the transparency in pricing. What they quoted was exactly what I paid, no hidden charges. The quality of materials used for the modular kitchen and carpentry is definitely top-notch.',
    author: 'Sneha Reddy',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };
  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
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

        {/* Bottom controls: left Menu, centered social icons + estimate, right Contact */}
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

      {/* Main Content Section added below the Hero header */}
      <div className="bg-[#e9e4df] pt-16 pb-32 text-black">
        {/* 1. Category Price Cards */}
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {[
              { name: 'Bedroom', price: '2.1 L' },
              { name: 'Dining', price: '1 L' },
              { name: 'Kitchen', price: '1.4 L' },
              { name: 'Bathroom', price: '1.8 L' },
              { name: 'Living Room', price: '2.4 L' },
              { name: 'Office', price: '2 L' },
            ].map((cat, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-800 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/70" />
                <div className="absolute top-3 right-3 rounded-md bg-black/80 px-4 py-1.5 text-xs text-white backdrop-blur-md">
                  {cat.name}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-light tracking-wide sm:text-4xl">
                    {cat.price}
                  </div>
                  <div className="text-base font-light sm:text-lg">Onwards</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Stats Counters */}
        <div className="mx-auto max-w-[90rem] px-6 py-24 sm:py-32">
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 text-center md:grid-cols-4">
            {[
              { val: '60+', label: 'Satisfactory Customers' },
              { val: '50000', label: 'Square Feet Transformed' },
              { val: '30+', label: 'Expert Team Members' },
              { val: '15', label: 'Years of Experience' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="mb-3 text-5xl font-light sm:text-6xl">
                  {stat.val}
                </div>
                <div className="text-sm font-medium text-black/60 sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Process Steps */}
        <div className="relative mt-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
          <div className="relative mx-auto max-w-[90rem] px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              {[
                {
                  name: 'Meet our Expert',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  name: 'Get free Estimate',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                },
                {
                  name: 'Initial Payment',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  ),
                },
                {
                  name: 'Get 3D visualization',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  ),
                },
                {
                  name: 'Design Approval',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
                {
                  name: 'Delivery in 45 Days!**',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-4 h-8 w-8 opacity-80"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-2xl bg-black/5 p-6 py-8 text-center shadow-sm backdrop-blur-sm transition-colors hover:bg-black/10"
                >
                  {step.icon}
                  <span className="text-sm leading-snug font-medium text-black/80">
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Features & Warranty Section */}
        <div className="mx-auto max-w-[90rem] px-6 py-24 hover:cursor-default sm:py-32">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              10 Years of Warranty !
            </h2>
            <button className="rounded-full border border-black/30 bg-transparent px-8 py-2.5 text-sm font-medium transition-colors hover:bg-black/5">
              How It Works
            </button>
          </div>

          <div className="relative mt-12 flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-stretch lg:gap-8">
            {/* Left Texts */}
            <div className="flex w-full flex-col justify-around gap-12 text-center lg:w-1/4 lg:py-12 lg:text-center">
              <div>
                <h3 className="mb-3 text-lg font-semibold tracking-wide">
                  Experience 3D Visualization
                </h3>
                <p className="text-sm font-medium text-black/70">
                  Experience 3D visualization of your project before it begins.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <h3 className="mb-3 text-lg font-semibold tracking-wide">
                  Guarantee 45 Days Delivery
                </h3>
                <p className="text-sm font-medium text-black/70">
                  We ensure your order is delivered within 45 days period.**
                </p>
              </div>
            </div>

            {/* Center Laptop */}
            <div className="relative w-full max-w-3xl lg:w-1/2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1.5rem] border-[12px] border-b-[24px] border-black bg-black shadow-2xl sm:rounded-t-[2rem] sm:border-[16px] sm:border-b-[32px]">
                <img
                  src="/images/laptop.avif"
                  alt="Interior preview screen"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Laptop Base */}
              <div className="mx-auto h-4 w-[110%] -translate-x-[4.5%] rounded-t-sm rounded-b-xl bg-black sm:h-5 sm:w-[112%] sm:-translate-x-[5.3%]"></div>
            </div>

            {/* Right Texts */}
            <div className="flex w-full flex-col justify-around gap-12 text-center lg:w-1/4 lg:py-12 lg:text-center">
              <div>
                <h3 className="mb-3 text-lg font-semibold tracking-wide">
                  Price Match Guarantee
                </h3>
                <p className="text-sm font-medium text-black/70">
                  At the end of your Project , You pay exactly what we quote
                  initially**
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <h3 className="mb-3 text-lg font-semibold tracking-wide">
                  Transparency In Every Step
                </h3>
                <p className="text-sm font-medium text-black/70">
                  Complete transparency throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Youtube Videos Section */}
        <div className="mx-auto max-w-[90rem] px-6 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-black shadow-lg transition-transform hover:-translate-y-1"
              >
                {/* Fallback for YouTube embed mockup */}
                <img
                  src={`/images/laptop.avif`}
                  alt={`Video ${item}`}
                  className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-16 items-center justify-center rounded-xl bg-red-600 transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Video Info Overlay Mockup */}
                <div className="absolute top-0 left-0 flex w-full items-start justify-between bg-gradient-to-b from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 p-1">
                      <img
                        src="/images/home_logo.avif"
                        alt="Channel"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="line-clamp-1 text-sm font-medium text-white">
                        Project Showcase {item}
                      </p>
                      <p className="text-xs text-white/70">Silver Storey</p>
                    </div>
                  </div>
                </div>
                {/* Watch on YouTube Mockup */}
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4 pb-3">
                  <div className="flex gap-4">
                    {/* Share / Later icons */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-sm bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                    Watch on <span className="font-bold">YouTube</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. All Under One Roof Section */}
        <div className="relative pt-16 pb-32 sm:pb-40">
          <div className="mx-auto max-w-[90rem] px-6 text-center">
            <h2 className="mb-24 text-3xl font-light tracking-wide sm:text-4xl">
              All Under One Roof
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-12">
              {[
                {
                  name: 'Civil Work',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                },
                {
                  name: 'Modular',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M2 12l10-5 10 5-10 5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 7l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  name: 'Carpentry',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M14.5 17.5L3 6" />
                      <path d="M12 21l-3-3" />
                      <path d="M3 13.5L13.5 2" />
                      <path d="M9 4l3 3" />
                      <path d="M18 10l3 3-5.5 5.5a2.12 2.12 0 0 1-3-3L18 10z" />
                    </svg>
                  ),
                },
                {
                  name: 'Furnishing',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
                      <path d="M4 11v6c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6" />
                      <path d="M2 14h20" />
                      <path d="M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" />
                    </svg>
                  ),
                },
                {
                  name: 'Lighting',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="M4.93 4.93l2.83 2.83" />
                      <path d="M16.24 16.24l2.83 2.83" />
                      <path d="M2 12h4" />
                      <path d="M18 12h4" />
                      <path d="M4.93 19.07l2.83-2.83" />
                      <path d="M16.24 7.76l2.83-2.83" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  ),
                },
                {
                  name: 'Decor',
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="h-16 w-16"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                      <line x1="16" y1="8" x2="2" y2="22" />
                      <line x1="17.5" y1="15" x2="9" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-6 text-black/80 transition-colors hover:text-black"
                >
                  {service.icon}
                  <span className="text-base font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Timeless Luxury Section */}
          <div className="mx-auto max-w-[90rem] px-6 py-24 sm:py-32">
            {/* Header Row */}
            <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#615147] sm:text-5xl lg:w-1/2">
                ESCAPE TO
                <br />
                TIMELESS LUXURY
              </h2>
              <div className="lg:w-1/2 lg:pl-16">
                <p className="mb-6 text-sm leading-relaxed font-medium text-black/70 sm:text-base">
                  Use this space to promote the business, its products or its
                  services. Help people become familiar with the business and
                  its offerings, creating a sense of connection and trust.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-black uppercase transition-transform hover:translate-x-1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  SEE OUR ROOMS
                </a>
              </div>
            </div>

            {/* Staggered Masonry Grid */}
            <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-4 lg:gap-6">
              {/* 2 BHK */}
              <div className="flex flex-col pt-12">
                <h3 className="mb-4 font-serif text-xl font-medium tracking-wide text-[#615147]">
                  2 BHK
                </h3>
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/5 text-center shadow-sm">
                  <img
                    src="/images/2bhk.avif"
                    alt="2 BHK"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* 3 BHK */}
              <div className="flex flex-col">
                <h3 className="mb-4 font-serif text-xl font-medium tracking-wide text-[#615147]">
                  3 BHK
                </h3>
                <div className="aspect-[2/3] w-full overflow-hidden bg-black/5 text-center shadow-sm">
                  <img
                    src="/images/3bhk.avif"
                    alt="3 BHK"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* 4 BHK */}
              <div className="flex flex-col pt-8">
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="font-serif text-xl font-medium tracking-wide text-[#615147]">
                    4 BHK
                  </h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f95738]"></span>
                </div>
                <div className="aspect-square w-full overflow-hidden bg-black/5 text-center shadow-sm">
                  <img
                    src="/images/4bhk.avif"
                    alt="4 BHK"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* 5 BHK */}
              <div className="flex flex-col pt-4">
                <h3 className="mb-4 font-serif text-xl font-medium tracking-wide text-[#615147]">
                  5 BHK
                </h3>
                <div className="aspect-square w-full overflow-hidden bg-black/5 text-center shadow-sm sm:aspect-[4/5]">
                  <img
                    src="/images/5bhk.avif"
                    alt="5 BHK"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. Book Consultation Section */}
        <div className="mx-auto max-w-[90rem] cursor-default px-6 pt-16 pb-4 text-center md:pb-12 lg:pt-24">
          <h2 className="mb-4 text-4xl font-light tracking-wide sm:text-5xl lg:text-6xl">
            Book your free Consultation
          </h2>
          <p className="mb-8 text-sm font-medium text-black/70 sm:text-base">
            It's time to live your dreams!
          </p>
          <button className="rounded-full border border-black/30 bg-transparent px-8 py-2.5 text-sm font-medium transition-colors hover:bg-black/5">
            Book Now
          </button>
        </div>

        {/* 9. Global Brands Section */}
        <div className="relative cursor-default bg-white pt-16 pb-32 text-center sm:pt-24 md:pt-32">
          {/* Convex White Wave Divider */}
          <div className="pointer-events-none absolute top-0 left-0 w-full -translate-y-[99%] overflow-hidden leading-none">
            <svg
              className="relative block h-[60px] w-full sm:h-[100px] md:h-[140px]"
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
          <div className="mx-auto max-w-[100rem] overflow-hidden px-6">
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 sm:gap-14 lg:gap-20">
              {[
                { name: 'ebco', font: 'font-serif lowercase' },
                { name: 'Greenply', font: 'font-cursive capitalize' },
                { name: 'Hettich', font: 'font-sans font-bold text-gray-800' },
                {
                  name: 'HAVELLS',
                  font: 'font-sans font-black tracking-widest',
                },
                {
                  name: 'asianpaints',
                  font: 'font-sans font-medium lowercase',
                },
                {
                  name: 'PHILIPS',
                  font: 'font-sans font-black tracking-widest text-[#0b5c94]',
                },
                { name: 'EVARA', font: 'font-serif tracking-widest' },
                { name: 'KOHLER', font: 'font-sans font-bold tracking-widest' },
                { name: 'ebco', font: 'font-serif lowercase' },
              ].map((brand, idx) => (
                <div
                  key={idx}
                  className="flex flex-shrink-0 items-center justify-center"
                >
                  <span
                    className={`text-xl transition-all hover:scale-105 hover:opacity-100 sm:text-2xl md:text-3xl ${brand.font}`}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 10. Testimonials Slideshow Section */}
        <div className="relative cursor-default bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[90rem] px-6 text-center">
            <p className="mb-2 text-sm font-medium text-black/60">
              Happy Customers
            </p>
            <h2 className="mb-16 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              What they're saying
            </h2>

            <div className="relative mx-auto mt-10 max-w-5xl px-12 sm:px-16">
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
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

              {/* Review Text */}
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

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
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

            {/* Dots */}
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

        {/* 11. Our Creative Founders Section */}
        <div className="cursor-default bg-white py-16 text-center sm:py-24">
          <h2 className="mb-12 text-3xl font-light tracking-wide text-black sm:mb-16 sm:text-4xl">
            Our Creative Founders
          </h2>

          <div className="mx-auto max-w-[70rem] px-6">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 md:gap-16">
              {/* Founder 1 */}
              <div className="flex flex-col items-center">
                <div className="aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-3xl bg-black/5 shadow-md transition-transform hover:scale-[1.01]">
                  <img
                    src="/images/palak.avif"
                    alt="Palak Singhania"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 text-lg leading-tight font-bold text-black sm:text-xl md:text-2xl">
                  Palak
                  <br />
                  Singhania
                </div>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center">
                <div className="aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-3xl bg-black/5 shadow-md transition-transform hover:scale-[1.01]">
                  <img
                    src="/images/subham.avif"
                    alt="Subham Bhattacharya"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-6 text-lg leading-tight font-bold text-black sm:text-xl md:text-2xl">
                  Subham
                  <br />
                  Bhattacharya
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-[56rem] px-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-8 h-8 w-8 text-black"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="6.5" />
            </svg>

            <h2 className="mb-6 text-4xl font-light tracking-wide text-black sm:text-5xl lg:text-6xl">
              Download Brochure
            </h2>

            <p className="mb-10 text-sm leading-relaxed font-medium text-black/70 sm:text-base">
              This is the space to introduce visitors to the business or brand.
              Briefly explain who's behind it, what it does and what makes it
              unique. Share its core values and what this site has to offer.
            </p>

            <button className="rounded-full border border-black/80 bg-transparent px-8 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5">
              Download
            </button>
          </div>
        </div>
      </div>

      {/* 12. Footer Section */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#000]">
          {/* We'll use a placeholder image if the exact kitchen one isn't in public/images yet */}
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
              className="flex w-full max-w-[280px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-[320px]"
            >
              Call +91 83369 17221
            </a>
            <button className="flex w-full max-w-[340px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-[460px]">
              Book a meeting
            </button>
            <a
              href="mailto:care@silverstorey.com"
              className="flex w-full max-w-[340px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-[460px]"
            >
              Email - care@silverstorey.com
            </a>
            <button className="flex w-full max-w-[340px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:max-w-[460px]">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
