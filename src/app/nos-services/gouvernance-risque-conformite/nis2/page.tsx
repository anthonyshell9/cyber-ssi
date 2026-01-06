import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mise en conformité NIS2 | Cyber-SSI",
  description: "Conformez-vous à NIS2 : gouvernance, gestion des risques, notification d'incidents et supervision chaîne d'approvisionnement.",
};

const requirements = [
  {
    title: "Gouvernance de la cybersécurité",
    items: [
      "Responsabilité de la direction dans la gestion des risques cyber",
      "Mise en place d'une politique de sécurité des systèmes d'information",
      "Formation et sensibilisation obligatoires des dirigeants",
      "Nomination d'un responsable de la sécurité",
    ],
  },
  {
    title: "Gestion des risques",
    items: [
      "Analyse de risques régulière et documentée",
      "Mesures techniques et organisationnelles adaptées",
      "Plans de continuité et de reprise d'activité (PCA/PRA)",
      "Sécurité de la chaîne d'approvisionnement",
    ],
  },
  {
    title: "Notification des incidents",
    items: [
      "Alerte précoce sous 24h",
      "Notification complète sous 72h",
      "Rapport final dans le mois suivant l'incident",
      "Communication aux parties prenantes affectées",
    ],
  },
  {
    title: "Mesures de sécurité",
    items: [
      "Gestion des accès et authentification renforcée",
      "Chiffrement des données sensibles",
      "Détection et réponse aux incidents",
      "Tests et audits de sécurité réguliers",
    ],
  },
];

const sectors = [
  "Énergie",
  "Transports",
  "Santé",
  "Eau potable",
  "Infrastructures numériques",
  "Administration publique",
  "Espace",
  "Services postaux",
  "Gestion des déchets",
  "Fabrication de produits critiques",
  "Alimentaire",
  "Chimie",
];

export default function NIS2() {
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
            Mise en conformité <span className="text-[#7d53de]">NIS2</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Conformez-vous à la directive européenne NIS2 avec notre accompagnement expert
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que NIS2 ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La directive NIS2 (Network and Information Security 2) est le nouveau cadre réglementaire européen
              en matière de cybersécurité. Elle remplace la directive NIS1 et élargit considérablement son champ
              d&apos;application à de nouveaux secteurs et types d&apos;entités.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Applicable dès octobre 2024</strong>, cette directive impose des obligations renforcées en matière
              de gouvernance, de gestion des risques, de notification des incidents et de supervision de la chaîne
              d&apos;approvisionnement.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Sanctions prévues :</p>
              <p>Jusqu&apos;à <strong>10 millions d&apos;euros</strong> ou <strong>2% du chiffre d&apos;affaires mondial</strong> pour les entités essentielles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Secteurs concernés
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              NIS2 s&apos;applique aux entités essentielles et importantes dans de nombreux secteurs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#3c3a47] text-sm font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Exigences NIS2
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
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

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre accompagnement NIS2
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnostic initial",
                description: "Évaluation de votre niveau de conformité actuel et identification des écarts par rapport aux exigences NIS2.",
              },
              {
                step: "2",
                title: "Plan d'action",
                description: "Définition d'une feuille de route priorisée avec les actions correctives nécessaires et les délais associés.",
              },
              {
                step: "3",
                title: "Mise en œuvre",
                description: "Accompagnement dans l'implémentation des mesures : politiques, procédures, solutions techniques.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Préparez votre conformité NIS2
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts vous accompagnent dans votre mise en conformité NIS2.
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
