import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité Azure, Office 365 & Intune | Cyber-SSI",
  description: "Protégez vos environnements Azure, Office 365 & Intune : audit complet, MFA, chiffrement et conformité pour une sécurité cloud optimale.",
};

const services = [
  {
    title: "Microsoft Entra ID (Azure AD)",
    items: [
      "Audit de configuration Entra ID",
      "Mise en place des accès conditionnels",
      "Configuration MFA et passwordless",
      "Protection des identités (Identity Protection)",
      "Privileged Identity Management (PIM)",
    ],
  },
  {
    title: "Microsoft 365",
    items: [
      "Sécurisation Exchange Online",
      "Protection contre le phishing",
      "Data Loss Prevention (DLP)",
      "Microsoft Defender for Office 365",
      "Classification et étiquetage des données",
    ],
  },
  {
    title: "Azure Security",
    items: [
      "Audit Azure RBAC et IAM",
      "Microsoft Defender for Cloud",
      "Azure Network Security",
      "Key Vault et gestion des secrets",
      "Azure Policy et Blueprints",
    ],
  },
  {
    title: "Microsoft Intune",
    items: [
      "Configuration des politiques MDM",
      "Gestion des appareils (BYOD, Corporate)",
      "Déploiement des configurations",
      "Compliance policies",
      "App Protection Policies",
    ],
  },
];

const securityFeatures = [
  "Conditional Access",
  "Identity Protection",
  "Privileged Identity Management",
  "Microsoft Defender for Endpoint",
  "Microsoft Defender for Cloud Apps",
  "Microsoft Sentinel",
  "Azure Information Protection",
  "Data Loss Prevention",
];

export default function SecuriteAzure() {
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
            Sécurité <span className="text-[#7d53de]">Azure & Microsoft 365</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Protégez vos environnements cloud Microsoft
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Expertise Microsoft Security
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              La migration vers le cloud Microsoft offre de nombreux avantages, mais expose également
              votre organisation à de nouveaux risques. Nos experts certifiés Microsoft vous accompagnent
              dans la sécurisation de vos environnements Azure, Microsoft 365 et Intune.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Modèle de responsabilité partagée</p>
              <p>
                Dans le cloud, Microsoft sécurise l&apos;infrastructure, mais vous restez responsable
                de la configuration et de la protection de vos données. C&apos;est là que nous intervenons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos services
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
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

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Technologies Microsoft Security
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              Nous déployons et configurons l&apos;ensemble des solutions de sécurité Microsoft
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 px-6 py-3 rounded-full hover:bg-[#7d53de]/10 transition-colors"
              >
                <span className="text-[#3c3a47] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre approche
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Audit",
                description: "Évaluation de la configuration actuelle de vos environnements Microsoft",
              },
              {
                step: "2",
                title: "Plan de sécurisation",
                description: "Recommandations priorisées basées sur les best practices Microsoft",
              },
              {
                step: "3",
                title: "Implémentation",
                description: "Déploiement des mesures de sécurité et accompagnement au changement",
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

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0e0c19] mb-6">
            Certifications Microsoft de nos consultants
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MS-500",
              "AZ-500",
              "SC-200",
              "SC-300",
              "SC-400",
              "MD-102",
            ].map((cert, index) => (
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
            Sécurisez votre cloud Microsoft
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts Microsoft vous accompagnent dans la sécurisation de vos environnements.
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
