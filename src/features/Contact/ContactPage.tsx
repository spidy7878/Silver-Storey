'use client';

import React, { useState } from 'react';
import Footer from '../Hero/components/Footer';
import HeroControls from '../Hero/components/HeroControls';
import MenuOverlay from '../Hero/components/MenuOverlay';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Footer />
      <ContactForm />
      <MapSection />
      <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
