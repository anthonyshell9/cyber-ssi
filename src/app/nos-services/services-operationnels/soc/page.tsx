import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOC Essential | Cyber-SSI",
  description: "Surveillez, détectez et neutralisez les attaques en temps réel grâce à un SOC externalisé clé en main, sans investissement interne.",
};

const services = [
  {
    title: "Surveillance 24/7",
    description: "Monitoring continu de votre SI",
    items: [
      "Collecte centralisée des logs",
      "Analyse en temps réel",
      "Corrélation des événements",
      "Détection des anomalies",
    ],
  },
  {
    title: "Détection des menaces",
    description: "Identification proactive des attaques",
    items: [
      "Règles de détection personnalisées",
      "Threat Intelligence intégrée",
      "Machine Learning / UEBA",
      "IOC et TTPs surveillés",
    ],
  },
  {
    title: "Réponse aux incidents",
    description: "Actions rapides en cas d'alerte",
    items: [
      "Qualification des alertes",
      "Triage et priorisation",
      "Procédures de réponse",
      "Coordination avec vos équipes",
    ],
  },
  {
    title: "Reporting",
    description: "Visibilité sur votre sécurité",
    items: [
      "Tableaux de bord temps réel",
      "Rapports mensuels",
      "KPIs de sécurité",
      "Tendances et recommandations",
    ],
  },
];

const technologies = [
  "Microsoft Sentinel",
  "Splunk",
  "Elastic Security",
  "IBM QRadar",
  "Google Chronicle",
  "CrowdStrike",
  "SentinelOne",
  "Palo Alto Cortex",
];

const coverage = [
  { label: "Endpoints", desc: "Postes de travail et serveurs" },
  { label: "Réseau", desc: "Firewalls, IDS/IPS, proxy" },
  { label: "Cloud", desc: "Azure, AWS, GCP, M365" },
  { label: "Identités", desc: "Active Directory, Entra ID" },
  { label: "Applications", desc: "Applicatifs métiers, web" },
  { label: "Email", desc: "Protection messagerie" },
];

export default function SOC() {
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
            <span className="text-[#7d53de]">SOC</span> Essential
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Centre opérationnel de sécurité externalisé, disponible 24/7
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi un SOC externalisé ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Mettre en place un SOC interne nécessite des investissements conséquents : technologies,
              recrutement d&apos;analystes, formation continue, astreintes 24/7. Notre offre SOC Essential
              vous permet de bénéficier d&apos;une surveillance professionnelle sans ces contraintes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { value: "24/7", label: "Surveillance continue" },
                { value: "<15min", label: "Temps de réponse" },
                { value: "100%", label: "Alertes qualifiées" },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-[#7d53de]">{stat.value}</div>
                  <div className="text-[#3c3a47] text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos services SOC
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
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

      {/* Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Périmètre de surveillance
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coverage.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <div className="font-semibold text-[#0e0c19]">{item.label}</div>
                <div className="text-xs text-[#3c3a47] mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies utilisées
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Notre SOC s&apos;appuie sur les meilleures solutions du marché
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Tarification simple
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <p className="text-[#3c3a47] text-lg mb-6">
              Notre offre SOC Essential est proposée en abonnement mensuel,
              avec une tarification basée sur le volume de données à surveiller
              et le nombre de sources de logs.
            </p>
            <p className="text-[#0e0c19] font-semibold">
              Pas de coût caché, pas d&apos;engagement longue durée.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protégez votre SI 24/7
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Bénéficiez d&apos;une surveillance professionnelle sans les contraintes d&apos;un SOC interne.
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
