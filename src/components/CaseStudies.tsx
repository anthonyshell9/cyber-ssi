"use client";

const caseStudies = [
  {
    id: 1,
    sector: "Secteur Public",
    title: "Syndicat Intercommunal & Collectivités",
    description: "Assistance cybersécurité pour 25 syndicats et +1000 collectivités : RSSI externalisé, gouvernance, certification ISO 27001, conformité HDS et NIS2, homologation des téléservices.",
    metrics: ["25 syndicats", "+1000 collectivités", "Depuis 2023"],
    results: ["ISO 27001 certifié", "HDS (audit en cours)", "NIS2 conforme", "Expert Cyber"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    sector: "Crypto / Finance",
    title: "Acteur Crypto International",
    description: "RSSI externalisé pour une entreprise crypto opérant en France, Suisse et Italie. Pilotage stratégie cybersécurité, certification ISO 27001, conformité DORA et obtention licence MiCA.",
    metrics: ["France / Suisse / Italie", "50 employés", "Depuis 2023"],
    results: ["ISO 27001 certifié", "Licence MiCA obtenue"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    sector: "Crypto / Finance",
    title: "Industrie Crypto Française",
    description: "RSSI externalisé en charge de la stratégie cybersécurité : mise en conformité ISO 27001, accompagnement DORA, préparation et réussite de 2 audits PASSI, interactions directes avec l'AMF.",
    metrics: ["50 employés", "2 audits PASSI", "Depuis 2023"],
    results: ["ISO 27001 certifié", "2 audits PASSI réussis", "Dossier MiCA en cours"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 4,
    sector: "Secteur Public",
    title: "Conseil Départemental",
    description: "RSSI externalisé pour un département : pilotage stratégie cybersécurité, accompagnement équipes DSI, organisation comité cyber mensuel, mise en conformité NIS2.",
    metrics: ["+500 employés", "Comité cyber mensuel", "Depuis 2025"],
    results: ["Conformité NIS2 en cours"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 5,
    sector: "Crypto / International",
    title: "Plateforme d'Échange Crypto (VARA)",
    description: "CISO externalisé à l'échelle globale (Slovaquie, Émirats, Asie du Sud). Double rôle : gouvernance cybersécurité et DPO. Conformité VARA et DORA, audits réglementaires.",
    metrics: ["300 employés", "3 régions", "Depuis 2025"],
    results: ["CISO enregistré VARA/EAU", "Conformité DORA"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    sector: "Banque Digitale",
    title: "Néo-banque Européenne",
    description: "Consulting cybersécurité autonome : mise en place complète du SMSI, conformité DORA et ISO 27001, gestion PCI DSS, préparation documentation pour audits externes.",
    metrics: ["25 employés", "3 conformités", "Depuis 2024"],
    results: ["SMSI opérationnel", "DORA", "PCI DSS"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 7,
    sector: "Services Financiers",
    title: "Établissement de Paiement International",
    description: "Analyse de risques, politiques de sécurité, préparation audit PASSI (organisationnel et configuration), assistance équipes IT, conformité DORA et ISO 27001.",
    metrics: ["1000+ employés", "Londres / KSA / France", "2024-2025"],
    results: ["Audit PASSI réussi", "Aucune non-conformité majeure"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const globalStats = [
  { value: "50+", label: "Projets ISO 27001" },
  { value: "20+", label: "Programmes DORA" },
  { value: "30+", label: "Missions NIS2" },
  { value: "100+", label: "Tests d'intrusion & audits" },
];

export default function CaseStudies() {
  return (
    <section id="cas-clients" className="py-20 bg-gradient-to-b from-[#0e0c19] to-[#161131]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-animation="fadeIn">
          <span className="inline-block px-4 py-1 bg-[#7d53de]/20 text-[#7d53de] rounded-full text-sm font-medium mb-4">
            Démonstration de Projets
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Découvrez comment nous avons accompagné des organisations de toutes tailles
            — des startups aux institutions de +1000 employés — vers la conformité et l&apos;excellence en cybersécurité.
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
                <span className="text-xs text-white/40 uppercase tracking-wider mb-2 block">Résultats</span>
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
              <h3 className="text-2xl font-bold text-white mb-2">...et bien d&apos;autres</h3>
              <p className="text-white/60">
                Nous accompagnons des organisations de 5 à plus de 2000 employés, dans tous les secteurs.
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

            {/* Additional info */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>3 bureaux : France, Émirats, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Licences MiCA France + Europe</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Depuis 2019</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-animation="fadeInUp">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7d53de] text-white rounded-full font-semibold hover:bg-white hover:text-[#0e0c19] transition-all duration-300 shadow-lg shadow-[#7d53de]/30"
          >
            Discuter de votre projet
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
