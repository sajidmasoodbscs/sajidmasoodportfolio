import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import experienceBg from '@/assets/bg-experience.png';

const ExperienceSection = () => {
  const experiences = [
    {
      period: "Apr 2023 – Present",
      title: "Senior Software Engineer",
      company: "Integriti",
      description: "Leading development across enterprise applications, Shopify solutions, e-commerce platforms, and full-stack web systems. Senior frontend work on a large-scale .NET / Razor Pages billing and claims system, plus custom Shopify apps (Node.js, Express, React, PostgreSQL, Polaris) and CMS sites on Shopify, Webflow, and WordPress.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", ".NET", "Razor Pages", "Shopify", "PostgreSQL"],
      achievements: [
        "Built complex data-driven UIs: tables, filtering, forms, modals, and multi-step workflows",
        "Delivered Shopify Admin/Storefront API apps, theme work in Liquid, and Klaviyo tracking",
        "Implemented REST APIs, auth/RBAC, and production-ready React and Next.js frontends"
      ]
    },
    {
      period: "Apr 2021 – Apr 2023",
      title: "Associate Node.js Developer",
      company: "Alfain Technologies",
      description: "Developed and maintained large-scale web applications with Node.js and Express. Designed REST APIs and backend services on MongoDB and MySQL, including bulk processing and reporting.",
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "AWS RDS", "QuickSight", "Jenkins"],
      achievements: [
        "Built bulk-processing batches and complex data workflows for large datasets",
        "Created database reports and analytics with AWS QuickSight and AWS RDS",
        "Supported releases through Jenkins CI/CD, code reviews, and development standards"
      ]
    },
    {
      period: "Jan 2019 – Apr 2021",
      title: "Backend Developer / Intern",
      company: "Alfain Technologies",
      description: "Developed and maintained the company website frontend (HTML, CSS, JavaScript) and backend services, with MySQL-driven features and participation in code reviews and team troubleshooting.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      achievements: [
        "Shipped database-driven website features on MySQL",
        "Contributed to coding standards, reviews, and production support"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <SectionAtmosphere image={experienceBg} wash="peach" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-header mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building scalable solutions across various industries and technologies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="skill-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <Badge 
                        variant="secondary" 
                        className="mb-3 text-primary font-medium"
                      >
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-primary/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;