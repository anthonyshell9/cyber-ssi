"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const benefitKeys = ["benefit1", "benefit2", "benefit3", "benefit4"] as const;
const phaseKeys = ["phase1", "phase2", "phase3", "phase4"] as const;

export default function ISO27001() {
  const t = useTranslations("grc.iso27001");

  const controls = t.raw("controls.list") as string[];

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
            <p className="text-lg leading-relaxed">
              {t("intro.text2")}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("benefits.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitKeys.map((key) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{t(`benefits.${key}.title`)}</h3>
                <p className="text-[#3c3a47] text-sm">{t(`benefits.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("controls.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              {t("controls.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {controls.map((control, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-lg text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <span className="text-[#3c3a47] text-xs font-medium">{control}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("phases.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phaseKeys.map((key) => {
              const items = t.raw(`phases.${key}.items`) as string[];
              return (
                <div key={key} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-[#7d53de] font-semibold text-sm mb-2">{t(`phases.${key}.phase`)}</div>
                  <h3 className="text-lg font-bold text-[#0e0c19] mb-4">{t(`phases.${key}.title`)}</h3>
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#3c3a47] text-sm">
                        <span className="text-[#7d53de]">•</span>
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
