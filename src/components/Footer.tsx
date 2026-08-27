import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-border/60">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <BrandLogo size="lg" />
              <p className="text-muted-foreground">
                Full Stack MERN Developer crafting scalable web solutions 
                with modern technologies and best practices.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Ready to work together?
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a
                      href="https://github.com/sajidmasoodbscs"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/sajid-masood-380707112/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                    asChild
                  >
                    <a href="#contact" aria-label="Email / contact">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sajid Masood.
            </p>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:text-primary transition-smooth"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;