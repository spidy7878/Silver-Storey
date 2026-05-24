'use client';

import React, { useState } from 'react';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';
import ResidentialHero from './components/ResidentialHero';
import GallerySection from './components/GallerySection';

export default function ResidentialProjects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <ResidentialHero />
        <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      <GallerySection />
    </div>
  );
}
