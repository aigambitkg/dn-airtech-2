/* ============================================================
   useScrollAnimation – Intersection Observer Hook
   Triggers CSS animations when elements enter viewport
   ============================================================ */

import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useStaggerAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              if (element) {
                element.textContent = Math.floor(start).toLocaleString('de-DE');
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
