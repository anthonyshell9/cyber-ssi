import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité robotique | Cyber-SSI",
  description: "Protégez vos robots et systèmes automatisés : audit, durcissement, surveillance & conformité pour une exploitation sécurisée.",
};

const risks = [
  {
    title: "Prise de contrôle",
    description: "Un attaquant peut prendre le contrôle du robot et lui faire exécuter des actions malveillantes.",
  },
  {
    title: "Sabotage de production",
    description: "Modification des paramètres pour produire des pièces défectueuses ou endommager les équipements.",
  },
  {
    title: "Espionnage industriel",
    description: "Exfiltration des programmes, trajectoires et données de production confidentielles.",
  },
  {
    title: "Sécurité physique",
    description: "Mise en danger des opérateurs par des mouvements imprévisibles ou dangereux.",
  },
];

const services = [
  {
    title: "Audit de sécurité robotique",
    items: [
      "Inventaire des systèmes robotiques",
      "Analyse des risques spécifiques",
      "Tests de pénétration OT",
      "Évaluation des protocoles industriels",
      "Analyse des interfaces homme-machine",
    ],
  },
  {
    title: "Durcissement des systèmes",
    items: [
      "Configuration sécurisée des robots",
      "Mise à jour des firmwares",
      "Gestion des accès et authentification",
      "Chiffrement des communications",
      "Désactivation des services non utilisés",
    ],
  },
  {
    title: "Architecture sécurisée",
    items: [
      "Segmentation OT/IT",
      "Zones de sécurité (Purdue Model)",
      "DMZ industrielle",
      "Passerelles sécurisées",
      "Accès distants contrôlés",
    ],
  },
  {
    title: "Surveillance et détection",
    items: [
      "Monitoring des systèmes robotiques",
      "Détection d'anomalies",
      "Alerting sur les comportements suspects",
      "Forensics OT",
      "SOC industriel",
    ],
  },
];

export default function SecuriteRobotique() {
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
            Sécurité <span className="text-[#7d53de]">robotique</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Protégez vos robots industriels et systèmes automatisés
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Enjeux de la cybersécurité robotique
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Les robots industriels sont de plus en plus connectés et automatisés. Cette digitalisation
              améliore la productivité mais crée de nouvelles vulnérabilités. Une cyberattaque sur
              un robot peut avoir des conséquences graves : arrêt de production, dommages physiques,
              vol de propriété intellectuelle.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">Convergence IT/OT</p>
              <p className="text-red-700">
                La connexion des systèmes robotiques au réseau IT crée de nouveaux vecteurs d&apos;attaque.
                Les protocoles industriels (Modbus, OPC UA, EtherNet/IP) ne sont pas conçus pour la sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Risques cyber sur les robots
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {risks.map((risk, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{risk.title}</h3>
                <p className="text-[#3c3a47] text-sm">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos services
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {service.title}
                </h3>
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

      {/* Manufacturers */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Expertise multi-fabricants
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nous intervenons sur les principaux fabricants de robots industriels
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["ABB", "FANUC", "KUKA", "Universal Robots", "Yaskawa", "Stäubli", "Mitsubishi", "Kawasaki"].map((brand, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez vos robots industriels
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts OT vous accompagnent dans la sécurisation de vos systèmes robotiques.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un audit
          </Link>
        </div>
      </section>
    </>
  );
}
