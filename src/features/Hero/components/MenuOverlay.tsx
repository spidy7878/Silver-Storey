'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  projectPages?: { title: string; slug: string }[];
}

const STATIC_TOP = ['Home'];
const STATIC_BOTTOM = [
  'Blog',
  'Contact',
  'How it Works',
  'About Us',
  'Pricing Structure',
  'Terms & Conditions',
];

// Items that get an orange dot to their right
const dotsAfter = new Set(['Contact', 'How it Works']);

// Items that route to actual pages (others use hash anchors)
const menuRoutes: Partial<Record<string, string>> = {
  Home: '/',
  Blog: '/blog',
  Contact: '/contact',
  'How it Works': '/how-it-works',
  'About Us': '/about-us',
  'Pricing Structure': '/pricing-structure',
  'Terms & Conditions': '/terms-conditions',
};

export default function MenuOverlay({
  isOpen,
  onClose,
  projectPages = [],
}: MenuOverlayProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex h-screen flex-col overflow-hidden"
      style={{
        // Background image with warm taupe overlay to match screenshot
        backgroundImage:
          'linear-gradient(rgba(210,195,178,0.62), rgba(210,195,178,0.62)))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(12px) saturate(0.8) brightness(1.02)',
        WebkitBackdropFilter: 'blur(12px) saturate(0.8) brightness(1.02)',
      }}
    >
      {/* Social icons row */}
      <div className="flex justify-center gap-6 pt-8 pb-4">
        {['Facebook', 'LinkedIn', 'Instagram', 'YouTube'].map((label) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  {label[0]}
                </text>
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 items-center justify-center px-6">
        <ul
          className="w-full max-w-3xl text-center"
          style={{ listStyle: 'none', padding: 0, margin: 0 }}
        >
          {/* Static top: Home only */}
          {STATIC_TOP.map((item, i) => (
            <li key={item} style={{ position: 'relative', display: 'block' }}>
              {i === 0 && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.18)',
                    borderRadius: 6,
                    pointerEvents: 'none',
                  }}
                />
              )}
              <Link
                href={
                  menuRoutes[item] ??
                  `#${item.toLowerCase().replace(/[\s&]+/g, '-')}`
                }
                onClick={onClose}
                style={{
                  display: 'block',
                  position: 'relative',
                  padding: '10px 0',
                  fontFamily:
                    'var(--font-space-grotesk), system-ui, sans-serif',
                  fontSize: 'clamp(11px, 2.25vw, 26px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#ffffff',
                  textDecoration: 'none',
                  lineHeight: 1.25,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Dynamic pages from Sanity */}
          {projectPages.map(({ title, slug }) => (
            <li key={slug} style={{ position: 'relative', display: 'block' }}>
              <Link
                href={`/projects/${slug}`}
                onClick={onClose}
                style={{
                  display: 'block',
                  position: 'relative',
                  padding: '10px 0',
                  fontFamily:
                    'var(--font-space-grotesk), system-ui, sans-serif',
                  fontSize: 'clamp(11px, 2.25vw, 26px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#ffffff',
                  textDecoration: 'none',
                  lineHeight: 1.25,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {title}
              </Link>
            </li>
          ))}

          {/* Static bottom items: Contact, How it Works, … */}
          {STATIC_BOTTOM.map((item) => (
            <li key={item} style={{ position: 'relative', display: 'block' }}>
              <Link
                href={
                  menuRoutes[item] ??
                  `#${item.toLowerCase().replace(/[\s&]+/g, '-')}`
                }
                onClick={onClose}
                style={{
                  display: 'block',
                  position: 'relative',
                  padding: '10px 0',
                  fontFamily:
                    'var(--font-space-grotesk), system-ui, sans-serif',
                  fontSize: 'clamp(11px, 2.25vw, 26px)',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  color: '#ffffff',
                  textDecoration: 'none',
                  lineHeight: 1.25,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {item}
              </Link>
              {dotsAfter.has(item) && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: 'calc(50% - 260px)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#e05a1a',
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Close Button (centered near bottom) */}
      <div className="pb-10">
        <div className="flex items-center justify-center">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white/20"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
