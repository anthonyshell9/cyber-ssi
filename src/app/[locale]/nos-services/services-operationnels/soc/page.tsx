"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceKeys = ["monitoring", "detection", "response", "reporting"] as const;

export default function SOC() {
  const t = useTranslations("servicesOperationnels.soc");

  const stats = t.raw("intro.stats") as Array<{ value: string; label: string }>;
  const coverage = t.raw("coverage.list") as Array<{ label: string; desc: string }>;
  const technologies = t.raw("technologies.list") as string[];

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
            {t("hero.title")} <span className="text-[#7d53de]">{t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
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
              {t("intro.text")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[#7d53de]">{stat.value}</div>
                  <div className="text-[#3c3a47] text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("services.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceKeys.map((key) => {
              const items = t.raw(`services.${key}.items`) as string[];
              return (
                <div key={key} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="text-[#7d53de] text-sm mb-4">{t(`services.${key}.description`)}</p>
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

      {/* Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("coverage.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coverage.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <div className="font-semibold text-[#0e0c19]">{item.label}</div>
                <div className="text-xs text-[#3c3a47] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("technologies.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("technologies.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white font-medium">{tech}</span>
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
