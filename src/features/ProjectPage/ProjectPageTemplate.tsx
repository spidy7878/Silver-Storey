'use client';

import React, { useState } from 'react';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="relative h-[55vh] w-65 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-[60vh] sm:w-75 md:w-80">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="mb-1 text-lg leading-snug font-bold text-white">
          {item.title}
        </h3>
        <p className="text-sm leading-snug text-white/80">{item.description}</p>
      </div>
    </div>
  );
}

interface ProjectPageTemplateProps {
  heroImageUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  gallery: GalleryItem[];
  projectPages?: { title: string; slug: string }[];
}

export default function ProjectPageTemplate({
  heroImageUrl,
  heroTitle = 'Our Projects',
  heroSubtitle,
  gallery,
  projectPages = [],
}: ProjectPageTemplateProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImageUrl ?? '/images/4bhk.avif'}
          alt={heroTitle}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full -translate-y-20 transform flex-col items-center justify-center px-6 text-center sm:-translate-y-24">
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
          <h1 className="max-w-4xl leading-tight font-normal tracking-tight text-white">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {heroTitle}
            </span>
            {heroSubtitle && (
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                {heroSubtitle}
              </span>
            )}
          </h1>
        </div>

        <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          projectPages={projectPages}
        />
      </header>

      <section className="overflow-hidden bg-[#f4f4f4] pt-16 pb-32">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
          Gallery
        </h2>
        <div className="overflow-hidden">
          <div
            className="flex hover:[animation-play-state:paused]"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            <div className="flex shrink-0 gap-6 pr-6">
              {gallery.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
            <div className="flex shrink-0 gap-6 pr-6">
              {gallery.map((item) => (
                <GalleryCard key={`clone-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
