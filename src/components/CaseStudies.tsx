"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const caseStudyIcons = [
  (
    <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  (
    <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  (
    <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  (
    <svg key="5" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg key="6" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  (
    <svg key="7" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
];

export default function CaseStudies() {
  const t = useTranslations("caseStudies");

  const caseStudies = [
    {
      id: 1,
      sector: t("sectors.publicSector"),
      title: t("case1.title"),
      description: t("case1.description"),
      metrics: ["25 syndicats", "+1000 collectivités", "Depuis 2023"],
      results: ["ISO 27001 certifié", "HDS (audit en cours)", "NIS2 conforme", "Expert Cyber"],
      icon: caseStudyIcons[0],
    },
    {
      id: 2,
      sector: t("sectors.cryptoFinance"),
      title: t("case2.title"),
      description: t("case2.description"),
      metrics: ["France / Suisse / Italie", "50 employés", "Depuis 2023"],
      results: ["ISO 27001 certifié", "Licence MiCA obtenue"],
      icon: caseStudyIcons[1],
    },
    {
      id: 3,
      sector: t("sectors.cryptoFinance"),
      title: t("case3.title"),
      description: t("case3.description"),
      metrics: ["50 employés", "2 audits PASSI", "Depuis 2023"],
      results: ["ISO 27001 certifié", "2 audits PASSI réussis", "Dossier MiCA en cours"],
      icon: caseStudyIcons[2],
    },
    {
      id: 4,
      sector: t("sectors.publicSector"),
      title: t("case4.title"),
      description: t("case4.description"),
      metrics: ["+500 employés", "Comité cyber mensuel", "Depuis 2025"],
      results: ["Conformité NIS2 en cours"],
      icon: caseStudyIcons[3],
    },
    {
      id: 5,
      sector: t("sectors.cryptoInternational"),
      title: t("case5.title"),
      description: t("case5.description"),
      metrics: ["300 employés", "3 régions", "Depuis 2025"],
      results: ["CISO enregistré VARA/EAU", "Conformité DORA"],
      icon: caseStudyIcons[4],
    },
    {
      id: 6,
      sector: t("sectors.digitalBank"),
      title: t("case6.title"),
      description: t("case6.description"),
      metrics: ["25 employés", "3 conformités", "Depuis 2024"],
      results: ["SMSI opérationnel", "DORA", "PCI DSS"],
      icon: caseStudyIcons[5],
    },
    {
      id: 7,
      sector: t("sectors.financialServices"),
      title: t("case7.title"),
      description: t("case7.description"),
      metrics: ["1000+ employés", "Londres / KSA / France", "2024-2025"],
      results: ["Audit PASSI réussi", "Aucune non-conformité majeure"],
      icon: caseStudyIcons[6],
    },
  ];

  const globalStats = [
    { value: "50+", label: t("stats.iso27001") },
    { value: "20+", label: t("stats.dora") },
    { value: "30+", label: t("stats.nis2") },
    { value: "100+", label: t("stats.pentests") },
  ];

  return (
    <section id="cas-clients" className="py-20 bg-gradient-to-b from-[#0e0c19] to-[#161131]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-animation="fadeIn">
          <span className="inline-block px-4 py-1 bg-[#7d53de]/20 text-[#7d53de] rounded-full text-sm font-medium mb-4">
            {t("sectionLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t("sectionDescription")}
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#7d53de]/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              data-animation="fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Sector badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-[#7d53de] bg-[#7d53de]/10 px-2 py-1 rounded">
                  {study.sector}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#7d53de]/20 flex items-center justify-center text-[#7d53de] group-hover:bg-[#7d53de] group-hover:text-white transition-colors mb-4">
                {study.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7d53de] transition-colors">
                {study.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 line-clamp-3">
                {study.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {study.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-white/40 uppercase tracking-wider mb-2 block">{t("resultsLabel")}</span>
                <div className="flex flex-wrap gap-2">
                  {study.results.map((result, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Et plus encore" section with global stats */}
        <div className="mt-16" data-animation="fadeInUp">
          <div className="bg-gradient-to-r from-[#7d53de]/20 to-[#5b3db3]/20 rounded-2xl p-8 border border-[#7d53de]/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{t("andMore.title")}</h3>
              <p className="text-white/60">
                {t("andMore.description")}
              </p>
            </div>

            {/* Global stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {globalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#7d53de] mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-animation="fadeInUp">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7d53de] text-white rounded-full font-semibold hover:bg-white hover:text-[#0e0c19] transition-all duration-300 shadow-lg shadow-[#7d53de]/30"
          >
            {t("cta")}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
