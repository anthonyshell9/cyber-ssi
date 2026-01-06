import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSSI à temps partagé | Cyber-SSI",
  description: "Bénéficiez d'un RSSI senior à temps partiel pour piloter votre sécurité, conformité et résilience cyber sans recrutement interne.",
};

const missions = [
  {
    title: "Gouvernance SSI",
    items: [
      "Définition de la stratégie de sécurité",
      "Rédaction des politiques et procédures",
      "Animation du comité de sécurité",
      "Reporting à la direction",
    ],
  },
  {
    title: "Gestion des risques",
    items: [
      "Cartographie des actifs critiques",
      "Analyse des risques cyber",
      "Plan de traitement des risques",
      "Suivi des indicateurs de risques",
    ],
  },
  {
    title: "Conformité",
    items: [
      "Mise en conformité réglementaire",
      "Préparation aux audits",
      "Certification ISO 27001",
      "Veille réglementaire",
    ],
  },
  {
    title: "Opérationnel",
    items: [
      "Pilotage des projets sécurité",
      "Supervision des prestataires",
      "Gestion des incidents",
      "Sensibilisation des équipes",
    ],
  },
];

const benefits = [
  {
    title: "Expertise senior",
    description: "Un RSSI expérimenté et certifié (CISSP, CISM, ISO 27001 LI/LA) dès le premier jour.",
  },
  {
    title: "Flexibilité",
    description: "Adaptez le temps de présence à vos besoins réels : quelques jours par mois à plusieurs jours par semaine.",
  },
  {
    title: "Coût maîtrisé",
    description: "L'expertise d'un RSSI senior sans le coût d'un recrutement à temps plein.",
  },
  {
    title: "Vision externe",
    description: "Un regard neuf et des benchmarks issus d'autres contextes pour enrichir vos pratiques.",
  },
];

const formulas = [
  { name: "Essential", days: "2-4 jours/mois", desc: "Pour les PME souhaitant structurer leur gouvernance SSI" },
  { name: "Business", days: "1-2 jours/semaine", desc: "Pour les entreprises avec des enjeux de conformité" },
  { name: "Premium", days: "3-4 jours/semaine", desc: "Pour les organisations nécessitant une présence soutenue" },
];

export default function RSSITempsPartage() {
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
            RSSI à <span className="text-[#7d53de]">temps partagé</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Un responsable sécurité expérimenté, sans les contraintes du recrutement
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi un RSSI externalisé ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Toutes les organisations n&apos;ont pas les moyens ou le besoin d&apos;un RSSI à temps plein.
              Pourtant, la cybersécurité nécessite une expertise et un pilotage continus. Notre offre
              de RSSI à temps partagé vous permet de bénéficier d&apos;une compétence senior adaptée
              à votre contexte.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Opérationnel immédiatement</p>
              <p>
                Nos RSSI sont des professionnels expérimentés qui connaissent les enjeux des PME
                et ETI. Ils sont opérationnels dès le premier jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Avantages du RSSI externalisé
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#7d53de] mb-2">{benefit.title}</h3>
                <p className="text-[#3c3a47] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Missions du RSSI
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {mission.title}
                </h3>
                <ul className="space-y-3">
                  {mission.items.map((item, idx) => (
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

      {/* Formulas */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nos formules
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formulas.map((formula, index) => (
              <div key={index} className="bg-white/5 border border-[#7d53de]/20 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">{formula.name}</h3>
                <div className="text-[#7d53de] text-2xl font-bold mb-4">{formula.days}</div>
                <p className="text-white/70 text-sm">{formula.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0e0c19] mb-6">
            Certifications de nos RSSI
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["CISSP", "CISM", "CISA", "ISO 27001 LA", "ISO 27001 LI", "CRISC", "CEH"].map((cert, index) => (
              <span key={index} className="bg-[#7d53de]/10 text-[#7d53de] px-4 py-2 rounded-full text-sm font-semibold">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un RSSI ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Discutons de vos besoins et trouvons la formule adaptée.
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
