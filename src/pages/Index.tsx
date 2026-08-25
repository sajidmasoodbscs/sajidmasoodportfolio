import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { usePortfolioMotion } from '@/hooks/usePortfolioMotion';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  useSmoothScroll();
  usePortfolioMotion(pageRef);

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
