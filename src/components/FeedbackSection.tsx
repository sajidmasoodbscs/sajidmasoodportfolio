import { useCallback, useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionAtmosphere from '@/components/SectionAtmosphere';
import feedbackBg from '@/assets/bg-feedback.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Feedback = {
  name: string;
  project: string;
  feedback: string;
  rating: number;
  country: string;
  avatar: string;
  tone: string;
};

const feedbacks: Feedback[] = [
  {
    name: 'Matthew Brown',
    project: 'Elementor Website Updates & Optimisation',
    feedback:
      'Good experience overall.',
    rating: 5,
    country: 'South Africa',
    avatar: 'https://i.pravatar.cc/160?img=12',
    tone: '#dbeafe',
  },
  {
    name: 'Binyam Alehegne.',
    project: 'Websites for AI startup',
    feedback:
      '10/10 Great experience working with Sajid, went above and beyond expectations.',
    rating: 5,
    country: 'United Kingdom',
    avatar: 'https://i.pravatar.cc/160?img=33',
    tone: '#e0e7ff',
  },
  {
    name: 'Alexander Galloway.',
    project: 'Call A Van Platform',
    feedback:
      'Built our driver map and booking flows with care. Smooth for customers and drivers, and trade-offs were always explained clearly.',
    rating: 5,
    country: 'United Kingdom',
    avatar: 'https://i.pravatar.cc/160?img=52',
    tone: '#ffedd5',
  },
  {
    name: 'Eli Cuneo.',
    project: 'Check My Ride',
    feedback:
      'Super professional and responsive. Highly recommended!',
    rating: 5,
    country: 'United States',
    avatar: 'https://i.pravatar.cc/160?img=15',
    tone: '#cffafe',
  },
  {
    name: 'Giacomo Maraglino',
    project: 'Hirundo',
    feedback:
      'Sajid isd a good and honest guy. He was very careful of every detail of the website he coded and he took it until the end, he even changed things after milestone release for better results, I suggest this guy if you wanna build a cool website and need someone to actually do it',
    rating: 5,
    country: 'Italy',
    avatar: 'https://i.pravatar.cc/160?img=56',
    tone: '#ccfbf1',
  },
  {
    name: 'Lisa Kruse',
    project: 'mxsocal.com',
    feedback:
      'I enjoyed working on this project. All expectations and requirements were communicated up front and the client was responsive to any of my requests for clarification. I liked working with her and hope to have the opportunity to work with her again.',
    rating: 5,
    country: 'Italy',
    avatar: 'https://i.pravatar.cc/160?img=47',
    tone: '#ffe4e6',
  },
  {
    name: 'Imran Pervez',
    project: 'encalife.com',
    feedback:
      'Outstanding freelancer! They linked my Gem pages quickly and flawlessly. Communication was smooth, the work was completed ahead of schedule, and the quality was top-notch. I highly recommend them to anyone looking for efficient and professional service',
    rating: 5,
    country: 'United Kingdom',
    avatar: 'https://i.pravatar.cc/160?img=68',
    tone: '#fef3c7',
  },
  {
    name: 'Luis Scura',
    project: 'Basic GSAP Integration using ScrollTrigger',
    feedback:
      'He resolved the GSAP in Elementor feature quickly, and he has great communication skills. Highly recommend him.',
    rating: 5,
    country: 'Argentina',
    avatar: 'https://i.pravatar.cc/160?img=59',
    tone: '#ede9fe',
  },
];

const FeedbackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const pauseRef = useRef(false);

  const goTo = useCallback((index: number) => {
    const next = ((index % feedbacks.length) + feedbacks.length) % feedbacks.length;
    activeRef.current = next;
    setActive(next);
  }, []);

  const layoutCards = useCallback((animate = true) => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = gsap.utils.toArray<HTMLElement>(stage.querySelectorAll('.feedback-orbit-card'));
    const total = cards.length;
    const current = activeRef.current;

    cards.forEach((card, i) => {
      let offset = i - current;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const abs = Math.abs(offset);
      const isCenter = offset === 0;
      const props = {
        x: offset * (window.innerWidth < 768 ? 72 : 118),
        y: abs * 10 + (isCenter ? -8 : abs * 6),
        z: isCenter ? 120 : 40 - abs * 55,
        rotateY: offset * -22,
        rotateZ: offset * 1.6,
        scale: isCenter ? 1.1 : Math.max(0.78, 1 - abs * 0.1),
        opacity: abs > 2 ? 0 : isCenter ? 1 : Math.max(0.72, 1 - abs * 0.12),
        filter: 'blur(0px)',
        zIndex: 40 - abs,
        duration: animate ? 0.85 : 0,
        ease: 'power3.out',
      };

      gsap.to(card, props);
      card.classList.toggle('is-active', isCenter);
      card.setAttribute('aria-hidden', isCenter ? 'false' : 'true');
    });
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        layoutCards(false);
        return;
      }

      gsap.fromTo(
        section.querySelector('.feedback-kicker'),
        { y: 20, opacity: 0, letterSpacing: '0.45em' },
        {
          y: 0,
          opacity: 1,
          letterSpacing: '0.22em',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );

      gsap.fromTo(
        section.querySelector('.feedback-title-line'),
        { clipPath: 'inset(0 100% 0 0)', opacity: 0.2 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: { trigger: section, start: 'top 72%', once: true },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.feedback-float-orb'),
        { scale: 0.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 70%', once: true },
        }
      );

      // Continuous gentle float on orbs
      gsap.to(section.querySelectorAll('.feedback-float-orb'), {
        y: '+=18',
        x: '+=10',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        once: true,
        onEnter: () => layoutCards(true),
      });

      layoutCards(false);
    },
    { scope: sectionRef, dependencies: [layoutCards] }
  );

  useEffect(() => {
    layoutCards(true);

    const quote = quoteRef.current;
    if (quote && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        quote,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [active, layoutCards]);

  useEffect(() => {
    const onResize = () => layoutCards(false);
    window.addEventListener('resize', onResize);

    const timer = window.setInterval(() => {
      if (pauseRef.current) return;
      goTo(activeRef.current + 1);
    }, 4200);

    return () => {
      window.removeEventListener('resize', onResize);
      window.clearInterval(timer);
    };
  }, [goTo, layoutCards]);

  const current = feedbacks[active];

  return (
    <section
      id="feedback"
      ref={sectionRef}
      className="feedback-stage relative overflow-hidden py-24 md:py-28"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      <SectionAtmosphere image={feedbackBg} wash="lavender" />

      <div className="feedback-float-orb absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="feedback-float-orb absolute right-[10%] top-[28%] h-52 w-52 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="feedback-float-orb absolute bottom-[12%] left-[30%] h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="feedback-kicker mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Voices from Upwork
            </p>
            <h2 className="feedback-title-line section-header mb-4 inline-block">
              Client Feedback
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              A living wall of trust — spin the stage, read the story
            </p>
          </div>

          {/* Spotlight quote */}
          <div className="relative mx-auto mb-8 max-w-3xl text-center">
            <div className="rounded-3xl border border-white/80 bg-white/90 px-6 py-8 shadow-lg backdrop-blur-md md:px-10 md:py-10">
              <Quote className="mx-auto mb-4 h-10 w-10 text-primary/40" />
              <div className="mb-4 flex items-center justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={`${active}-star-${i}`}
                    className="feedback-spotlight-star h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p
                ref={quoteRef}
                key={active}
                className="text-balance text-lg font-semibold leading-relaxed text-slate-800 md:text-2xl md:leading-snug"
              >
                “{current.feedback}”
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="h-14 w-14 rounded-full object-cover ring-4 ring-white shadow-lg"
                />
                <div className="text-left">
                  <div className="text-lg font-bold text-slate-900">{current.name}</div>
                  <div className="text-sm font-semibold text-primary">{current.project}</div>
                  <div className="text-xs font-medium text-slate-500">{current.country} · Upwork</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D orbit stage */}
          <div className="relative mx-auto mt-4 max-w-5xl">
            <div
              ref={stageRef}
              className="feedback-perspective relative mx-auto h-[340px] md:h-[400px]"
              style={{ perspective: '1400px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                {feedbacks.map((item, index) => (
                  <button
                    key={item.name + item.project}
                    type="button"
                    className="feedback-orbit-card absolute w-[240px] md:w-[300px] cursor-pointer rounded-[1.6rem] border border-slate-200/90 p-4 text-left shadow-xl outline-none transition-[box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary/40 md:p-5"
                    style={{
                      background: `linear-gradient(165deg, #ffffff 0%, #ffffff 55%, ${item.tone} 100%)`,
                      transformStyle: 'preserve-3d',
                      willChange: 'transform, opacity, filter',
                    }}
                    onClick={() => goTo(index)}
                    aria-label={`Show review from ${item.name}`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt=""
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-white/90"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold text-slate-900">{item.name}</div>
                        <div className="truncate text-xs font-semibold text-primary">{item.project}</div>
                      </div>
                    </div>
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="line-clamp-4 text-sm font-medium leading-relaxed text-slate-700 md:text-[15px]">
                      {item.feedback}
                    </p>
                    <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {item.country}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-4">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                onClick={() => goTo(active - 1)}
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {feedbacks.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Go to ${item.name}`}
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === active ? 'w-8 bg-primary' : 'w-2.5 bg-primary/25 hover:bg-primary/45'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                onClick={() => goTo(active + 1)}
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Infinite marquee strip */}
          <div className="feedback-marquee mt-14 overflow-hidden">
            <div className="feedback-marquee-track flex w-max gap-4">
              {[...feedbacks, ...feedbacks].map((item, i) => (
                <div
                  key={`${item.name}-mq-${i}`}
                  className="flex items-center gap-3 rounded-full border border-border/60 bg-white/75 px-4 py-2 shadow-sm backdrop-blur"
                >
                  <img src={item.avatar} alt="" className="h-8 w-8 rounded-full object-cover" loading="lazy" />
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                  <span className="text-xs text-muted-foreground">· {item.project}</span>
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
