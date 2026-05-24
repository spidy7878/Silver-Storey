'use client';

import React, { useState } from 'react';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';
import CommercialHero from './components/CommercialHero';
import GallerySection from './components/GallerySection';

export default function CommercialProjects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <CommercialHero />
        <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      <GallerySection />
    </div>
  );
}
