import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité IoT | Cyber-SSI",
  description: "Sécurisez vos objets connectés : évaluation des risques IoT, renforcement des appareils, surveillance continue & conformité RGPD/ISO-62443.",
};

const services = [
  {
    title: "Audit de sécurité IoT",
    items: [
      "Inventaire et cartographie des objets connectés",
      "Analyse des risques spécifiques IoT",
      "Tests de sécurité des protocoles",
      "Évaluation des firmwares",
      "Analyse des communications",
    ],
  },
  {
    title: "Durcissement des appareils",
    items: [
      "Configuration sécurisée",
      "Mise à jour des firmwares",
      "Désactivation des services non nécessaires",
      "Chiffrement des communications",
      "Authentification renforcée",
    ],
  },
  {
    title: "Architecture sécurisée",
    items: [
      "Segmentation réseau IoT",
      "Passerelles sécurisées",
      "Zones de confiance",
      "Accès contrôlés",
      "Monitoring dédié",
    ],
  },
  {
    title: "Surveillance continue",
    items: [
      "Détection d'anomalies comportementales",
      "Monitoring du trafic IoT",
      "Alerting sur les menaces",
      "Gestion des incidents IoT",
      "Threat Intelligence IoT",
    ],
  },
];

const sectors = [
  { name: "Industrie 4.0", icon: "🏭" },
  { name: "Smart Building", icon: "🏢" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Smart City", icon: "🌆" },
  { name: "Transport", icon: "🚗" },
  { name: "Énergie", icon: "⚡" },
  { name: "Retail", icon: "🛒" },
  { name: "Agriculture", icon: "🌾" },
];

export default function SecuriteIoT() {
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
            Sécurité <span className="text-[#7d53de]">IoT</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Protégez vos objets connectés et infrastructures IoT
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Les enjeux de la sécurité IoT
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Les objets connectés (IoT) se multiplient dans les entreprises : capteurs industriels,
              caméras de surveillance, équipements médicaux, systèmes de contrôle d&apos;accès...
              Ces appareils, souvent mal sécurisés, constituent une surface d&apos;attaque importante.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Risques spécifiques</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Mots de passe par défaut non modifiés</li>
                <li>Firmwares obsolètes et vulnérables</li>
                <li>Communications non chiffrées</li>
                <li>Absence de segmentation réseau</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Secteurs d&apos;intervention
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{sector.icon}</div>
                <div className="font-semibold text-[#0e0c19]">{sector.name}</div>
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
              Nos services IoT
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

      {/* Standards */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Standards et référentiels
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["IEC 62443", "NIST IoT", "ETSI EN 303 645", "OWASP IoT", "ISO 27400", "GSMA IoT"].map((standard, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez vos objets connectés
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts IoT vous accompagnent dans la sécurisation de votre parc d&apos;objets connectés.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un audit IoT
          </Link>
        </div>
      </section>
    </>
  );
}
