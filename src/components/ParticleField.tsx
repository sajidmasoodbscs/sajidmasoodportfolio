import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: 1 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 45,
  detectRetina: true,
  particles: {
    number: { value: 70, density: { enable: true } },
    color: { value: ['#2563eb', '#0d9488', '#7c3aed'] },
    links: {
      enable: true,
      color: '#3b82f6',
      distance: 140,
      opacity: 0.45,
      width: 1.2,
    },
    move: {
      enable: true,
      speed: 0.7,
      outModes: { default: 'bounce' },
    },
    opacity: { value: 0.45 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.45 } },
    },
  },
};

const ParticleCanvas = () => (
  <Particles id="site-particles" className="particle-field" options={options} />
);

const ParticleField = () => (
  <ParticlesProvider init={loadSlim}>
    <ParticleCanvas />
  </ParticlesProvider>
);

export default ParticleField;
