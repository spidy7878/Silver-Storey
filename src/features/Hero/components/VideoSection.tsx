import React from 'react';

const VIDEO_ITEMS = [1, 2, 3, 4] as const;

function VideoCard({ item }: { item: number }) {
  return (
    <div className="group relative aspect-video w-full cursor-pointer overflow-hidden bg-black shadow-lg transition-transform hover:-translate-y-1">
      {/* Fallback for YouTube embed mockup */}
      <img
        src="/images/laptop.avif"
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
      <div className="absolute top-0 left-0 flex w-full items-start justify-between bg-linear-to-b from-black/80 to-transparent p-4">
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
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-linear-to-t from-black/80 to-transparent p-4 pb-3">
        <div className="flex gap-4">
          {/* Share icon */}
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
          {/* Watch Later icon */}
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
  );
}

export default function VideoSection() {
  return (
    <div className="mx-auto max-w-360 px-6 py-24 sm:py-32">
      {/* Mobile marquee */}
      <div className="-mx-6 overflow-hidden sm:hidden">
        <div
          className="flex hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 25s linear infinite' }}
        >
          <div className="flex shrink-0 gap-4 pr-4">
            {VIDEO_ITEMS.map((item) => (
              <div key={item} className="w-[260px] shrink-0">
                <VideoCard item={item} />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-4 pr-4">
            {VIDEO_ITEMS.map((item) => (
              <div key={`clone-${item}`} className="w-[260px] shrink-0">
                <VideoCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop grid */}
      <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {VIDEO_ITEMS.map((item) => (
          <VideoCard key={item} item={item} />
        ))}
      </div>
    </div>
  );
}
