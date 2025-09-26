import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2021 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelance / Contract Work",
      description: "Leading development of multiple MERN stack applications, Shopify apps, and cloud-based solutions. Specialized in e-commerce platforms, CMS integrations, and AWS services.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Shopify"],
      achievements: [
        "Delivered 15+ full-stack applications",
        "Built custom Shopify apps serving 100+ merchants",
        "Implemented AWS solutions reducing costs by 40%"
      ]
    },
    {
      period: "2019 - 2021", 
      title: "MERN Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Developed responsive web applications using React and Node.js. Worked with cross-functional teams on agile development projects using Jira and Git workflows.",
      technologies: ["React", "Express.js", "MySQL", "Git", "Jira"],
      achievements: [
        "Improved application performance by 50%",
        "Led team of 3 junior developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      period: "2018 - 2019",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Created responsive websites and web applications with modern JavaScript frameworks. Collaborated with designers and backend developers to deliver pixel-perfect implementations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "WordPress"],
      achievements: [
        "Delivered 20+ responsive websites",
        "Reduced page load times by 60%",
        "Mentored 2 junior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
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
                className={`skill-card animate-slide-in-left`}
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