import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services de Cybersécurité | Cyber-SSI",
  description: "Découvrez nos services : gouvernance et conformité (NIS2, DORA, RGPD), conseils et audits, RSSI externalisé, tests d'intrusion, Red Team.",
};

const serviceCategories = [
  {
    title: "Gouvernance, Risque & Conformité",
    description: "Structurez votre démarche cybersécurité et assurez votre conformité réglementaire.",
    services: [
      { name: "Mise en conformité NIS2", href: "/nos-services/nis2" },
      { name: "Conformité DORA", href: "/nos-services/dora" },
      { name: "Conformité RGPD", href: "/nos-services/rgpd" },
      { name: "Certifications ISO 27001", href: "/nos-services/iso-27001" },
    ],
    href: "/nos-services/gouvernance-risque-conformite",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Conseils & Audits",
    description: "Évaluez votre posture de sécurité et identifiez vos axes d'amélioration.",
    services: [
      { name: "Audit de maturité cyber", href: "/nos-services/audit-maturite" },
      { name: "Analyse de risques", href: "/nos-services/analyse-risques" },
      { name: "Schéma directeur SSI", href: "/nos-services/schema-directeur" },
    ],
    href: "/nos-services/conseils-et-audits",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "RSSI à Temps Partagé",
    description: "Bénéficiez d'un expert cybersécurité dédié sans les coûts d'un poste à temps plein.",
    services: [
      { name: "Pilotage de la sécurité", href: "/nos-services/rssi-temps-partage" },
      { name: "Définition de la stratégie SSI", href: "/nos-services/rssi-temps-partage" },
      { name: "Sensibilisation des équipes", href: "/nos-services/rssi-temps-partage" },
    ],
    href: "/nos-services/rssi-temps-partage",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Services Opérationnels",
    description: "Testez et renforcez concrètement la résistance de votre système d'information.",
    services: [
      { name: "Tests d'intrusion (Pentest)", href: "/nos-services/services-operationnels/test-intrusion" },
      { name: "Red Team", href: "/nos-services/services-operationnels/red-team" },
      { name: "Audit de configuration", href: "/nos-services/services-operationnels/audit-configuration" },
      { name: "Audit de code", href: "/nos-services/services-operationnels/audit-code" },
    ],
    href: "/nos-services/services-operationnels",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function NosServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Nos <span className="text-[#7d53de]">Services</span> de Cybersécurité
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Des solutions adaptées pour protéger votre entreprise face aux menaces cyber
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[#7d53de] mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold text-[#0e0c19] mb-3">
                  {category.title}
                </h2>
                <p className="text-[#3c3a47] mb-6">{category.description}</p>

                <ul className="space-y-2 mb-6">
                  {category.services.map((service, idx) => (
                    <li key={idx}>
                      <Link
                        href={service.href}
                        className="text-[#7d53de] hover:text-[#161131] transition-colors flex items-center gap-2"
                      >
                        <span>→</span>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={category.href}
                  className="inline-block rounded-full bg-[#7d53de] px-6 py-3 text-sm font-semibold text-white hover:bg-[#161131] transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Pourquoi choisir Cyber-SSI ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise certifiée",
                description: "Nos consultants sont certifiés CISSP, CISM, ISO 27001 Lead Auditor/Implementer.",
              },
              {
                title: "Approche sur-mesure",
                description: "Chaque mission est adaptée à votre contexte, votre secteur et vos contraintes.",
              },
              {
                title: "Accompagnement complet",
                description: "De l'audit initial au déploiement, nous vous accompagnons à chaque étape.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7d53de]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#7d53de] text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">{item.title}</h3>
                <p className="text-[#3c3a47]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un accompagnement personnalisé ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Discutons de vos enjeux cybersécurité et trouvons ensemble la solution adaptée.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
}
