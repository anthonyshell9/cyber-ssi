"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Animated counter component
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </div>
  );
}

// Client logos (placeholder - replace with real logos)
const clientLogos = [
  { name: "Client 1", opacity: "opacity-60" },
  { name: "Client 2", opacity: "opacity-50" },
  { name: "Client 3", opacity: "opacity-60" },
  { name: "Client 4", opacity: "opacity-50" },
  { name: "Client 5", opacity: "opacity-60" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        {/* Additional floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#7d53de]/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#7d53de]/15 rounded-full blur-2xl animate-pulse delay-700" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(125,83,222,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(125,83,222,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-8">
        {/* Logo */}
        <div className="mb-6" data-animation="fadeInDown">
          <Image
            src="/images/2025/04/Logo-noir-icone-300x300.png"
            alt="Cyber-SSI"
            width={80}
            height={80}
            className="mx-auto brightness-0 invert"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-animation="fadeInUp" data-delay="0.2">
          L&apos;entreprise de cybersécurité pour{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d53de] to-[#a78bfa]">PME</span>, administrations et institutions
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8" data-animation="fadeInUp" data-delay="0.3">
          Conformité NIS2, DORA, ISO 27001 - Protégez votre entreprise avec des experts certifiés
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-animation="fadeInUp" data-delay="0.4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#7d53de]/30 hover:bg-white hover:text-[#0e0c19] transition-all duration-300 hover:scale-105"
          >
            Contactez-nous
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/nos-services"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-300"
          >
            Découvrir nos services
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-8 mb-16" data-animation="fadeInUp" data-delay="0.5">
        <div className="grid grid-cols-3 gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="text-center">
            <AnimatedCounter target={50} suffix="+" />
            <p className="text-white/60 text-sm mt-1">Clients protégés</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={100} suffix="+" />
            <p className="text-white/60 text-sm mt-1">Accompagnements certification</p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={15} suffix="+" />
            <p className="text-white/60 text-sm mt-1">Certifications experts</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
