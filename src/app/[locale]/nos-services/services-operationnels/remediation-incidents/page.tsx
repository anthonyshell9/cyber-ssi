import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support à la remédiation d'incidents | Cyber-SSI",
  description: "Intervention rapide après cyberattaque : analyse forensique, suppression de la menace, restauration sécurisée de votre infrastructure.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Containment",
    description: "Isoler la menace pour stopper sa propagation",
    items: [
      "Isolation des systèmes compromis",
      "Blocage des communications malveillantes",
      "Préservation des preuves",
      "Communication de crise",
    ],
  },
  {
    phase: "Phase 2",
    title: "Investigation",
    description: "Comprendre l'attaque et son étendue",
    items: [
      "Analyse forensique",
      "Timeline de l'attaque",
      "Identification du vecteur initial",
      "Cartographie de la compromission",
    ],
  },
  {
    phase: "Phase 3",
    title: "Eradication",
    description: "Éliminer la menace de l'environnement",
    items: [
      "Suppression des malwares",
      "Fermeture des backdoors",
      "Révocation des accès compromis",
      "Nettoyage des systèmes",
    ],
  },
  {
    phase: "Phase 4",
    title: "Recovery",
    description: "Restaurer les opérations en toute sécurité",
    items: [
      "Restauration des systèmes",
      "Vérification de l'intégrité",
      "Remise en production progressive",
      "Monitoring renforcé",
    ],
  },
];

const incidents = [
  "Ransomware",
  "Data Breach",
  "Compromission de comptes",
  "Attaque sur Active Directory",
  "Phishing / BEC",
  "Intrusion réseau",
  "Cryptominage",
  "Défacement web",
];

export default function RemediationIncidents() {
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
            Services Opérationnels
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Support à la <span className="text-[#7d53de]">remédiation d&apos;incidents</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Intervention rapide pour contenir, éradiquer et récupérer après une cyberattaque
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white font-semibold">
            Vous êtes victime d&apos;une cyberattaque ? Contactez-nous en urgence : contact@cyber-ssi.com
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Réponse aux incidents de sécurité
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Face à une cyberattaque, chaque minute compte. Notre équipe d&apos;experts intervient
              rapidement pour vous aider à contenir la menace, comprendre l&apos;attaque, éradiquer
              les éléments malveillants et restaurer vos opérations en toute sécurité.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Notre engagement</p>
              <p>
                Intervention rapide, communication transparente, préservation des preuves pour
                d&apos;éventuelles poursuites judiciaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Types d&apos;incidents traités
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {incidents.map((incident, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#3c3a47] font-medium">{incident}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre méthodologie PICERL
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-[#7d53de] font-semibold text-sm mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">{phase.title}</h3>
                <p className="text-[#3c3a47] text-sm mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
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

      {/* Post-Incident */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Après l&apos;incident
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapport d'incident",
                description: "Documentation complète de l'incident, timeline, vecteur d'attaque, impacts et actions menées.",
              },
              {
                title: "Lessons Learned",
                description: "Analyse des causes racines et recommandations pour éviter la récurrence.",
              },
              {
                title: "Plan d'amélioration",
                description: "Actions de renforcement de la sécurité basées sur les enseignements de l'incident.",
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
            Besoin d&apos;une intervention urgente ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Notre équipe est disponible pour vous accompagner face à un incident de sécurité.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Contact urgence
          </Link>
        </div>
      </section>
    </>
  );
}
