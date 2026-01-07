"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const riskLevelKeys = ["unacceptable", "high", "limited", "minimal"] as const;
const riskColors = {
  unacceptable: "bg-red-500",
  high: "bg-orange-500",
  limited: "bg-yellow-500",
  minimal: "bg-green-500",
};

export default function AIAct() {
  const t = useTranslations("grc.aiAct");

  const sanctions = t.raw("sanctions.items") as Array<{ violation: string; amount: string }>;

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
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">{t("intro.warningTitle")}</p>
              <p className="text-red-700" dangerouslySetInnerHTML={{ __html: t("intro.warningText") }} />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("riskLevels.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskLevelKeys.map((key) => {
              const examples = t.raw(`riskLevels.${key}.examples`) as string[];
              return (
                <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`${riskColors[key]} p-4`}>
                    <h3 className="text-xl font-bold text-white">{t(`riskLevels.${key}.level`)}</h3>
                    <p className="text-white/80 text-sm">{t(`riskLevels.${key}.description`)}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#3c3a47]">
                          <span className="text-[#7d53de]">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sanctions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("sanctions.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {sanctions.map((sanction, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-[#3c3a47]">{sanction.violation}</span>
                <span className="text-[#7d53de] font-bold">{sanction.amount}</span>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["step1", "step2", "step3", "step4"].map((step) => (
              <div key={step} className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">{t(`approach.${step}.title`)}</h3>
                <p className="text-white/70 text-sm">{t(`approach.${step}.description`)}</p>
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
