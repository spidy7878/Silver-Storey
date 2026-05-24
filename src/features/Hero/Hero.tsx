'use client';

import React, { useState } from 'react';
import { reviews, categories, stats } from './constants';
import HeroHeader from './components/HeroHeader';
import HeroControls from './components/HeroControls';
import CategoryCard from './components/CategoryCard';
import StatsGrid from './components/StatsGrid';
import MenuOverlay from './components/MenuOverlay';
import WarrantySection from './components/WarrantySection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import RoomGallery from './components/RoomGallery';
import BookConsultation from './components/BookConsultation';
import BrandsMarquee from './components/BrandsMarquee';
import Testimonials from './components/Testimonials';
import FoundersSection from './components/FoundersSection';
import Footer from './components/Footer';
import { useSlider } from '../../hooks/useSlider';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentSlide, nextSlide, prevSlide, setCurrentSlide } = useSlider(
    reviews.length,
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen w-full overflow-hidden">
        <HeroHeader />
        <HeroControls onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      {/* Main Content Section added below the Hero header */}
      <div className="bg-[#e9e4df] pt-16 text-black">
        {/* 1. Category Price Cards */}
        <div className="mx-auto max-w-360 px-6">
          {/* Mobile marquee */}
          <div className="-mx-6 overflow-hidden sm:hidden">
            <div
              className="flex hover:[animation-play-state:paused]"
              style={{ animation: 'marquee 20s linear infinite' }}
            >
              <div className="flex shrink-0 gap-4 pr-4">
                {categories.map((cat, i) => (
                  <div key={i} className="w-[160px] shrink-0">
                    <CategoryCard {...cat} />
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 gap-4 pr-4">
                {categories.map((cat, i) => (
                  <div key={`clone-${i}`} className="w-[160px] shrink-0">
                    <CategoryCard {...cat} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop grid */}
          <div className="hidden grid-cols-2 gap-4 sm:grid md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={i} {...cat} />
            ))}
          </div>
        </div>

        {/* 2. Stats Counters */}
        <div className="mx-auto max-w-360 px-6 py-24 sm:py-32">
          <StatsGrid items={stats} />
        </div>

        {/* 3 & 4. Process Steps + Warranty Features */}
        <WarrantySection />

        {/* 5. Youtube Videos Section */}
        <VideoSection />

        {/* 6, 7, 8. All Under One Roof + Room Gallery + Book Consultation */}
        <div className="relative pt-16 pb-32 sm:pb-40">
          <ServicesSection />
          <RoomGallery />
          <BookConsultation />
        </div>

        {/* 9. Global Brands Section */}
        <BrandsMarquee />

        {/* 10. Testimonials Slideshow Section */}
        <Testimonials
          reviews={reviews}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setCurrentSlide={setCurrentSlide}
        />

        {/* 11. Our Creative Founders Section */}
        <FoundersSection />
      </div>

      {/* 12. Footer Section */}
      <Footer />
    </div>
  );
}
