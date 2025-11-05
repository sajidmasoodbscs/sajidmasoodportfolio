import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "MERN stack expertise with modern frameworks and best practices"
    },
    {
      icon: Database,
      title: "Database Design", 
      description: "MongoDB, MySQL with optimized queries and data modeling"
    },
    {
      icon: Globe,
      title: "Cloud Deployment",
      description: "AWS, Heroku, Vercel with scalable infrastructure"
    },
    {
      icon: Smartphone,
      title: "E-commerce Solutions",
      description: "WordPress, Shopify Stores, Shopify Apps(mern), and Webflow platforms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-header mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate MERN stack developer with extensive experience in building 
              scalable web applications, e-commerce solutions, and cloud-based systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl font-bold text-foreground">
                Crafting Digital Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With expertise spanning the entire MERN stack, I specialize in creating 
                robust web applications that scale. From conception to deployment, I handle 
                every aspect of development including database design, API development, 
                frontend implementation, and cloud infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've worked extensively with modern tools and frameworks, implementing 
                best practices in version control, project management, and deployment 
                strategies. My experience includes Shopify app development, CMS integration, 
                and building analytics dashboards with AWS services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className={`skill-card animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <highlight.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;