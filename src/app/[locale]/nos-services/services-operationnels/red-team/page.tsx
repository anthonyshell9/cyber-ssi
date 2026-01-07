"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function RedTeam() {
  const t = useTranslations("servicesOperationnels.redTeam");

  const phases = t.raw("phases.list") as Array<{ title: string; description: string; items: string[] }>;
  const differences = t.raw("differences.rows") as Array<{ aspect: string; pentest: string; redteam: string }>;
  const techniques = t.raw("techniques.list") as string[];

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
            <p
              className="text-lg leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: t("intro.text2") }}
            />
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">{t("intro.dora.title")}</p>
              <p>{t("intro.dora.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              {t("differences.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#7d53de] text-white">
                  <th className="px-6 py-4 text-left">{t("differences.headers.aspect")}</th>
                  <th className="px-6 py-4 text-left">{t("differences.headers.pentest")}</th>
                  <th className="px-6 py-4 text-left">{t("differences.headers.redteam")}</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((diff, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-[#0e0c19]">{diff.aspect}</td>
                    <td className="px-6 py-4 text-[#3c3a47]">{diff.pentest}</td>
                    <td className="px-6 py-4 text-[#3c3a47]">{diff.redteam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              {t("phases.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#7d53de] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0e0c19]">{phase.title}</h3>
                </div>
                <p className="text-[#7d53de] text-sm mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#3c3a47] text-sm">
                      <span className="text-[#7d53de]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("techniques.title")}
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-4 rounded-xl text-center"
              >
                <span className="text-white text-sm">{technique}</span>
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
