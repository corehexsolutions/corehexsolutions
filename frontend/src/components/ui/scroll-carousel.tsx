import { useEffect, useRef, useState, useCallback } from "react";
import {
  Briefcase,
  Code,
  Database,
  Headphones,
  Network,
  Server,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const keyServices = [
  {
    id: 1,
    icon: Server,
    title: "IT Infrastructure",
    desc: "Complete hardware support and infrastructure management tailored to your business needs.",
    src: "./services/server.png",
  },
  {
    id: 2,
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your business from digital threats.",
    src: "./services/cybersecurity.png",
  },
  {
    id: 3,
    icon: Database,
    title: "Data Management",
    desc: "Secure backup, recovery, and analytics solutions for your critical business data.",
    src: "./services/database-management.png",
  },
  {
    id: 4,
    icon: Network,
    title: "Network Solutions",
    desc: "Reliable network monitoring, security, and managed services for optimal performance.",
    src: "./services/network-solutions.png",
  },
  {
    id: 5,
    icon: Code,
    title: "Software Development",
    desc: "Custom web and mobile application development tailored to your business goals using modern technologies.",
    src: "./services/software-development.png",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "IT Consulting",
    desc: "Strategic technology consulting to drive your digital transformation journey.",
    src: "./services/it-consulting.png",
  },
  {
    id: 7,
    icon: Headphones,
    title: "Help Desk Support",
    desc: "24/7 technical support to keep your operations running smoothly.",
    src: "./services/helpdesk-support.png",
  },
];

const SLIDES = [...keyServices, ...keyServices];

export default function ScrollCarousel(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const posRef = useRef(0);
  const pausedRef = useRef(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);

  const [progress, setProgress] = useState(0);

  const SPEED = 0.6;

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    if (posRef.current < 0) {
      posRef.current += halfWidth;
    }

    if (posRef.current >= halfWidth) {
      posRef.current -= halfWidth;
    }

    track.style.transform = `translateX(-${posRef.current}px)`;
    setProgress(posRef.current / halfWidth);
  }, []);

  const animate = useCallback(() => {
    if (!pausedRef.current && !isDraggingRef.current) {
      posRef.current += SPEED;
      updatePosition();
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, [updatePosition]);

  const scrollByAmount = (amount: number) => {
    posRef.current += amount;
    updatePosition();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    pausedRef.current = true;

    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;

    const delta = e.clientX - startXRef.current;

    posRef.current = startPosRef.current - delta;
    updatePosition();
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    pausedRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    pausedRef.current = true;

    startXRef.current = e.touches[0].clientX;
    startPosRef.current = posRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;

    const delta = e.touches[0].clientX - startXRef.current;

    posRef.current = startPosRef.current - delta;
    updatePosition();
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    pausedRef.current = false;
  };

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }

      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [animate]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0a0a0f] to-black text-white pt-20">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%)]" />

      {/* Header */}
      <div className="absolute top-20 left-0 w-full text-center z-10 pointer-events-none pt-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3">
          Crafting scalable, modern digital solutions
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scrollByAmount(-450)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30
        w-14 h-14 rounded-full
        bg-black/50 backdrop-blur-lg
        border border-white/10
        hover:border-primary/40
        hover:bg-primary/10
        flex items-center justify-center
        transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollByAmount(450)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30
        w-14 h-14 rounded-full
        bg-black/50 backdrop-blur-lg
        border border-white/10
        hover:border-primary/40
        hover:bg-primary/10
        flex items-center justify-center
        transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white/10 rounded-full overflow-hidden z-10">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-none"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Carousel */}
      <div className="h-full flex items-center pt-28 pb-16">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform cursor-grab active:cursor-grabbing select-none"
          style={{ transform: "translateX(0px)" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {SLIDES.map((slide, index) => (
            <Link
              key={`${slide.id}-${index}`}
              to={`/services/${slide.title}`}
              className="h-full flex items-center justify-center flex-shrink-0 m-2 group/card"
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                if (!isDraggingRef.current) {
                  pausedRef.current = false;
                }
              }}
            >
              <div className="max-w-6xl h-[80%] w-[420px]">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 group-hover/card:border-primary/30 group-hover/card:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

                  <img
                    src={slide.src}
                    alt={slide.title}
                    draggable={false}
                    className="w-full h-full object-cover scale-[1.03] opacity-[0.72] group-hover/card:scale-[1.08] group-hover/card:opacity-[0.82] transition-all duration-[1400ms] ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_45%)]" />

                  <div className="absolute bottom-10 left-10 z-10 flex gap-5 max-w-lg">

                    <div className="text-white/90 mt-1 flex-shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:text-primary">
                      <slide.icon size={52} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl md:text-3xl font-medium text-white leading-snug transition-all duration-500 group-hover/card:translate-x-1">
                        {slide.title}
                      </h2>

                      <p className="text-white/75 text-sm md:text-base leading-relaxed">
                        {slide.desc}
                      </p>

                      <div className="flex items-center gap-3 pt-2 opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                        <span className="text-sm text-primary font-medium tracking-wide">
                          Explore Service
                        </span>

                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                          <ArrowRight
                            size={16}
                            className="text-primary transition-transform duration-500 group-hover/card:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-primary/70 animate-pulse" />

                  <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover/card:border-primary/20 transition-all duration-700" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}