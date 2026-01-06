import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de code source | Cyber-SSI",
  description: "Audit de code source pour détecter les vulnérabilités, renforcer la sécurité des applications et la conformité OWASP/ISO/RGPD.",
};

const approaches = [
  {
    title: "Analyse statique (SAST)",
    description: "Analyse automatisée du code source sans exécution",
    items: [
      "Détection des patterns de code vulnérable",
      "Identification des erreurs de configuration",
      "Vérification des dépendances (SCA)",
      "Analyse des secrets hardcodés",
    ],
  },
  {
    title: "Revue manuelle",
    description: "Analyse approfondie par nos experts sécurité",
    items: [
      "Revue des fonctions critiques",
      "Analyse de la logique métier",
      "Vérification des contrôles d'accès",
      "Évaluation de l'architecture",
    ],
  },
];

const vulnerabilities = [
  "Injection (SQL, LDAP, OS Command)",
  "Cross-Site Scripting (XSS)",
  "Broken Authentication",
  "Sensitive Data Exposure",
  "XML External Entities (XXE)",
  "Broken Access Control",
  "Security Misconfiguration",
  "Insecure Deserialization",
  "Using Components with Known Vulnerabilities",
  "Insufficient Logging & Monitoring",
];

const languages = [
  "Java / Spring",
  "Python / Django / Flask",
  "JavaScript / Node.js",
  "TypeScript / Angular / React",
  "C# / .NET",
  "PHP / Laravel / Symfony",
  "Go",
  "Ruby / Rails",
  "Swift / Kotlin",
  "C / C++",
];

export default function AuditCode() {
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
            Audit de <span className="text-[#7d53de]">code source</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Identifiez les vulnérabilités dans votre code avant la mise en production
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi auditer votre code ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              L&apos;audit de code source permet d&apos;identifier les failles de sécurité directement
              dans votre code applicatif, avant qu&apos;elles ne soient exploitées en production.
              Cette approche proactive permet de corriger les vulnérabilités au plus tôt dans
              le cycle de développement, réduisant significativement les coûts de correction.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Shift-Left Security</p>
              <p>
                Intégrer la sécurité dès les premières phases de développement permet de réduire
                de 100x le coût de correction des vulnérabilités par rapport à une découverte en production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Notre approche
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {approach.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{approach.description}</p>
                <ul className="space-y-3">
                  {approach.items.map((item, idx) => (
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

      {/* OWASP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Vulnérabilités OWASP Top 10
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              Notre audit couvre l&apos;ensemble des vulnérabilités du Top 10 OWASP
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {vulnerabilities.map((vuln, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <span className="text-[#3c3a47] text-sm">{vuln}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Langages et frameworks supportés
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 px-6 py-3 rounded-full"
              >
                <span className="text-white">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Livrables
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {[
              "Rapport détaillé des vulnérabilités identifiées",
              "Classification par criticité (CVSS)",
              "Extraits de code vulnérable",
              "Recommandations de correction avec exemples",
              "Synthèse exécutive pour la direction",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <span className="w-8 h-8 bg-[#7d53de] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </span>
                <span className="text-[#3c3a47]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez votre code
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Identifiez les vulnérabilités dans votre code source avant la mise en production.
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
