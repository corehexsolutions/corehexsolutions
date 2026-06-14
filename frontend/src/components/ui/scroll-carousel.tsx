import { useEffect, useRef, useCallback } from "react";
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
    slug: "it-infrastructure",
    desc: "Complete hardware support and infrastructure management tailored to your business needs.",
    src: "./services/server.png",
  },
  {
    id: 2,
    icon: Shield,
    title: "Cybersecurity",
    slug: "cybersecurity",
    desc: "Comprehensive security solutions to protect your business from digital threats.",
    src: "./services/cybersecurity.png",
  },
  {
    id: 3,
    icon: Database,
    title: "Data Management",
    slug: "data-solutions",
    desc: "Secure backup, recovery, and analytics solutions for your critical business data.",
    src: "./services/database-management.png",
  },
  {
    id: 4,
    icon: Network,
    title: "Network Solutions",
    slug: "network-management",
    desc: "Reliable network monitoring, security, and managed services for optimal performance.",
    src: "./services/network-solutions.png",
  },
  {
    id: 5,
    icon: Code,
    title: "Software Development",
    slug: "software-development",
    desc: "Custom web and mobile application development tailored to your business goals using modern technologies.",
    src: "./services/software-development.png",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "IT Consulting",
    slug: "it-consulting",
    desc: "Strategic technology consulting to drive your digital transformation journey.",
    src: "./services/it-consulting.png",
  },
  {
    id: 7,
    icon: Headphones,
    title: "Help Desk Support",
    slug: "it-support",
    desc: "24/7 technical support to keep your operations running smoothly.",
    src: "./services/helpdesk-support.png",
  },
];

// Triple-clone so the seam never shows even at high drag speeds
const SLIDES = [...keyServices, ...keyServices, ...keyServices];

const CARD_WIDTH = 436; // card 420px + margin 2×8px
const SPEED = 0.55;

export default function ScrollCarousel(): JSX.Element {
  const trackRef     = useRef<HTMLDivElement>(null);
  const progressRef  = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);

  // All mutable state lives in refs — zero React re-renders inside rAF
  const posRef       = useRef(0);
  const pausedRef    = useRef(false);   // hover pause
  const draggingRef  = useRef(false);
  const startXRef    = useRef(0);
  const startPosRef  = useRef(0);
  const velocityRef  = useRef(0);       // momentum after drag release
  const lastXRef     = useRef(0);       // for velocity sampling
  const dragMoved    = useRef(false);   // distinguish click vs drag

  // ── Core render ────────────────────────────────────────────────────────────
  const commit = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // halfWidth = one full copy of keyServices width
    const halfWidth = CARD_WIDTH * keyServices.length;

    // Infinite loop: keep pos inside the middle copy
    if (posRef.current < halfWidth)          posRef.current += halfWidth;
    if (posRef.current >= halfWidth * 2)     posRef.current -= halfWidth;

    track.style.transform = `translateX(-${posRef.current}px)`;

    // Update progress bar via direct DOM — no setState
    if (progressRef.current) {
      const pct = ((posRef.current - halfWidth) / halfWidth) * 100;
      progressRef.current.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    }
  }, []);

  // ── Animation loop ─────────────────────────────────────────────────────────
  const animate = useCallback(() => {
    if (!draggingRef.current) {
      if (!pausedRef.current) {
        posRef.current += SPEED;
      }

      // Momentum glide after drag release
      if (Math.abs(velocityRef.current) > 0.1) {
        posRef.current += velocityRef.current;
        velocityRef.current *= 0.92; // friction
      } else {
        velocityRef.current = 0;
      }
    }

    commit();
    rafRef.current = requestAnimationFrame(animate);
  }, [commit]);

  // ── Mouse handlers ─────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    draggingRef.current  = true;
    dragMoved.current    = false;
    velocityRef.current  = 0;
    startXRef.current    = e.clientX;
    startPosRef.current  = posRef.current;
    lastXRef.current     = e.clientX;
  }, []);

  // Attached to window so drag works even if mouse leaves the card area
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientX - lastXRef.current;
      velocityRef.current = -delta * 0.4;        // sample velocity
      lastXRef.current    = e.clientX;
      posRef.current      = startPosRef.current - (e.clientX - startXRef.current);
      dragMoved.current   = true;
    };

    const onMouseUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, []);

  // ── Touch handlers ─────────────────────────────────────────────────────────
  // Attached imperatively so we can pass { passive: false } to call preventDefault
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTouchStart = (e: TouchEvent) => {
      draggingRef.current  = true;
      dragMoved.current    = false;
      velocityRef.current  = 0;
      startXRef.current    = e.touches[0].clientX;
      startPosRef.current  = posRef.current;
      lastXRef.current     = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;

      const dx = e.touches[0].clientX - lastXRef.current;
      const dy = e.touches[0].clientY - (e.touches[0].clientY); // always 0; kept for clarity

      // Only hijack horizontal swipes — let vertical scrolls pass through
      const totalDX = Math.abs(e.touches[0].clientX - startXRef.current);
      const totalDY = Math.abs(e.touches[0].clientY - startXRef.current); // approximate

      if (totalDX > 8) {
        e.preventDefault(); // block page scroll during horizontal swipe
      }

      velocityRef.current = -dx * 0.4;
      lastXRef.current    = e.touches[0].clientX;
      posRef.current      = startPosRef.current - (e.touches[0].clientX - startXRef.current);
      dragMoved.current   = true;
    };

    const onTouchEnd = () => {
      draggingRef.current = false;
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove",  onTouchMove,  { passive: false }); // must be non-passive for preventDefault
    track.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove",  onTouchMove);
      track.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  // ── Block click-through after a drag ──────────────────────────────────────
  const onLinkClick = useCallback((e: React.MouseEvent) => {
    if (dragMoved.current) e.preventDefault();
  }, []);

  // ── Arrow buttons ──────────────────────────────────────────────────────────
  const nudge = useCallback((amount: number) => {
    velocityRef.current = 0;
    posRef.current += amount;
  }, []);

  // ── Start loop ────────────────────────────────────────────────────────────
  useEffect(() => {
    // Start in middle copy so both directions have room to loop
    posRef.current = CARD_WIDTH * keyServices.length;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0a0a0f] to-black text-white">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%)] pointer-events-none" />

      {/* Header */}
      <div className="absolute top-20 left-0 w-full text-center z-10 pointer-events-none pt-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3">
          Crafting scalable, modern digital solutions
        </p>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => nudge(-CARD_WIDTH)}
        aria-label="Scroll left"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-black/50 backdrop-blur-lg
          border border-white/10
          hover:border-primary/40 hover:bg-primary/10
          flex items-center justify-center
          transition-all duration-300 active:scale-95"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => nudge(CARD_WIDTH)}
        aria-label="Scroll right"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-black/50 backdrop-blur-lg
          border border-white/10
          hover:border-primary/40 hover:bg-primary/10
          flex items-center justify-center
          transition-all duration-300 active:scale-95"
      >
        <ChevronRight size={22} />
      </button>

      {/* Progress bar — updated via DOM ref, not setState */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-white/10 rounded-full overflow-hidden z-10">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: "0%" }}
        />
      </div>

      {/* Track */}
      <div className="h-full flex items-center pt-32 pb-16">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform cursor-grab active:cursor-grabbing select-none"
          style={{ transform: "translateX(0px)" }}
          onMouseDown={onMouseDown}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => {
            pausedRef.current = false;
            if (!draggingRef.current) velocityRef.current = 0;
          }}
        >
          {SLIDES.map((slide, index) => (
            <Link
              key={`${slide.id}-${index}`}
              to={`/services/${slide.slug}`}
              onClick={onLinkClick}
              draggable={false}
              className="h-full flex items-center justify-center flex-shrink-0 mx-2 group/card"
            >
              <div className="h-[80%] w-[420px]">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 group-hover/card:border-primary/30 group-hover/card:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

                  <img
                    src={slide.src}
                    alt={slide.title}
                    draggable={false}
                    className="w-full h-full object-cover scale-[1.03] opacity-[0.72] group-hover/card:scale-[1.08] group-hover/card:opacity-[0.82] transition-all duration-[1400ms] ease-out"
                  />

                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_45%)]" />

                  {/* Content */}
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
                          <ArrowRight size={16} className="text-primary transition-transform duration-500 group-hover/card:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pulse dot */}
                  <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-primary/70 animate-pulse" />

                  {/* Hover border ring */}
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