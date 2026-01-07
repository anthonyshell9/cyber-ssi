"use client";

import { useTranslations } from "next-intl";

const rightKeys = ["access", "rectification", "erasure", "restriction", "portability", "objection"];

export default function Confidentialite() {
  const t = useTranslations("confidentialite");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {t("hero.title")} <span className="text-[#7d53de]">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-white/80 text-lg mt-4">
            {t("hero.lastUpdate")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-[#3c3a47]">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.introduction.title")}</h2>
              <p>{t("sections.introduction.content")}</p>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.controller.title")}</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="mb-2"><strong>{t("sections.controller.company")}</strong> Cyber-SSI</p>
                <p className="mb-2"><strong>{t("sections.controller.email")}</strong> <a href="mailto:contact@cyber-ssi.com" className="text-[#7d53de]">contact@cyber-ssi.com</a></p>
                <p className="mb-0"><strong>{t("sections.controller.dpo")}</strong> contact@cyber-ssi.com</p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.dataCollected.title")}</h2>
              <p>{t("sections.dataCollected.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>{t("sections.dataCollected.identification")}</strong> {t("sections.dataCollected.identificationDesc")}</li>
                <li><strong>{t("sections.dataCollected.professional")}</strong> {t("sections.dataCollected.professionalDesc")}</li>
                <li><strong>{t("sections.dataCollected.connection")}</strong> {t("sections.dataCollected.connectionDesc")}</li>
                <li><strong>{t("sections.dataCollected.communication")}</strong> {t("sections.dataCollected.communicationDesc")}</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.purposes.title")}</h2>
              <p>{t("sections.purposes.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>{t(`sections.purposes.items.${i}`)}</li>
                ))}
              </ul>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.legalBasis.title")}</h2>
              <p>{t("sections.legalBasis.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>{t("sections.legalBasis.consent")}</strong> {t("sections.legalBasis.consentDesc")}</li>
                <li><strong>{t("sections.legalBasis.contract")}</strong> {t("sections.legalBasis.contractDesc")}</li>
                <li><strong>{t("sections.legalBasis.interest")}</strong> {t("sections.legalBasis.interestDesc")}</li>
                <li><strong>{t("sections.legalBasis.legal")}</strong> {t("sections.legalBasis.legalDesc")}</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.recipients.title")}</h2>
              <p>{t("sections.recipients.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <li key={i}>{t(`sections.recipients.items.${i}`)}</li>
                ))}
              </ul>
              <p className="mt-4">{t("sections.recipients.noSale")}</p>
            </div>

            {/* Transferts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.transfers.title")}</h2>
              <p>{t("sections.transfers.content")}</p>
            </div>

            {/* Conservation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.retention.title")}</h2>
              <p>{t("sections.retention.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>{t("sections.retention.contact")}</strong> {t("sections.retention.contactDuration")}</li>
                <li><strong>{t("sections.retention.client")}</strong> {t("sections.retention.clientDuration")}</li>
                <li><strong>{t("sections.retention.connection")}</strong> {t("sections.retention.connectionDuration")}</li>
                <li><strong>{t("sections.retention.cookies")}</strong> {t("sections.retention.cookiesDuration")}</li>
              </ul>
            </div>

            {/* Droits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.rights.title")}</h2>
              <p>{t("sections.rights.intro")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {rightKeys.map((key) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-[#0e0c19]">{t(`sections.rights.${key}.title`)}</h3>
                    <p className="text-sm">{t(`sections.rights.${key}.desc`)}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg mt-6">
                <p className="text-[#0e0c19] font-semibold mb-2">{t("sections.rights.howTo")}</p>
                <p>{t("sections.rights.howToDesc")}</p>
              </div>
            </div>

            {/* Réclamation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.complaint.title")}</h2>
              <p>{t("sections.complaint.content")}</p>
              <div className="bg-gray-50 p-6 rounded-xl mt-4">
                <p className="mb-1"><strong>CNIL</strong></p>
                <p className="mb-1">3 Place de Fontenoy, TSA 80715</p>
                <p className="mb-1">75334 Paris Cedex 07</p>
                <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#7d53de]">www.cnil.fr</a></p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.cookies.title")}</h2>
              <p>{t("sections.cookies.intro")}</p>
              <h3 className="text-xl font-semibold text-[#0e0c19] mt-6 mb-3">{t("sections.cookies.typesTitle")}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t("sections.cookies.essential")}</strong> {t("sections.cookies.essentialDesc")}</li>
                <li><strong>{t("sections.cookies.analytics")}</strong> {t("sections.cookies.analyticsDesc")}</li>
              </ul>
              <p className="mt-4">{t("sections.cookies.manage")}</p>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.security.title")}</h2>
              <p>{t("sections.security.intro")}</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i}>{t(`sections.security.items.${i}`)}</li>
                ))}
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0e0c19] mb-4">{t("sections.modifications.title")}</h2>
              <p>{t("sections.modifications.content")}</p>
            </div>

            {/* Contact */}
            <div className="bg-[#0e0c19] text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">{t("sections.contact.title")}</h2>
              <p className="text-white/80 mb-4">{t("sections.contact.content")}</p>
              <a
                href="mailto:contact@cyber-ssi.com"
                className="inline-block rounded-full bg-[#7d53de] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#0e0c19] transition-colors"
              >
                contact@cyber-ssi.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
