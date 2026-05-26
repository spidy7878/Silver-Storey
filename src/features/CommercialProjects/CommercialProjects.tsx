'use client';

import React, { useState } from 'react';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';
import CommercialHero from './components/CommercialHero';
import GallerySection from './components/GallerySection';
import type { GalleryProject } from './constants';

interface CommercialProjectsProps {
  gallery?: GalleryProject[];
  heroImageUrl?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  projectPages?: { title: string; slug: string }[];
}

export default function CommercialProjects({
  gallery,
  heroImageUrl,
  heroTitle,
  heroSubtitle,
  projectPages = [],
}: CommercialProjectsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <CommercialHero
          heroImageUrl={heroImageUrl}
          heroTitle={heroTitle}
          heroSubtitle={heroSubtitle}
        />
        <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          projectPages={projectPages}
        />
      </header>

      <GallerySection projects={gallery} />
    </div>
  );
}
