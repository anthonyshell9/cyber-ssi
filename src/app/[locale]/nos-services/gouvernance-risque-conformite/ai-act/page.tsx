import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mise en conformité AI Act | Cyber-SSI",
  description: "Anticipez l'AI Act : audit IA, cartographie des systèmes, gouvernance & conformité pour éviter jusqu'à 35 M€ d'amende.",
};

const riskLevels = [
  {
    level: "Risque inacceptable",
    color: "bg-red-500",
    description: "Systèmes d'IA interdits",
    examples: [
      "Manipulation comportementale",
      "Notation sociale (social scoring)",
      "Identification biométrique en temps réel dans les lieux publics",
      "Exploitation des vulnérabilités des personnes",
    ],
  },
  {
    level: "Haut risque",
    color: "bg-orange-500",
    description: "Exigences strictes à respecter",
    examples: [
      "Recrutement et gestion des RH",
      "Évaluation de crédit",
      "Dispositifs médicaux",
      "Véhicules autonomes",
      "Identification biométrique",
    ],
  },
  {
    level: "Risque limité",
    color: "bg-yellow-500",
    description: "Obligations de transparence",
    examples: [
      "Chatbots",
      "Deepfakes",
      "Systèmes de recommandation",
      "Génération de contenu",
    ],
  },
  {
    level: "Risque minimal",
    color: "bg-green-500",
    description: "Pas d'obligations spécifiques",
    examples: [
      "Filtres anti-spam",
      "Jeux vidéo avec IA",
      "Systèmes d'inventaire",
    ],
  },
];

const sanctions = [
  { violation: "Systèmes interdits", amount: "35 M€ ou 7% du CA" },
  { violation: "Non-conformité haut risque", amount: "15 M€ ou 3% du CA" },
  { violation: "Informations incorrectes", amount: "7,5 M€ ou 1,5% du CA" },
];

export default function AIAct() {
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
            Conformité <span className="text-[#7d53de]">AI Act</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Règlement européen sur l&apos;intelligence artificielle
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que l&apos;AI Act ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              L&apos;AI Act est le premier cadre juridique complet au monde régulant l&apos;intelligence
              artificielle. Ce règlement européen vise à garantir que les systèmes d&apos;IA mis sur
              le marché européen soient sûrs et respectent les droits fondamentaux.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Basé sur une approche par les risques, l&apos;AI Act impose des obligations différenciées
              selon le niveau de risque présenté par chaque système d&apos;IA.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">Attention : Sanctions sévères</p>
              <p className="text-red-700">
                Les violations peuvent entraîner des amendes allant jusqu&apos;à <strong>35 millions d&apos;euros</strong> ou
                <strong> 7% du chiffre d&apos;affaires mondial</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Classification par niveau de risque
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskLevels.map((risk, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${risk.color} p-4`}>
                  <h3 className="text-xl font-bold text-white">{risk.level}</h3>
                  <p className="text-white/80 text-sm">{risk.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {risk.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#3c3a47]">
                        <span className="text-[#7d53de]">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Régime de sanctions
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {sanctions.map((sanction, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
              >
                <span className="text-[#3c3a47]">{sanction.violation}</span>
                <span className="text-[#7d53de] font-bold">{sanction.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre accompagnement AI Act
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cartographie IA",
                description: "Inventaire et classification de vos systèmes d'IA selon les niveaux de risque AI Act",
              },
              {
                title: "Gap Analysis",
                description: "Évaluation de l'écart entre votre situation actuelle et les exigences réglementaires",
              },
              {
                title: "Plan de conformité",
                description: "Définition des actions prioritaires et de la feuille de route vers la conformité",
              },
              {
                title: "Documentation",
                description: "Rédaction de la documentation technique et des évaluations de conformité",
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
            Anticipez l&apos;AI Act
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts vous accompagnent dans votre mise en conformité AI Act.
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
