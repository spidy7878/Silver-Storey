'use client';

import React, { useState } from 'react';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';
import GallerySection from '../CommercialProjects/components/GallerySection';
import type { GalleryProject } from '../CommercialProjects/constants';

interface GalleryRow {
  key: string;
  title: string;
  items: GalleryProject[];
}

interface ProjectPageTemplateProps {
  heroImageUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  gallerySections: GalleryRow[];
  projectPages?: { title: string; slug: string }[];
}

export default function ProjectPageTemplate({
  heroImageUrl,
  heroTitle = 'Our Projects',
  heroSubtitle,
  gallerySections,
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

      {gallerySections.map((section) => (
        <GallerySection
          key={section.key}
          title={section.title}
          projects={section.items}
        />
      ))}
    </div>
  );
}
