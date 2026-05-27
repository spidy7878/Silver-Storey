import { useEffect, useRef, useState } from 'react';

export function useCountOnVisible(target: number, duration = 800) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            setVisible(true);
            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);

            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const v = Math.round(ease(t) * target);
              setValue(v);
              if (t < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value, visible } as const;
}
