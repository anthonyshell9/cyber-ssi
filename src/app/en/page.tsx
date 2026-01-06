import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber-SSI | Cybersecurity for SMEs, Administrations and Institutions",
  description: "Cyber-SSI supports SMEs, administrations and institutions in their cybersecurity: NIS2, GDPR, DORA compliance, ISO 27001 certifications, outsourced CISO.",
  alternates: {
    languages: {
      "fr": "/",
      "en": "/en",
    },
  },
};

const services = [
  {
    title: "Regulatory Compliance",
    description: "Our tailored approach ensures your organization aligns with NIS2, MiCA, DORA, GDPR, VARA and DIFC requirements.",
    href: "/en/services/compliance",
  },
  {
    title: "Cybersecurity Certifications",
    description: "Adopt the most demanding cybersecurity standards with our support on ISO 27001, 22301, 42001, SOC 2 or PCI-DSS frameworks.",
    href: "/en/services/certifications",
  },
  {
    title: "Part-time CISO",
    description: "Benefit from an experienced, certified and immediately operational Chief Information Security Officer (CISO) to support your organization.",
    href: "/en/services/ciso",
  },
  {
    title: "Training & Awareness",
    description: "Our customized programs combine practical training and regular awareness sessions, perfectly adapted to your business challenges.",
    href: "/en/services/training",
  },
];

export default function HomeEN() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
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

          <p className="text-[#7d53de] font-semibold tracking-widest uppercase mb-4">
            CYBER-SSI
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            The cybersecurity company for{" "}
            <span className="text-[#7d53de]">SMEs</span>, administrations and institutions
          </h1>

          <Link
            href="#contact"
            className="inline-block rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-white hover:text-[#0e0c19] transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mb-4">
              Your Needs
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-lg shadow-[0_4px_60px_-30px_rgba(125,83,222,0.7)] hover:shadow-[0_8px_80px_-20px_rgba(125,83,222,0.8)] border border-gray-100 transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#0e0c19] mb-3 group-hover:text-[#7d53de] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#3c3a47] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-block rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#161131] transition-all duration-300"
            >
              What is your real need?
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
                What is a cybersecurity company?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mt-4 mb-6 leading-tight">
                Understanding the crucial role of cybersecurity companies
              </h2>
            </div>

            <div>
              <p className="text-[#3c3a47] text-lg leading-relaxed">
                A cybersecurity company like Cyber-SSI plays an essential role in protecting
                data and computer systems against digital threats. In a world where cyberattacks
                are increasingly sophisticated, these companies provide advanced security solutions
                to protect sensitive information of SMEs, startups, administrations and institutions.
                Their importance lies in their ability to prevent data breaches, secure digital
                infrastructures and ensure business continuity.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[
              { value: "100%", label: "Satisfied clients" },
              { value: "NIS2", label: "Guaranteed compliance" },
              { value: "24/7", label: "Support available" },
              { value: "ISO", label: "Certifications" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7d53de] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#3c3a47] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] text-lg max-w-2xl mx-auto">
              Do you have a cybersecurity project? Want to assess your security posture or become compliant? Let&apos;s discuss it together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <a
              href="mailto:contact@cyber-ssi.com"
              className="inline-block text-2xl text-[#7d53de] hover:text-[#161131] transition-colors font-semibold"
            >
              contact@cyber-ssi.com
            </a>
            <p className="text-[#3c3a47] mt-4">France & International</p>
          </div>
        </div>
      </section>
    </>
  );
}
