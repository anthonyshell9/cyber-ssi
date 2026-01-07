import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestion des vulnérabilités | Cyber-SSI",
  description: "Détectez, analysez et corrigez vos failles de sécurité avec un service complet de gestion des vulnérabilités.",
};

const process = [
  {
    step: "1",
    title: "Découverte",
    description: "Inventaire automatisé de tous vos actifs et découverte continue des nouveaux équipements.",
  },
  {
    step: "2",
    title: "Scan",
    description: "Scans de vulnérabilités réguliers sur l'ensemble du périmètre (interne et externe).",
  },
  {
    step: "3",
    title: "Analyse",
    description: "Qualification des vulnérabilités, élimination des faux positifs, priorisation par criticité.",
  },
  {
    step: "4",
    title: "Remédiation",
    description: "Accompagnement à la correction : patches, configurations, workarounds.",
  },
  {
    step: "5",
    title: "Vérification",
    description: "Re-scan pour valider la correction effective des vulnérabilités.",
  },
  {
    step: "6",
    title: "Reporting",
    description: "Tableaux de bord, KPIs, rapports de tendance et conformité.",
  },
];

const features = [
  {
    title: "Scans automatisés",
    items: [
      "Scans planifiés et à la demande",
      "Scans authentifiés et non authentifiés",
      "Couverture interne et externe",
      "Intégration CI/CD",
    ],
  },
  {
    title: "Priorisation intelligente",
    items: [
      "Score CVSS contextualisé",
      "Threat Intelligence intégrée",
      "Criticité des actifs",
      "Exploitabilité réelle",
    ],
  },
  {
    title: "Suivi de remédiation",
    items: [
      "Workflow de correction",
      "Attribution aux équipes",
      "SLA par criticité",
      "Escalade automatique",
    ],
  },
  {
    title: "Reporting avancé",
    items: [
      "Dashboards temps réel",
      "Évolution de la posture",
      "Rapports de conformité",
      "Export multi-format",
    ],
  },
];

export default function GestionVulnerabilites() {
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
            Gestion des <span className="text-[#7d53de]">vulnérabilités</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Identifiez et corrigez vos failles de sécurité en continu
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi la gestion des vulnérabilités ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Chaque jour, de nouvelles vulnérabilités sont découvertes dans les systèmes, applications
              et équipements. Sans un processus structuré de gestion des vulnérabilités, votre exposition
              aux risques augmente continuellement.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Exigence réglementaire</p>
              <p>
                La gestion des vulnérabilités est requise par NIS2, DORA, ISO 27001, PCI-DSS
                et la plupart des référentiels de sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre processus
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-[#7d53de] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{item.title}</h3>
                <p className="text-[#3c3a47] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Fonctionnalités
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
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

      {/* KPIs */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Indicateurs clés suivis
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "MTTR", desc: "Mean Time To Remediate" },
              { label: "% Critiques", desc: "Vulnérabilités critiques ouvertes" },
              { label: "Couverture", desc: "Actifs scannés" },
              { label: "Tendance", desc: "Évolution de l'exposition" },
            ].map((kpi, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl text-center"
              >
                <div className="text-2xl font-bold text-[#7d53de] mb-2">{kpi.label}</div>
                <div className="text-white/70 text-sm">{kpi.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Maîtrisez vos vulnérabilités
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Mettez en place un processus structuré de gestion des vulnérabilités.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander une démo
          </Link>
        </div>
      </section>
    </>
  );
}
