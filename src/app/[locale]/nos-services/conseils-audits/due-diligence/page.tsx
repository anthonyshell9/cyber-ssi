import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Due Diligence Cyber | Cyber-SSI",
  description: "Analysez la maturité cyber avant acquisition : due diligence complète pour sécuriser vos deals et décisions M&A.",
};

const assessmentAreas = [
  {
    title: "Gouvernance & Organisation",
    items: [
      "Politique de sécurité",
      "Organisation de la SSI",
      "Gestion des risques",
      "Conformité réglementaire",
    ],
  },
  {
    title: "Infrastructure & Technique",
    items: [
      "Architecture réseau",
      "Sécurité des systèmes",
      "Protection des données",
      "Cloud et externalisation",
    ],
  },
  {
    title: "Historique des incidents",
    items: [
      "Incidents passés",
      "Data breaches",
      "Litiges en cours",
      "Vulnérabilités connues",
    ],
  },
  {
    title: "Exposition aux risques",
    items: [
      "Surface d'attaque",
      "Données sensibles",
      "Dépendances critiques",
      "Assurance cyber",
    ],
  },
];

const contexts = [
  { title: "Acquisition / M&A", desc: "Évaluez les risques cyber avant de finaliser une acquisition" },
  { title: "Investissement", desc: "Identifiez les faiblesses cyber des cibles d'investissement" },
  { title: "Partenariat stratégique", desc: "Vérifiez la maturité cyber de vos futurs partenaires" },
  { title: "Externalisation", desc: "Évaluez les prestataires critiques avant contractualisation" },
];

export default function DueDiligence() {
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
            Conseils et Audits
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Due Diligence <span className="text-[#7d53de]">Cyber</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Sécurisez vos opérations M&A et vos décisions d&apos;investissement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que la due diligence cyber ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La due diligence cybersécurité est l&apos;évaluation approfondie de la posture de sécurité
              d&apos;une entreprise cible dans le cadre d&apos;une opération M&A, d&apos;un investissement
              ou d&apos;un partenariat stratégique.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">Risques à identifier</p>
              <p className="text-red-700">
                Un incident cyber non détecté lors de l&apos;acquisition peut entraîner des coûts
                significatifs : remédiation, litiges, perte de clients, impact sur la valorisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Contextes d&apos;intervention
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contexts.map((context, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{context.title}</h3>
                <p className="text-[#3c3a47] text-sm">{context.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Domaines analysés
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#3c3a47]">
                      <span className="text-[#7d53de] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Livrables
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapport de due diligence",
                description: "Analyse détaillée de la posture cyber avec scoring de maturité et cartographie des risques.",
              },
              {
                title: "Red Flags identifiés",
                description: "Liste des points de vigilance majeurs pouvant impacter la transaction.",
              },
              {
                title: "Plan de remédiation",
                description: "Actions correctives à intégrer dans le plan d'intégration post-acquisition.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez vos transactions
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Identifiez les risques cyber avant de finaliser votre opération.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander une due diligence
          </Link>
        </div>
      </section>
    </>
  );
}
