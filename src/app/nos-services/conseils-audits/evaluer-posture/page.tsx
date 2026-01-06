import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évaluer votre posture de sécurité | Cyber-SSI",
  description: "Évaluez votre posture de sécurité : audit complet, tests d'intrusion, cartographie des risques et plan pour renforcer votre cybersécurité.",
};

const assessmentTypes = [
  {
    title: "Audit organisationnel",
    description: "Évaluation de votre gouvernance et de vos processus de sécurité",
    items: [
      "Revue des politiques de sécurité",
      "Analyse de l'organisation",
      "Évaluation des processus",
      "Conformité réglementaire",
    ],
  },
  {
    title: "Audit technique",
    description: "Tests et analyses de vos systèmes et infrastructures",
    items: [
      "Tests d'intrusion",
      "Audit de configuration",
      "Scan de vulnérabilités",
      "Analyse des architectures",
    ],
  },
  {
    title: "Analyse des risques",
    description: "Identification et évaluation des risques cyber",
    items: [
      "Cartographie des actifs",
      "Identification des menaces",
      "Évaluation des impacts",
      "Plan de traitement",
    ],
  },
  {
    title: "Évaluation humaine",
    description: "Test de la sensibilisation et des pratiques",
    items: [
      "Campagnes de phishing",
      "Tests d'ingénierie sociale",
      "Évaluation des pratiques",
      "Niveau de sensibilisation",
    ],
  },
];

const deliverables = [
  "Rapport d'audit détaillé",
  "Cartographie des risques",
  "Scoring de maturité",
  "Benchmark sectoriel",
  "Recommandations priorisées",
  "Plan d'action opérationnel",
];

export default function EvaluerPosture() {
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
            Évaluer votre <span className="text-[#7d53de]">posture de sécurité</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Connaissez votre niveau de sécurité réel et vos priorités d&apos;action
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi évaluer sa posture ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Vous ne pouvez pas protéger ce que vous ne connaissez pas. L&apos;évaluation de votre
              posture de sécurité vous donne une vision claire de votre exposition aux risques
              et de vos priorités d&apos;investissement en cybersécurité.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Vision 360°</p>
              <p>
                Notre évaluation combine audits organisationnels, tests techniques et analyse
                des risques pour une vision complète de votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Composantes de l&apos;évaluation
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {type.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{type.description}</p>
                <ul className="space-y-3">
                  {type.items.map((item, idx) => (
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Livrables
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <span className="text-[#3c3a47] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre démarche
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Cadrage", desc: "Définition du périmètre" },
              { step: "2", title: "Collecte", desc: "Documentation & interviews" },
              { step: "3", title: "Tests", desc: "Audits techniques" },
              { step: "4", title: "Analyse", desc: "Évaluation des risques" },
              { step: "5", title: "Restitution", desc: "Rapport & plan d'action" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Évaluez votre sécurité
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Obtenez une vision claire de votre posture de sécurité.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander une évaluation
          </Link>
        </div>
      </section>
    </>
  );
}
