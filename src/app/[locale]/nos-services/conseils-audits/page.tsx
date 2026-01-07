"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceKeys = ["maturity", "posture", "dueDiligence", "ciso"] as const;
const serviceLinks = [
  "/nos-services/conseils-audits/maturite-cyber",
  "/nos-services/conseils-audits/evaluer-posture",
  "/nos-services/conseils-audits/due-diligence",
  "/nos-services/conseils-audits/rssi-temps-partage",
];
const whyUsKeys = ["expertise", "pragmatic", "support"] as const;

export default function ConseilsAudits() {
  const t = useTranslations("conseilsAudits");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-[#7d53de] font-semibold uppercase tracking-wider mb-4">
            {t("hero.label")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("hero.title")} <span className="text-[#7d53de]">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#3c3a47] text-lg leading-relaxed">
            {t("intro.text")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("expertise.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceKeys.map((key, index) => (
              <Link
                key={key}
                href={serviceLinks[index]}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-[#0e0c19] mb-3 group-hover:text-[#7d53de] transition-colors">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-[#3c3a47] leading-relaxed">
                  {t(`services.${key}.description`)}
                </p>
                <div className="mt-4 text-[#7d53de] font-semibold text-sm flex items-center gap-2">
                  {t("expertise.learnMore")}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("whyUs.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsKeys.map((key) => (
              <div key={key} className="text-center">
                <div className="w-16 h-16 bg-[#7d53de]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{t(`whyUs.${key}.title`)}</h3>
                <p className="text-[#3c3a47] text-sm">{t(`whyUs.${key}.description`)}</p>
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
