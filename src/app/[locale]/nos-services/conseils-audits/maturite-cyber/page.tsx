import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amélioration de la maturité cyber | Cyber-SSI",
  description: "Renforcez votre résilience cyber : gouvernance, gestion des risques, outils et sensibilisation pour passer à la vitesse supérieure.",
};

const domains = [
  {
    title: "Gouvernance",
    items: [
      "Politique de sécurité de l'information",
      "Organisation de la sécurité",
      "Comité de sécurité",
      "Rôles et responsabilités",
    ],
  },
  {
    title: "Gestion des risques",
    items: [
      "Méthodologie d'analyse des risques",
      "Cartographie des actifs",
      "Plan de traitement des risques",
      "Indicateurs de risques",
    ],
  },
  {
    title: "Protection",
    items: [
      "Contrôle des accès",
      "Sécurité des réseaux",
      "Protection des données",
      "Sécurité des endpoints",
    ],
  },
  {
    title: "Détection et réponse",
    items: [
      "Surveillance des événements",
      "Gestion des incidents",
      "Plans de continuité (PCA/PRA)",
      "Exercices de crise",
    ],
  },
  {
    title: "Facteur humain",
    items: [
      "Sensibilisation des utilisateurs",
      "Formation des équipes IT",
      "Simulations de phishing",
      "Culture sécurité",
    ],
  },
  {
    title: "Conformité",
    items: [
      "Veille réglementaire",
      "Audits de conformité",
      "Documentation",
      "Amélioration continue",
    ],
  },
];

const maturityLevels = [
  { level: 1, name: "Initial", desc: "Processus ad hoc, non documentés" },
  { level: 2, name: "Géré", desc: "Processus définis mais pas standardisés" },
  { level: 3, name: "Défini", desc: "Processus documentés et standardisés" },
  { level: 4, name: "Mesuré", desc: "Processus mesurés et contrôlés" },
  { level: 5, name: "Optimisé", desc: "Amélioration continue" },
];

export default function MaturiteCyber() {
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
            Amélioration de la <span className="text-[#7d53de]">maturité cyber</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Passez au niveau supérieur en cybersécurité
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que la maturité cyber ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La maturité cybersécurité mesure la capacité de votre organisation à identifier,
              protéger, détecter, répondre et récupérer face aux menaces cyber. Un niveau de
              maturité élevé signifie des processus structurés, mesurés et en amélioration continue.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Notre approche</p>
              <p>
                Nous évaluons votre maturité actuelle, définissons votre cible et vous
                accompagnons dans la mise en œuvre des améliorations prioritaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maturity Levels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Niveaux de maturité
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {maturityLevels.map((level) => (
              <div
                key={level.level}
                className="bg-white p-6 rounded-xl shadow-lg text-center w-full md:w-auto md:flex-1 max-w-xs"
              >
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">{level.level}</span>
                </div>
                <h3 className="font-bold text-[#0e0c19]">{level.name}</h3>
                <p className="text-[#3c3a47] text-sm mt-1">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Domaines évalués
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-[#0e0c19] mb-4">
                  {domain.title}
                </h3>
                <ul className="space-y-2">
                  {domain.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#3c3a47] text-sm">
                      <span className="text-[#7d53de]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Diagnostic", desc: "Évaluation de votre niveau de maturité actuel" },
              { step: "2", title: "Analyse des écarts", desc: "Identification des points d'amélioration prioritaires" },
              { step: "3", title: "Feuille de route", desc: "Plan d'action priorisé et chiffré" },
              { step: "4", title: "Accompagnement", desc: "Support à la mise en œuvre des améliorations" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Évaluez votre maturité cyber
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Identifiez vos axes d&apos;amélioration prioritaires.
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
