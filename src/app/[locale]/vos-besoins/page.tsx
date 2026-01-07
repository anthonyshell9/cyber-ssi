"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const needsLinks = [
  "/nos-services/gouvernance-risque-conformite",
  "/nos-services/conseils-audits",
  "/nos-services",
  "/nos-services/services-operationnels",
];

export default function VosBesoins() {
  const t = useTranslations("vosBesoins");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-animation="fadeInDown">
            {t("hero.title")}{" "}
            <span className="text-[#7d53de]">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titleEnd")}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-animation="fadeInLeft">
              <p
                className="text-[#3c3a47] text-lg leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("intro.text") }}
              />
              <ul className="space-y-3 text-[#3c3a47]">
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t.raw("intro.benefits.protect") }} />
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t.raw("intro.benefits.trust") }} />
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t.raw("intro.benefits.continuity") }} />
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t.raw("intro.benefits.anticipate") }} />
                </li>
              </ul>
              <p className="text-[#0e0c19] font-semibold mt-6">
                {t("intro.conclusion")}
              </p>
              <Link
                href="#contact"
                className="inline-block mt-6 rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white hover:bg-[#161131] transition-colors"
              >
                {t("intro.cta")}
              </Link>
            </div>
            <div className="order-1 lg:order-2" data-animation="fadeInRight" data-delay="0.2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#7d53de]/10 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/2025/05/Laptop-1024x675.jpg"
                  alt={t("intro.imageAlt")}
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Besoins Grid */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-animation="fadeInDown">
              {t("needs.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full" data-animation="scaleIn" data-delay="0.2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((num, index) => (
              <Link
                key={index}
                href={needsLinks[index]}
                className="group bg-white/5 border-2 border-[#7d53de]/20 p-8 rounded-xl hover:bg-[#7d53de]/20 hover:border-[#7d53de]/50 transition-all duration-300 hover:scale-[1.02]"
                data-animation="fadeInUp"
                data-delay={String(index * 0.1)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#7d53de] transition-colors">
                  {t(`needs.need${num}.title`)}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(`needs.need${num}.description`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi la sécurité est prioritaire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animation="fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-6">
                {t("priority.title")}
              </h2>
            </div>
            <div data-animation="fadeInRight" data-delay="0.2">
              <div className="w-full h-1 bg-[#7d53de] mb-6 rounded-full"></div>
              <p
                className="text-[#3c3a47] text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("priority.text1") }}
              />
              <p className="text-[#3c3a47] text-lg leading-relaxed">
                {t("priority.text2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-animation="fadeInDown">
            {t("cta.title")}
          </h2>
          <p className="text-white/90 text-lg mb-8" data-animation="fadeInUp" data-delay="0.1">
            {t("cta.description")}
          </p>
          <div data-animation="fadeInUp" data-delay="0.2">
            <Link
              href="#contact"
              className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
            >
              {t("cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
