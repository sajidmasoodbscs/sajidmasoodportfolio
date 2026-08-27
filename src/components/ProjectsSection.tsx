import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import rewardPlatformImg from '@/assets/Reward_Platform_Screenshot-1.png';
import doctorAppointmentImg from '@/assets/Doctor Appointment System Screenshot-1.png';
import integritiCrmImg from '@/assets/integriti-crm-screenshot-1.png';
import greenmindCrmImg from '@/assets/greenmind.png';
import staffingImg from '@/assets/staffing-1.png';
import studioImg from '@/assets/studio-1.png';
import mxsocalImg from '@/assets/mxsocal.png';
import hirundoImg from '@/assets/hirundo.png';
import lifeScriptImg from '@/assets/lifescript.png';
import foremostImg from '@/assets/foremost-1.png';
import checkMyRideImg from '@/assets/check-my-ride.webp';
import nettPharmacyImg from '@/assets/nett-pharmacy.webp';
import callAVanImg from '@/assets/call-a-van.webp';
import skinAndHairImg from '@/assets/skin-and-hair.webp';
import oushkPharmacyImg from '@/assets/oushk-pharmacy.webp';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import projectsBg from '@/assets/bg-projects.png';

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
      category: "Website Development",
      liveUrl: "https://integritistaffing.com/"
    },
    {
      title: "Integriti Studio Website",
      description: "Creative studio portfolio website showcasing design services and creative projects. Built with Next.js featuring modern animations and responsive design.",
      technologies: ["Next.js", "React", "GSAP", "Tailwind CSS"],
      image: studioImg,
      featured: false,
      category: "Website Development",
      liveUrl: "https://www.integritistudio.com/"
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
      title: "Check My Ride",
      description: "Vehicle inspection platform that simplifies used-car inspections for buyers purchasing remotely or locally. Customers book a pre-purchase inspection, connect with qualified mechanics, and receive detailed reports before buying. Integriti Studio built a fully automated lifecycle: online booking, intelligent assignment to certified mechanics, structured quality review, and Stripe payments after approval.",
      technologies: ["Webflow", "Next.js", "Node.js", "Airtable", "Stripe Connect Express"],
      image: checkMyRideImg,
      featured: true,
      category: "Marketplace",
      liveUrl: "https://check-my-ride.onrender.com/Booking"
    },
    {
      title: "Call A Van",
      description: "On-demand platform (callavan.live) connecting customers with nearby van drivers for house removals, single-item transport, furniture collection, storage and student moves, and waste runs. Built from the ground up: marketing site, driver and customer experiences, real-time map of live nearby drivers, driver verification before going live, and a reliable backend so customers can call a driver directly with no middleman booking flow.",
      technologies: ["Supabase", "JavaScript", "Webflow", "Node.js", "Flutter"],
      image: callAVanImg,
      featured: true,
      category: "Marketplace",
      liveUrl: "https://www.callavan.live/"
    },
    {
      title: "Foremost",
      description: "Corporate MERN site for Foremost, deployed on AWS. Content is driven from the database so admins can manage company history, products, and pages from an admin portal. The site covers Foremost’s story: Imperial Oil asked Bruce Nodwell to build vehicles for muskeg; early North King designs were limited, then he focused on soft tracks and single rows of wheels for large tracked vehicles.",
      technologies: ["MERN", "React", "Node.js", "Express", "MongoDB", "AWS", "Admin CMS"],
      image: foremostImg,
      featured: true,
      category: "Corporate Website",
      liveUrl: "https://www.foremost.ca/"
    },
    {
      title: "MX SoCal",
      description: "Motocross rental landing page is live while the client finalizes brand assets. Next phase is a complete MERN bike rental platform: fleet booking, rider experience, and paddock-style support for Southern California riders.",
      technologies: ["MERN", "React", "Node.js", "Express", "MongoDB", "AWS"],
      image: mxsocalImg,
      featured: true,
      category: "E-commerce / Rentals",
      liveUrl: "https://www.mxsocal.com/"
    },
    {
      title: "Nett Pharmacy",
      description: "Pharmaceutical and beauty retail storefront for a brand with 14,000+ SKUs across healthcare, wellness, skincare, and beauty. Replaced a limited setup with a modern Shopify eCommerce experience that can handle volume, product complexity, and the customer experience needed to compete online.",
      technologies: ["Shopify", "Liquid", "HTML", "JavaScript"],
      image: nettPharmacyImg,
      featured: true,
      category: "E-commerce",
      liveUrl: "https://nettpharmacy.com/"
    },
    {
      title: "Skin and Hair Center",
      description: "Dermatology and skin/hair care brand combining clinical services with an online store for skincare, haircare, wellness, and related products. Shopify storefront designed to match in-person professionalism while making it simple to discover products, understand options, and check out.",
      technologies: ["Shopify"],
      image: skinAndHairImg,
      featured: true,
      category: "E-commerce",
      liveUrl: "https://skinandhaircenter.com/"
    },
    {
      title: "Oushk Pharmacy",
      description: "Patient-first, pharmacist-led online pharmacy for consultations, treatments, healthcare products, weight-loss programs, nutrition coaching, and ongoing support. Improved a complex category structure, richer product content, personalization for cross-selling, and a simpler checkout to reduce cart abandonment.",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      image: oushkPharmacyImg,
      featured: true,
      category: "E-commerce",
      liveUrl: "https://www.oushkpharmacy.com/"
    },
    {
      title: "Hirundo",
      description: "Custom landing page for an AI consulting company, implemented pixel-perfect from Figma. Hover on the brain visual, interactive button states, and subtle scroll-based animations for a modern, premium feel. Smooth performance, accurate typography and colors, deployed on GitHub Pages and ready for a custom domain. Hirundo builds custom and outsourced AI systems—from design to deployment—as an external AI unit or around a client’s business processes.",
      technologies: ["React", "Tailwind CSS", "Material UI"],
      image: hirundoImg,
      featured: true,
      category: "Landing Page",
      liveUrl: "https://hirundo.tech/"
    },
    {
      title: "Life Script",
      description: "TheLifeScript is a storytelling platform where users capture and preserve life narratives in keepsake books. Guided prompts, voice-to-text, photo enhancements, and editor tools help people reflect on and share their journey. Packages include premium hardcover books and lifetime platform access, blending intuitive UX with scalable storytelling features.",
      technologies: ["Next.js", "React", "Front-End Development"],
      image: lifeScriptImg,
      featured: true,
      category: "Web Application"
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <SectionAtmosphere image={projectsBg} wash="lavender" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-header mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of recent work demonstrating full-stack development capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
               <Card 
                 key={index}
                 className="project-card flex flex-col h-full"
               >
                 <CardHeader className="pb-3">
                   <div className="aspect-[3/2] relative overflow-hidden rounded-lg mb-4 bg-slate-100/90 border border-border/50">
                     <img 
                       src={project.image} 
                       alt={project.title}
                       loading="lazy"
                       className="project-card-image absolute inset-0 h-full w-full object-contain p-2"
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
                
                <CardContent className="space-y-4 flex flex-col flex-1">
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 hover:border-primary transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <Badge variant="outline" className="text-xs border-primary/30">
                        +{project.technologies.length - 5}
                      </Badge>
                    )}
                  </div>
                  
                   <div className="flex gap-3 pt-4 mt-auto">
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
                         Interview
                       </Button>
                     )}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
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