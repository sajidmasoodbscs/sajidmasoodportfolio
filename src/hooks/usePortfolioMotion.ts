import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RefObject } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function usePortfolioMotion(root: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const page = root.current;
      if (!page) return;

      gsap.from('.hero-kicker', { y: 18, duration: 0.6, ease: 'power3.out' });
      gsap.from('.hero-title span', { y: 50, stagger: 0.12, duration: 0.8, ease: 'power4.out' });
      gsap.from('.hero-copy', { y: 24, duration: 0.7, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-cta > *', { y: 22, stagger: 0.08, duration: 0.55, delay: 0.28, ease: 'power3.out' });
      gsap.from('.hero-profile', { x: 40, duration: 0.9, ease: 'power3.out' });
      gsap.from('.glass-panel', { y: 30, stagger: 0.08, duration: 0.6, delay: 0.35, ease: 'power3.out' });

      page.querySelectorAll('.section-header').forEach((heading) => {
        gsap.from(heading, {
          y: 36,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: { trigger: heading, start: 'top 86%', once: true },
        });
      });

      const cards = page.querySelectorAll('.skill-card, .project-card');
      ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        interval: 0.1,
        batchMax: 6,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 56, scale: 0.94, rotate: 1.2 },
            {
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.75,
              stagger: 0.1,
              ease: 'power4.out',
              overwrite: 'auto',
            }
          );
        },
      });
    },
    { scope: root }
  );
}
