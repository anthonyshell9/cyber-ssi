import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mise en conformité ISO/IEC 42001 | Cyber-SSI",
  description: "Adoptez une gouvernance IA responsable : audit SMIA, cartographie risques IA, conformité ISO/IEC 42001 pour une IA fiable et éthique.",
};

const principles = [
  {
    title: "Transparence",
    description: "Assurer la compréhensibilité des systèmes d'IA et de leurs décisions.",
  },
  {
    title: "Responsabilité",
    description: "Établir des responsabilités claires pour le développement et l'utilisation de l'IA.",
  },
  {
    title: "Équité",
    description: "Prévenir les biais et discriminations dans les systèmes d'IA.",
  },
  {
    title: "Fiabilité",
    description: "Garantir la robustesse et la performance des systèmes d'IA.",
  },
  {
    title: "Sécurité",
    description: "Protéger les systèmes d'IA contre les attaques et les utilisations malveillantes.",
  },
  {
    title: "Confidentialité",
    description: "Assurer la protection des données personnelles traitées par l'IA.",
  },
];

const phases = [
  {
    step: "1",
    title: "Cartographie des systèmes IA",
    description: "Inventaire et classification de tous les systèmes d'IA de l'organisation selon leur niveau de risque.",
  },
  {
    step: "2",
    title: "Analyse des risques IA",
    description: "Évaluation des risques spécifiques à l'IA : biais, explicabilité, sécurité, conformité.",
  },
  {
    step: "3",
    title: "Conception du SMIA",
    description: "Mise en place du Système de Management de l'Intelligence Artificielle conforme à ISO 42001.",
  },
  {
    step: "4",
    title: "Implémentation des contrôles",
    description: "Déploiement des mesures techniques et organisationnelles pour une IA responsable.",
  },
  {
    step: "5",
    title: "Audit et amélioration",
    description: "Vérification de la conformité et amélioration continue du SMIA.",
  },
];

export default function ISO42001() {
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
            Conformité <span className="text-[#7d53de]">ISO/IEC 42001</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Système de Management de l&apos;Intelligence Artificielle
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que ISO/IEC 42001 ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La norme ISO/IEC 42001 est le premier standard international pour le management
              des systèmes d&apos;intelligence artificielle. Elle fournit un cadre pour le développement,
              le déploiement et l&apos;utilisation responsables de l&apos;IA.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Cette norme aide les organisations à gérer les risques spécifiques à l&apos;IA tout en
              maximisant les bénéfices de ces technologies émergentes.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Synergie réglementaire :</p>
              <p>ISO 42001 facilite la conformité avec l&apos;AI Act européen et s&apos;intègre avec
              ISO 27001 pour une gouvernance globale de la sécurité et de l&apos;IA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Principes de l&apos;IA responsable
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#7d53de] mb-2">{principle.title}</h3>
                <p className="text-[#3c3a47] text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre accompagnement ISO 42001
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{phase.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e0c19]">{phase.title}</h3>
                  <p className="text-[#3c3a47]">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cas d&apos;usage
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Chatbots et assistants virtuels",
              "Systèmes de recommandation",
              "Analyse prédictive",
              "Reconnaissance d'images",
              "Traitement du langage naturel",
              "Automatisation des processus",
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl text-center text-white hover:bg-[#7d53de]/20 transition-colors"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Adoptez une gouvernance IA responsable
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts vous accompagnent dans la mise en conformité ISO/IEC 42001.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un audit IA
          </Link>
        </div>
      </section>
    </>
  );
}
