import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mise en conformité DORA | Cyber-SSI",
  description: "Conformez-vous au règlement DORA : audit des risques TIC, tests de résilience, gestion des prestataires & réponse cyber pour entités financières.",
};

const pillars = [
  {
    title: "Gestion des risques TIC",
    description: "Cadre de gestion des risques liés aux technologies de l'information et de la communication",
    items: [
      "Gouvernance et organisation de la gestion des risques TIC",
      "Politique de sécurité des systèmes d'information",
      "Cartographie des actifs et des risques",
      "Mesures de protection et de détection",
    ],
  },
  {
    title: "Gestion des incidents TIC",
    description: "Processus de détection, gestion et notification des incidents",
    items: [
      "Classification des incidents selon leur gravité",
      "Procédures de gestion et d'escalade",
      "Notification aux autorités compétentes",
      "Communication aux clients impactés",
    ],
  },
  {
    title: "Tests de résilience",
    description: "Programme de tests pour évaluer la résilience opérationnelle numérique",
    items: [
      "Tests de vulnérabilités et scans de sécurité",
      "Tests de pénétration avancés (TLPT)",
      "Tests de scénarios de crise",
      "Exercices de continuité d'activité",
    ],
  },
  {
    title: "Gestion des tiers TIC",
    description: "Supervision des prestataires de services TIC critiques",
    items: [
      "Due diligence des prestataires",
      "Clauses contractuelles obligatoires",
      "Surveillance continue des performances",
      "Plans de sortie et de substitution",
    ],
  },
];

const entities = [
  "Établissements de crédit",
  "Entreprises d'investissement",
  "Sociétés de gestion",
  "Compagnies d'assurance",
  "Institutions de retraite",
  "Prestataires de services crypto",
  "Plateformes de financement participatif",
  "Prestataires de services TIC critiques",
];

export default function DORA() {
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
            Gouvernance, Risque et Conformité
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Mise en conformité <span className="text-[#7d53de]">DORA</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Digital Operational Resilience Act - Résilience opérationnelle numérique du secteur financier
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que DORA ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Le règlement DORA (Digital Operational Resilience Act) est le nouveau cadre européen
              qui harmonise les exigences en matière de résilience opérationnelle numérique pour
              le secteur financier.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Applicable dès janvier 2025</strong>, DORA impose aux entités financières de renforcer
              leur capacité à prévenir, résister et se remettre de perturbations liées aux TIC.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Obligations spécifiques :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Tests de pénétration basés sur les menaces (TLPT) pour les entités significatives</li>
                <li>Notification des incidents majeurs sous 4 heures</li>
                <li>Registre des contrats avec les prestataires TIC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Entités concernées
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              DORA s&apos;applique à l&apos;ensemble des acteurs du secteur financier européen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {entities.map((entity, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#3c3a47] text-sm font-medium">{entity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Les 5 piliers de DORA
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#3c3a47]">
                      <span className="text-[#7d53de] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fifth pillar */}
          <div className="mt-8 bg-gradient-to-br from-[#0e0c19] to-[#161131] p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Partage d&apos;informations
            </h3>
            <p className="text-[#7d53de] text-sm mb-4">
              Échange de renseignements sur les cybermenaces entre entités financières
            </p>
            <p className="text-white/80">
              DORA encourage le partage volontaire d&apos;informations sur les menaces et vulnérabilités
              au sein de communautés de confiance pour renforcer la résilience collective du secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre accompagnement DORA
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {[
              { step: "1", title: "Diagnostic de conformité", desc: "Évaluation de l'écart entre votre situation actuelle et les exigences DORA" },
              { step: "2", title: "Cartographie des risques TIC", desc: "Identification et évaluation des risques liés à vos systèmes et prestataires" },
              { step: "3", title: "Plan de remédiation", desc: "Définition des actions prioritaires pour atteindre la conformité" },
              { step: "4", title: "Mise en œuvre", desc: "Accompagnement dans l'implémentation des mesures techniques et organisationnelles" },
              { step: "5", title: "Tests de résilience", desc: "Réalisation des tests de pénétration et exercices de continuité requis" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e0c19]">{item.title}</h3>
                  <p className="text-[#3c3a47]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Préparez votre conformité DORA
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts financiers et cyber vous accompagnent vers la conformité DORA.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un diagnostic
          </Link>
        </div>
      </section>
    </>
  );
}
