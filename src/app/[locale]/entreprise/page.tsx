"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const certifications = [
  { name: "CREST", description: "Council of Registered Ethical Security Testers", logo: "/images/certifications/crest.svg" },
  { name: "CREST+", description: "CREST Certified Simulated Attack Manager", logo: "/images/certifications/crest.svg" },
  { name: "CISSP", description: "Certified Information Systems Security Professional", logo: "/images/certifications/cissp.svg" },
  { name: "CISM", description: "Certified Information Security Manager", logo: "/images/certifications/cism.svg" },
  { name: "CEH", description: "Certified Ethical Hacker", logo: "/images/certifications/ceh.svg" },
  { name: "OSCP", description: "Offensive Security Certified Professional", logo: "/images/certifications/oscp.svg" },
  { name: "ISO 27001 LA", description: "Lead Auditor", logo: "/images/certifications/iso27001.svg" },
  { name: "ISO 27001 LI", description: "Lead Implementer", logo: "/images/certifications/iso27001.svg" },
];

const valueKeys = ["excellence", "trust", "pragmatism", "commitment"];
const valueIcons = ["⭐", "🤝", "🎯", "💪"];
const sectorKeys = ["finance", "health", "industry", "public", "ecommerce", "insurance", "transport", "energy"];

export default function Entreprise() {
  const t = useTranslations("entreprise");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("hero.title")} <span className="text-[#7d53de]">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
                {t("mission.label")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mt-4 mb-6">
                {t("mission.title")}
              </h2>
              <p
                className="text-[#3c3a47] text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("mission.text1") }}
              />
              <p className="text-[#3c3a47] text-lg leading-relaxed mb-6">
                {t("mission.text2")}
              </p>
              <p className="text-[#3c3a47] text-lg leading-relaxed">
                {t("mission.text3")}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#7d53de]/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[#0e0c19] to-[#161131] rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-white text-xl font-semibold">
                  {t("mission.quote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section id="valeurs" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("values.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueKeys.map((key, index) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{valueIcons[index]}</div>
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">{t(`values.${key}.title`)}</h3>
                <p className="text-[#3c3a47] text-sm">{t(`values.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("certifications.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              {t("certifications.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#7d53de]/10 transition-colors hover:shadow-lg"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={80}
                    height={64}
                    className="object-contain max-h-16"
                  />
                </div>
                <div className="text-lg font-bold text-[#7d53de] mb-1">{cert.name}</div>
                <div className="text-xs text-[#3c3a47]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("sectors.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectorKeys.map((key, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl text-center text-white hover:bg-[#7d53de]/20 transition-colors"
              >
                {t(`sectors.list.${key}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {t("cta.description")}
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
