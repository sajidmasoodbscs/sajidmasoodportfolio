import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, Play, Sparkles } from 'lucide-react';
import profileImage from '@/assets/sajidmasood.jpeg';
import { downloadCv } from '@/lib/downloadCv';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import aboutBg from '@/assets/bg-about.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <SectionAtmosphere image={aboutBg} wash="sky" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="hero-kicker inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Available for full-stack work
            </div>

            <h1 className="hero-title text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="block text-foreground">Sajid Masood</span>
              <span className="block section-header mt-2">I build products that feel fast, clear, and alive.</span>
            </h1>

            <p className="hero-copy text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Senior MERN engineer for Shopify apps, CRMs, and cloud platforms.
              React, Node.js, and AWS — shipped in production, not just in decks.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="primary-gradient hover:shadow-primary text-lg px-8 py-6" asChild>
                <a href="#projects">View the work</a>
              </Button>
              <Button size="lg" className="accent-gradient hover:shadow-accent text-lg px-8 py-6" onClick={downloadCv}>
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="bg-white/70 backdrop-blur text-lg px-8 py-6" asChild>
                <a href="#contact">Let’s talk</a>
              </Button>
            </div>

            <div className="hero-social flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#intro"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 py-1.5 pl-1.5 pr-4 text-sm font-medium text-primary shadow-sm backdrop-blur transition-smooth hover:border-primary/40"
              >
                <span className="primary-gradient flex h-8 w-8 items-center justify-center rounded-full text-white">
                  <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
                </span>
                Watch intro
              </a>
              <a href="https://github.com/sajidmasoodbscs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="rounded-full bg-white/80">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/sajid-masood-380707112/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="rounded-full bg-white/80">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="#contact" aria-label="Contact">
                <Button variant="outline" size="icon" className="rounded-full bg-white/80">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="hero-profile flex justify-center">
            <div className="relative">
              <div className="hero-ring" />
              <img
                src={profileImage}
                alt="Sajid Masood"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] object-cover border-4 border-white shadow-elegant"
              />
              <div className="absolute -bottom-4 -left-4 z-20 max-w-[14rem] rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur md:max-w-none">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Focus</p>
                <p className="text-sm font-semibold leading-snug md:text-base">
                  MERN · CMS (Shopify, WordPress, Webflow) · Deployments
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            ['7+', 'Years shipping'],
            ['MERN', 'Core stack'],
            ['Shopify', 'Apps & stores'],
            ['Cloud', 'AWS ready'],
          ].map(([value, label]) => (
            <div key={label} className="glass-panel rounded-2xl px-4 py-5 text-center">
              <div className="text-2xl font-black text-primary">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary" aria-label="Scroll to about">
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
