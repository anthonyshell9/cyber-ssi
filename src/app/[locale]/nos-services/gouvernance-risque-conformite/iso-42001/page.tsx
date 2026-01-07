"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const principleKeys = ["transparency", "accountability", "fairness", "reliability", "security", "privacy"] as const;

export default function ISO42001() {
  const t = useTranslations("grc.iso42001");

  const useCases = t.raw("useCases.list") as string[];

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
            <p className="text-lg leading-relaxed mb-6">
              {t("intro.text2")}
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">{t("intro.synergyTitle")}</p>
              <p>{t("intro.synergyText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("principles.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principleKeys.map((key) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#7d53de] mb-2">{t(`principles.${key}.title`)}</h3>
                <p className="text-[#3c3a47] text-sm">{t(`principles.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("approach.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {["step1", "step2", "step3", "step4", "step5"].map((step, index) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e0c19]">{t(`approach.${step}.title`)}</h3>
                  <p className="text-[#3c3a47]">{t(`approach.${step}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("useCases.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl text-center text-white hover:bg-[#7d53de]/20 transition-colors"
              >
                {useCase}
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
