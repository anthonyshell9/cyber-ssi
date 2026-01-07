"use client";

const caseStudies = [
  {
    id: 1,
    title: "Syndicat Intercommunal",
    description: "Accompagnement à la mise en conformité ISO 27001, HDS et NIS2 pour un groupement de collectivités.",
    metrics: ["25 syndicats", "+1000 collectivités", "3 certifications"],
    certifications: ["ISO 27001", "HDS", "NIS2"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Entreprise Crypto Internationale",
    description: "Certification ISO 27001 et conformité MiCA pour une entreprise crypto opérant en France, Suisse et Italie.",
    metrics: ["3 pays", "50 employés", "2 certifications"],
    certifications: ["ISO 27001", "MiCA"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Acteur Crypto Français",
    description: "Double certification ISO 27001 avec accompagnement pour 2 audits PASSI dans le secteur de l'industrie crypto.",
    metrics: ["50 employés", "2 audits PASSI", "ISO 27001"],
    certifications: ["ISO 27001", "PASSI"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Conseil Départemental",
    description: "Mise en conformité NIS2 en cours pour un département avec plus de 500 employés.",
    metrics: ["500+ employés", "NIS2", "En cours"],
    certifications: ["NIS2"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Plateforme VARA",
    description: "Accompagnement réglementaire international pour une plateforme technologique de grande envergure.",
    metrics: ["300 employés", "International", "VARA"],
    certifications: ["VARA"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Néo-banque",
    description: "Mise en place du SMSI et conformité DORA et PCI DSS pour une néo-banque en pleine croissance.",
    metrics: ["25 employés", "3 conformités", "SMSI"],
    certifications: ["DORA", "PCI DSS", "SMSI"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Établissement de Paiement",
    description: "Audit PASSI complet pour un établissement de paiement majeur avec plus de 1000 employés.",
    metrics: ["1000+ employés", "Audit PASSI", "Conformité"],
    certifications: ["PASSI"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section id="cas-clients" className="py-20 bg-gradient-to-b from-[#0e0c19] to-[#161131]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-animation="fadeIn">
          <span className="inline-block px-4 py-1 bg-[#7d53de]/20 text-[#7d53de] rounded-full text-sm font-medium mb-4">
            Cas Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Découvrez comment nous avons accompagné des organisations de toutes tailles
            vers la conformité et l&apos;excellence en cybersécurité.
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
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#7d53de]/20 flex items-center justify-center text-[#7d53de] group-hover:bg-[#7d53de] group-hover:text-white transition-colors mb-4">
                {study.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7d53de] transition-colors">
                {study.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 line-clamp-2">
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

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {study.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-[#7d53de] bg-[#7d53de]/10 px-2 py-1 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
