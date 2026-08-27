import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import experienceBg from '@/assets/bg-experience.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const themes = [
  {
    card: 'bg-gradient-to-br from-sky-50 via-white to-blue-100 border-blue-200/80 shadow-blue-200/40',
    accent: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    dot: 'bg-blue-600',
    chip: 'border-blue-300/70 text-blue-800',
    glow: 'from-blue-500/20 to-sky-400/10',
  },
  {
    card: 'bg-gradient-to-br from-teal-50 via-white to-emerald-100 border-teal-200/80 shadow-teal-200/40',
    accent: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-800 border-teal-200',
    dot: 'bg-teal-600',
    chip: 'border-teal-300/70 text-teal-800',
    glow: 'from-teal-500/20 to-emerald-400/10',
  },
  {
    card: 'bg-gradient-to-br from-amber-50 via-white to-orange-100 border-amber-200/80 shadow-amber-200/40',
    accent: 'text-amber-800',
    badge: 'bg-amber-100 text-amber-900 border-amber-200',
    dot: 'bg-amber-600',
    chip: 'border-amber-300/70 text-amber-900',
    glow: 'from-amber-500/20 to-orange-400/10',
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stack = stackRef.current;
      if (!section || !stack) return;

      const cards = gsap.utils.toArray<HTMLElement>(stack.querySelectorAll('.experience-stack-card'));
      if (cards.length < 2) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        stack.classList.add('experience-stack--static');
        gsap.set(cards, { clearProps: 'all' });
        return;
      }

      gsap.set(cards[0], { yPercent: 0, scale: 1, opacity: 1, rotate: 0 });
      cards.slice(1).forEach((card) => {
        gsap.set(card, { yPercent: 110, scale: 0.94, opacity: 1, rotate: 3 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * (cards.length + 0.35)}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;
        const prev = cards[index - 1];

        tl.to(
          prev,
          {
            scale: 0.96 - index * 0.015,
            yPercent: -4 * index,
            opacity: 1,
            duration: 1,
            ease: 'none',
          },
          index - 1
        ).to(
          card,
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'power2.out',
          },
          index - 1
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-20"
    >
      <SectionAtmosphere image={experienceBg} wash="peach" />
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-header mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Scroll to stack each role — latest first
            </p>
          </div>

          <div
            ref={stackRef}
            className="experience-stack relative mx-auto h-[min(68vh,560px)] md:h-[min(70vh,620px)]"
          >
            {experiences.map((exp, index) => {
              const theme = themes[index];
              return (
                <Card
                  key={index}
                  className={`experience-stack-card absolute inset-0 overflow-hidden rounded-2xl border shadow-xl ${theme.card}`}
                  style={{ zIndex: index + 1 }}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${theme.glow} blur-2xl`}
                  />
                  <CardContent className="relative h-full overflow-y-auto p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <Badge className={`${theme.badge} border font-medium`}>
                        {exp.period}
                      </Badge>
                      <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                        Role {index + 1} / {experiences.length}
                      </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-4">
                      <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1 md:text-2xl">
                          {exp.title}
                        </h3>
                        <p className={`font-semibold ${theme.accent}`}>
                          {exp.company}
                        </p>
                      </div>

                      <div className="md:col-span-3 space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {exp.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-sm text-muted-foreground flex items-start"
                              >
                                <span
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${theme.dot}`}
                                />
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
                              className={`text-xs ${theme.chip}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
