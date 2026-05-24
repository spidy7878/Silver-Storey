'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Returns `{ ref, isInView }`.
 * Attach `ref` to any HTMLDivElement; `isInView` flips to `true` once that
 * element scrolls into the viewport (fires only once).
 */
export function useInView(threshold = 0.12) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}
