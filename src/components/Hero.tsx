import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/2025/04/Logo-noir-icone-300x300.png"
            alt="Cyber-SSI"
            width={100}
            height={100}
            className="mx-auto brightness-0 invert"
            priority
          />
        </div>

        {/* Subtitle */}
        <p className="text-[#7d53de] font-semibold tracking-widest uppercase mb-4">
          CYBER-SSI
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          L&apos;entreprise de cybersécurité pour{" "}
          <span className="text-[#7d53de]">PME</span>, administrations et institutions
        </h1>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="inline-block rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-white hover:text-[#0e0c19] transition-all duration-300 hover:scale-105"
        >
          Contactez-nous
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
    </section>
  );
}
