import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test d'intrusion (Pentest) | Cyber-SSI",
  description: "Simulez une attaque réelle pour identifier vos vulnérabilités, renforcer votre défense et répondre aux enjeux conformité (NIS2, ISO 27001...).",
};

const testTypes = [
  {
    title: "Pentest applicatif",
    description: "Tests de sécurité sur vos applications web, mobiles et API.",
    items: [
      "Applications web (OWASP Top 10)",
      "Applications mobiles iOS/Android",
      "API REST, GraphQL, SOAP",
      "Applications métier",
    ],
  },
  {
    title: "Pentest infrastructure",
    description: "Évaluation de la sécurité de votre infrastructure réseau.",
    items: [
      "Infrastructure réseau",
      "Active Directory",
      "Cloud (Azure, AWS, GCP)",
      "Postes de travail",
    ],
  },
  {
    title: "Pentest externe",
    description: "Simulation d'attaque depuis Internet sur votre périmètre exposé.",
    items: [
      "Reconnaissance et OSINT",
      "Scan de vulnérabilités",
      "Exploitation des failles",
      "Test des services exposés",
    ],
  },
  {
    title: "Pentest interne",
    description: "Simulation d'un attaquant ayant déjà un accès au réseau interne.",
    items: [
      "Élévation de privilèges",
      "Mouvement latéral",
      "Compromission du domaine",
      "Exfiltration de données",
    ],
  },
];

const methodology = [
  {
    step: "1",
    title: "Cadrage",
    description: "Définition du périmètre, des objectifs et des règles d'engagement.",
  },
  {
    step: "2",
    title: "Reconnaissance",
    description: "Collecte d'informations sur la cible et identification des surfaces d'attaque.",
  },
  {
    step: "3",
    title: "Analyse",
    description: "Recherche de vulnérabilités et analyse des failles identifiées.",
  },
  {
    step: "4",
    title: "Exploitation",
    description: "Tentatives d'exploitation des vulnérabilités pour évaluer l'impact réel.",
  },
  {
    step: "5",
    title: "Rapport",
    description: "Documentation détaillée des vulnérabilités avec recommandations priorisées.",
  },
];

export default function TestIntrusion() {
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
            Test d&apos;intrusion <span className="text-[#7d53de]">(Pentest)</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Identifiez vos vulnérabilités avant qu&apos;un attaquant ne les exploite
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi réaliser un test d&apos;intrusion ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Un test d&apos;intrusion (pentest) simule une cyberattaque réelle contre votre système
              d&apos;information pour identifier les vulnérabilités exploitables par un attaquant.
              Contrairement à un simple scan de vulnérabilités, le pentest valide concrètement
              la possibilité d&apos;exploitation des failles.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Exigence réglementaire</p>
              <p>
                Les tests d&apos;intrusion sont requis par de nombreuses réglementations et normes :
                NIS2, DORA (TLPT), ISO 27001, PCI-DSS, et sont souvent demandés par les assureurs cyber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Types de tests d&apos;intrusion
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {type.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
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

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre méthodologie
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {methodology.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0e0c19]">{step.title}</h3>
                  <p className="text-[#3c3a47]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Certifications de nos pentesters
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["OSCP", "OSWE", "OSEP", "CEH", "GPEN", "eWPT", "CRTO"].map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Testez votre sécurité
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Identifiez vos vulnérabilités avant qu&apos;un attaquant ne le fasse.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
