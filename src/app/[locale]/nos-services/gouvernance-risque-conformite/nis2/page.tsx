"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const requirementKeys = ["governance", "riskManagement", "incidents", "security"] as const;

export default function NIS2() {
  const t = useTranslations("grc.nis2");

  const sectors = t.raw("sectors.list") as string[];

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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("intro.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              {t("intro.text1")}
            </p>
            <p className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t("intro.text2") }} />
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">{t("intro.sanctionsTitle")}</p>
              <p dangerouslySetInnerHTML={{ __html: t("intro.sanctionsText") }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("sectors.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              {t("sectors.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#3c3a47] text-sm font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("requirements.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirementKeys.map((key) => {
              const items = t.raw(`requirements.${key}.items`) as string[];
              return (
                <div key={key} className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                    {t(`requirements.${key}.title`)}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#3c3a47]">
                        <span className="text-[#7d53de] mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("approach.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["step1", "step2", "step3"].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`approach.${step}.title`)}</h3>
                <p className="text-white/70">{t(`approach.${step}.description`)}</p>
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
