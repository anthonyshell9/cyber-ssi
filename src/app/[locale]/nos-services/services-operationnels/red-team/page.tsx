import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Team | Cyber-SSI",
  description: "Testez votre résilience face à des cyberattaques avancées : simulation Red Team sur-mesure, détection renforcée et recommandations ciblées.",
};

const phases = [
  {
    title: "Reconnaissance",
    description: "Collecte d'informations sur votre organisation via OSINT, ingénierie sociale préparatoire.",
    items: [
      "Intelligence open source (OSINT)",
      "Identification des cibles",
      "Analyse des vecteurs d'attaque",
      "Préparation des prétextes",
    ],
  },
  {
    title: "Intrusion initiale",
    description: "Tentatives de compromission initiale par différents vecteurs.",
    items: [
      "Phishing ciblé (spear phishing)",
      "Exploitation de services exposés",
      "Attaques sur la chaîne d'approvisionnement",
      "Compromission physique",
    ],
  },
  {
    title: "Persistance & mouvement",
    description: "Maintien de l'accès et progression vers les objectifs.",
    items: [
      "Établissement de persistance",
      "Élévation de privilèges",
      "Mouvement latéral",
      "Évitement de la détection",
    ],
  },
  {
    title: "Objectifs & exfiltration",
    description: "Atteinte des objectifs définis et démonstration d'impact.",
    items: [
      "Accès aux données sensibles",
      "Compromission des systèmes critiques",
      "Simulation d'exfiltration",
      "Démonstration d'impact business",
    ],
  },
];

const differences = [
  {
    aspect: "Durée",
    pentest: "1-4 semaines",
    redteam: "2-6 mois",
  },
  {
    aspect: "Objectif",
    pentest: "Identifier les vulnérabilités",
    redteam: "Tester la détection et réponse",
  },
  {
    aspect: "Périmètre",
    pentest: "Défini et limité",
    redteam: "Large, évolutif",
  },
  {
    aspect: "Connaissance",
    pentest: "Blue Team informée",
    redteam: "Blue Team non informée",
  },
  {
    aspect: "Approche",
    pentest: "Exhaustif sur le périmètre",
    redteam: "Réaliste et ciblé",
  },
];

export default function RedTeam() {
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
            <span className="text-[#7d53de]">Red Team</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Simulation d&apos;attaques avancées pour tester votre résilience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce qu&apos;un exercice Red Team ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Un exercice Red Team est une simulation d&apos;attaque réaliste et avancée contre
              votre organisation. Contrairement à un test d&apos;intrusion classique, la Red Team
              utilise les mêmes tactiques, techniques et procédures (TTP) que les vrais attaquants.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              L&apos;objectif est d&apos;évaluer non seulement vos vulnérabilités techniques, mais
              surtout la capacité de votre organisation à <strong>détecter</strong> et
              <strong> répondre</strong> à une attaque sophistiquée.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">TIBER-EU / DORA TLPT</p>
              <p>
                Nos exercices Red Team peuvent être réalisés dans le cadre des tests TLPT
                (Threat-Led Penetration Testing) requis par DORA pour les entités financières significatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Red Team vs Pentest
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-[#7d53de] text-white">
                  <th className="px-6 py-4 text-left">Aspect</th>
                  <th className="px-6 py-4 text-left">Pentest</th>
                  <th className="px-6 py-4 text-left">Red Team</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((diff, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-[#0e0c19]">{diff.aspect}</td>
                    <td className="px-6 py-4 text-[#3c3a47]">{diff.pentest}</td>
                    <td className="px-6 py-4 text-[#3c3a47]">{diff.redteam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Déroulement d&apos;un exercice Red Team
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#7d53de] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0e0c19]">{phase.title}</h3>
                </div>
                <p className="text-[#7d53de] text-sm mb-4">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#3c3a47] text-sm">
                      <span className="text-[#7d53de]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Techniques utilisées
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Spear Phishing",
              "Vishing",
              "Malware personnalisé",
              "Exploitation 0-day",
              "Social Engineering",
              "Physical Security",
              "Wireless Attacks",
              "Supply Chain",
            ].map((technique, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-4 rounded-xl text-center"
              >
                <span className="text-white text-sm">{technique}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Testez votre résilience
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Découvrez comment votre organisation réagirait face à une attaque sophistiquée.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Planifier un exercice
          </Link>
        </div>
      </section>
    </>
  );
}
