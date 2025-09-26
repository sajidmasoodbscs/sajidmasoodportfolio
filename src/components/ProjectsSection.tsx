import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import rewardPlatformImg from '@/assets/reward-platform-1.jpg';
import doctorAppointmentImg from '@/assets/doctor-appointment-1.jpg';
import integritiCrmImg from '@/assets/integriti-crm-screenshot-1.jpg';
import greenmindCrmImg from '@/assets/greenmind-crm-screenshot-1.jpg';
import staffingImg from '@/assets/staffing-1.jpg';
import studioImg from '@/assets/studio-1.jpg';
import wordpressImg from '@/assets/wordpress-site-1.jpg';
import shopifyImg from '@/assets/shopify-store-1.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Reward Platform",
      description: "Backend development for comprehensive rewards platform where users earn points from bus and train ticket purchases. Features partner portal, admin dashboard, and customer support system with multi-portal architecture.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Payment APIs", "Email Integration"],
      image: rewardPlatformImg,
      featured: true,
      category: "Backend Development"
    },
    {
      title: "Medical Appointment System",
      description: "Full-stack medical appointment system with admin portal for doctor management, doctor portal with EHR integration (Athena, eClinicalWork), and patient booking portal. Complete appointment lifecycle management.",
      technologies: ["React", "Node.js", "MongoDB", "EHR APIs", "Email Automation", "Calendar Integration"],
      image: doctorAppointmentImg,
      featured: true,
      category: "Full-Stack Development"
    },
    {
      title: "Integriti CRM",
      description: "Lead-developed CRM system for managing leads, opportunities, clients, contacts, meetings, and tasks. Features role-based user management, lead qualification, and opportunity conversion tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Role Management", "Task Automation"],
      image: integritiCrmImg,
      featured: true,
      category: "CRM Development"
    },
    {
      title: "GreenMinds CRM",
      description: "Advanced project management CRM enabling companies to manage consultants, clients, and projects. Features Microsoft 365 integration, call management, email automation, and live chat support.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Microsoft 365 API", "Real-time Chat"],
      image: greenmindCrmImg,
      featured: true,
      category: "CRM Development",
      liveUrl: "https://frontend-next-3937b71c38c6.herokuapp.com/"
    },
    {
      title: "Integriti Staffing Website",
      description: "Corporate website for staffing company built with Next.js. Modern responsive design with service showcases, team profiles, and client testimonials.",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO Optimization"],
      image: staffingImg,
      featured: false,
      category: "Website Development"
    },
    {
      title: "Integriti Studio Website",
      description: "Creative studio portfolio website showcasing design services and creative projects. Built with Next.js featuring modern animations and responsive design.",
      technologies: ["Next.js", "React", "GSAP", "Tailwind CSS"],
      image: studioImg,
      featured: false,
      category: "Website Development"
    },
    {
      title: "WordPress Sites Collection",
      description: "Developed 4 custom WordPress websites with custom themes, plugins, and responsive designs. Each site tailored to specific business requirements and optimized for performance.",
      technologies: ["WordPress", "PHP", "Custom Themes", "Plugin Development", "SEO"],
      image: wordpressImg,
      featured: false,
      category: "CMS Development"
    },
    {
      title: "Shopify Stores & Custom Apps",
      description: "Developed 2 Shopify stores and custom Shopify applications for inventory management and analytics. Apps integrate with Shopify APIs for real-time functionality.",
      technologies: ["Shopify API", "React", "Node.js", "Webhooks", "Store Analytics"],
      image: shopifyImg,
      featured: false,
      category: "E-commerce Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-header mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of recent work demonstrating full-stack development capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
               <Card 
                 key={index}
                 className="project-card animate-scale-in hover:shadow-lg transition-all duration-300"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <CardHeader>
                   <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                     />
                   </div>
                   <div className="flex items-start justify-between">
                     <div>
                       <CardTitle className="text-xl text-foreground mb-2">
                         {project.title}
                       </CardTitle>
                       <div className="flex gap-2 flex-wrap">
                         {project.featured && (
                           <Badge variant="secondary">
                             Featured
                           </Badge>
                         )}
                         <Badge variant="outline" className="text-xs">
                           {project.category}
                         </Badge>
                       </div>
                     </div>
                   </div>
                 </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 hover:border-primary transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                   <div className="flex gap-3 pt-4">
                     <Button 
                       variant="outline" 
                       size="sm"
                       className="border-primary/30 hover:border-primary transition-smooth"
                       disabled
                     >
                       <Github className="h-4 w-4 mr-2" />
                       Code (NDA)
                     </Button>
                     {project.liveUrl ? (
                       <Button 
                         size="sm"
                         className="primary-gradient hover:shadow-primary transition-spring"
                         onClick={() => window.open(project.liveUrl, '_blank')}
                       >
                         <ExternalLink className="h-4 w-4 mr-2" />
                         Live Demo
                       </Button>
                     ) : (
                       <Button 
                         size="sm"
                         variant="outline"
                         className="border-primary/30"
                         disabled
                       >
                         <ExternalLink className="h-4 w-4 mr-2" />
                         Available in Interview
                       </Button>
                     )}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary text-lg px-8 py-6 transition-spring"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;