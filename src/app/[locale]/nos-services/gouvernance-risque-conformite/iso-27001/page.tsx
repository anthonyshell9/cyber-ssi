import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification ISO 27001 | Cyber-SSI",
  description: "Préparez votre certification ISO 27001 : audit du SMSI, cartographie des risques, mise en œuvre des contrôles et conformité garantie.",
};

const benefits = [
  {
    title: "Reconnaissance internationale",
    description: "ISO 27001 est la référence mondiale en matière de sécurité de l'information, reconnue par vos clients et partenaires.",
  },
  {
    title: "Avantage concurrentiel",
    description: "Différenciez-vous de la concurrence et répondez aux exigences de vos donneurs d'ordres.",
  },
  {
    title: "Conformité réglementaire",
    description: "Facilitez votre conformité RGPD, NIS2 et autres réglementations sectorielles.",
  },
  {
    title: "Réduction des risques",
    description: "Identifiez et traitez systématiquement les risques de sécurité de l'information.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Diagnostic initial",
    items: [
      "Analyse de l'existant et du contexte",
      "Identification des parties prenantes",
      "Définition du périmètre de certification",
      "Évaluation de l'écart (Gap Analysis)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Conception du SMSI",
    items: [
      "Politique de sécurité de l'information",
      "Méthodologie d'analyse des risques",
      "Déclaration d'applicabilité (SoA)",
      "Objectifs et indicateurs de sécurité",
    ],
  },
  {
    phase: "Phase 3",
    title: "Mise en œuvre",
    items: [
      "Implémentation des contrôles de l'Annexe A",
      "Rédaction des procédures et politiques",
      "Formation et sensibilisation",
      "Mise en place des outils de suivi",
    ],
  },
  {
    phase: "Phase 4",
    title: "Audit et certification",
    items: [
      "Audit interne préparatoire",
      "Revue de direction",
      "Accompagnement à l'audit de certification",
      "Suivi des actions correctives",
    ],
  },
];

const controls = [
  "Politiques de sécurité de l'information",
  "Organisation de la sécurité",
  "Sécurité des ressources humaines",
  "Gestion des actifs",
  "Contrôle d'accès",
  "Cryptographie",
  "Sécurité physique",
  "Sécurité des opérations",
  "Sécurité des communications",
  "Acquisition et développement",
  "Relations fournisseurs",
  "Gestion des incidents",
  "Continuité d'activité",
  "Conformité",
];

export default function ISO27001() {
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
            Certification <span className="text-[#7d53de]">ISO 27001</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Système de Management de la Sécurité de l&apos;Information
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que ISO 27001 ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La norme ISO/IEC 27001 est le standard international de référence pour la mise en place
              d&apos;un Système de Management de la Sécurité de l&apos;Information (SMSI). Elle définit
              les exigences pour établir, implémenter, maintenir et améliorer continuellement
              la sécurité de l&apos;information.
            </p>
            <p className="text-lg leading-relaxed">
              La certification ISO 27001 démontre à vos clients, partenaires et régulateurs que vous
              gérez la sécurité de l&apos;information de manière structurée et conforme aux meilleures pratiques.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi se certifier ISO 27001 ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{benefit.title}</h3>
                <p className="text-[#3c3a47] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Les 14 domaines de l&apos;Annexe A
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              93 contrôles de sécurité organisés en 14 domaines
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {controls.map((control, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-lg text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <span className="text-[#3c3a47] text-xs font-medium">{control}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre démarche de certification
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-[#7d53de] font-semibold text-sm mb-2">{phase.phase}</div>
                <h3 className="text-lg font-bold text-[#0e0c19] mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#3c3a47] text-sm">
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

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Préparez votre certification ISO 27001
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos consultants certifiés ISO 27001 Lead Implementer et Lead Auditor vous accompagnent.
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
