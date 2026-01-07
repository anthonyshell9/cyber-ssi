"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceKeys = ["pentest", "redTeam", "configAudit", "codeAudit", "azure", "directory"] as const;
const serviceLinks = [
  "/nos-services/services-operationnels/test-intrusion",
  "/nos-services/services-operationnels/red-team",
  "/nos-services/services-operationnels/audit-configuration",
  "/nos-services/services-operationnels/audit-code",
  "/nos-services/services-operationnels/securite-azure",
  "/nos-services/services-operationnels/securite-annuaire",
];

export default function ServicesOperationnels() {
  const t = useTranslations("servicesOperationnels");

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
          <p
            className="text-[#3c3a47] text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("intro.text") }}
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {serviceKeys.map((key, index) => {
              const items = t.raw(`services.${key}.items`) as string[];
              return (
                <div
                  key={key}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
                      {t(`services.${key}.title`)}
                    </h2>
                    <p className="text-[#3c3a47] text-lg mb-6 leading-relaxed">
                      {t(`services.${key}.description`)}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {items.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#3c3a47]">
                          <span className="text-[#7d53de] mt-1">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={serviceLinks[index]}
                      className="inline-block rounded-full bg-[#7d53de] px-6 py-3 text-sm font-semibold text-white hover:bg-[#161131] transition-colors"
                    >
                      {t("learnMore")}
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#7d53de]/10 rounded-2xl transform rotate-2"></div>
                      <div className="relative bg-gradient-to-br from-[#0e0c19] to-[#161131] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-[#7d53de]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-[#7d53de]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                          </div>
                          <h3 className="text-white font-semibold">{t(`services.${key}.title`)}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
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
