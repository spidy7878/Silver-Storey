import React from 'react';

export default function MapSection() {
  return (
    <div className="cursor-default bg-white">
      {/* Address heading */}
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-2xl leading-snug font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
          Premises 117, Pragati Maidan, Sector A, Metropolitan Co-Operative
          Housing Society Limited, P.S, Tangra, Kolkata, West Bengal 700105
        </h2>
      </div>

      {/* Map embed */}
      <div className="h-[50vh] w-full sm:h-[60vh]">
        <iframe
          src="https://maps.google.com/maps?q=Silver+Storey+Bhowanipore+Kolkata&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Silver Storey Head Office Location"
        />
      </div>
    </div>
  );
}
