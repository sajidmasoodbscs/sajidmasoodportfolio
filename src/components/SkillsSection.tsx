import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Bootstrap"]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication", "Middleware", "Multer", "Morgan", "Swagger"]
    },
    {
      title: "Databases",
      icon: "🗄️", 
      skills: ["MongoDB", "MySQL", "Mongoose", "Database Design", "Query Optimization", "Indexing", "Data Modeling"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS Lambda", "S3 Buckets", "QuickSight", "Heroku", "Vercel", "Docker", "CI/CD", "Server Management"]
    },
    {
      title: "E-commerce & CMS",
      icon: "🛒",
      skills: ["Shopify Apps", "Shopify Plus", "WordPress", "Webflow", "Payment Integration", "Inventory Management"]
    },
    {
      title: "Tools & Workflow",
      icon: "🔧",
      skills: ["Git", "GitHub", "Bitbucket", "Jira", "Trello", "VS Code", "Postman", "Chrome DevTools"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-header mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`skill-card animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Additional Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "AJAX", "Bootstrap", "Redux", "Context API", "Socket.io", "JSON Web Tokens",
                "OAuth", "REST APIs", "Microservices", "Agile Development", "Scrum",
                "Test-Driven Development", "Responsive Design", "Progressive Web Apps"
              ].map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;