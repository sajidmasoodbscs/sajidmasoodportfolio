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

      // About — soft flip + rise from alternating sides
      const aboutCopy = page.querySelector('#about .about-copy');
      if (aboutCopy) {
        gsap.fromTo(
          aboutCopy,
          { x: -48, opacity: 0, filter: 'blur(8px)' },
          {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: aboutCopy, start: 'top 82%', once: true },
          }
        );
      }

      const aboutCards = page.querySelectorAll('#about .about-card');
      aboutCards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          {
            x: fromLeft ? -60 : 60,
            y: 40,
            opacity: 0,
            rotateY: fromLeft ? -18 : 18,
            transformPerspective: 900,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.85,
            delay: i * 0.12,
            ease: 'power3.out',
            clearProps: 'filter',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          }
        );
      });

      // Skills — radial wipe + rise (unique vs About flip / Projects curtain)
      const skillCards = gsap.utils.toArray<HTMLElement>(page.querySelectorAll('#skills .skills-card'));
      skillCards.forEach((card, i) => {
        const col = i % 3;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 36,
            scale: 0.96,
            clipPath: 'circle(0% at 50% 80%)',
            rotate: col === 0 ? -2.5 : col === 2 ? 2.5 : 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: 'circle(140% at 50% 50%)',
            rotate: 0,
            duration: 0.95,
            delay: (i % 3) * 0.09,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      const skillBadges = page.querySelector('#skills .skills-extra');
      if (skillBadges) {
        gsap.fromTo(
          skillBadges.querySelectorAll('.skill-extra-badge'),
          { y: 16, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.45,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: { trigger: skillBadges, start: 'top 88%', once: true },
          }
        );
      }

      // Projects — clip-path curtain reveal + image ease-in
      const projectCards = page.querySelectorAll('#projects .project-card');
      projectCards.forEach((card, i) => {
        const img = card.querySelector('.project-card-image');
        const col = i % 3;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 48,
            clipPath: 'inset(12% 8% 12% 8% round 16px)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0% round 16px)',
            duration: 0.95,
            delay: (col % 3) * 0.08,
            ease: 'power4.out',
            scrollTrigger: { trigger: card, start: 'top 90%', once: true },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12, opacity: 0.55 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 90%', once: true },
            }
          );
        }
      });
    },
    { scope: root }
  );
}
