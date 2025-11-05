import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/sajidmasood.jpeg';
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">

           {/* Profile Image */}
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Sajid Masood" 
              className="w-40 h-40 rounded-full border-4 border-primary shadow-lg object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Sajid Masood</span>
            <span className="block section-header">Full Stack MERN Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting scalable web applications with modern technologies. 
            Expert in React, Node.js, and cloud deployments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="primary-gradient hover:shadow-primary transition-spring text-lg px-8 py-6"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary text-lg px-8 py-6 transition-spring"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
         <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com/sajidmasoodbscs" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Github className="h-6 w-6" />
            </Button>
          </a>

          <a 
            href="https://www.linkedin.com/in/sajid-masood-380707112/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>

          <a 
            href="mailto:sajidmasood351@gmail.com"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Mail className="h-6 w-6" />
            </Button>
          </a>
        </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about">
            <ArrowDown className="h-8 w-8 text-primary animate-glow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;