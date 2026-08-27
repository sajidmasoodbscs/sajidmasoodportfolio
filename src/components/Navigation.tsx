import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { downloadCv } from '@/lib/downloadCv';
import BrandLogo from '@/components/BrandLogo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 w-[min(1120px,calc(100%-1.5rem))] -translate-x-1/2 rounded-full transition-smooth ${
        scrolled ? 'bg-white/85 shadow-lg backdrop-blur-xl border border-border/70' : 'bg-white/55 backdrop-blur-md border border-white/70'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <BrandLogo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-foreground/80 hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="primary-gradient"
              onClick={downloadCv}
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground/80 hover:text-primary transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full primary-gradient mt-2"
              onClick={() => {
                setIsOpen(false);
                downloadCv();
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;