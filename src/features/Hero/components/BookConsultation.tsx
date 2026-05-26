'use client';

import React, { useState } from 'react';
import CalendlyModal from '@/components/CalendlyModal';

export default function BookConsultation() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <>
      <CalendlyModal
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
      />

      <div className="mx-auto max-w-360 cursor-default px-6 pt-0 pb-4 text-center md:pb-12 lg:pt-0">
        <h1 className="mb-4 text-4xl font-semibold tracking-wide sm:text-5xl lg:text-6xl">
          Book your free Consultation
        </h1>
        <p className="mb-8 text-sm font-medium text-black/70 sm:text-base">
          It&apos;s time to live your dreams!
        </p>
        <button
          onClick={() => setCalendlyOpen(true)}
          className="animate-bounce rounded-full border border-black bg-transparent px-8 py-2.5 text-sm font-medium transition-colors [animation-duration:1.8s] [animation-timing-function:ease-in-out] hover:bg-black hover:text-white"
        >
          Book Now
        </button>
      </div>
    </>
  );
}
