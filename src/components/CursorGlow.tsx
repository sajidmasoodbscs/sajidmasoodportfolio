import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const glow = glowRef.current;
    if (!glow) return;

    const xTo = gsap.quickTo(glow, 'x', { duration: 0.45, ease: 'power3.out' });
    const yTo = gsap.quickTo(glow, 'y', { duration: 0.45, ease: 'power3.out' });

    const move = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden />;
};

export default CursorGlow;
