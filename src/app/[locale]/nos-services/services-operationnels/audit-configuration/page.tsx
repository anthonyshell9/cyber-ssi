import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de configuration | Cyber-SSI",
  description: "Optimisez vos systèmes et réduisez les risques avec un audit de configuration complet par Cyber-SSI.",
};

const auditTypes = [
  {
    title: "Active Directory",
    description: "Audit complet de votre environnement AD",
    items: [
      "Architecture et topologie",
      "Politique de mots de passe",
      "Comptes privilégiés et service accounts",
      "GPO et délégations",
      "Chemins d'attaque (BloodHound)",
    ],
  },
  {
    title: "Cloud Azure/M365",
    description: "Sécurité de vos environnements Microsoft Cloud",
    items: [
      "Configuration Entra ID (Azure AD)",
      "Accès conditionnels et MFA",
      "Microsoft 365 et Exchange Online",
      "Azure RBAC et IAM",
      "Microsoft Defender",
    ],
  },
  {
    title: "Infrastructure réseau",
    description: "Configuration de vos équipements réseau",
    items: [
      "Firewalls et segmentation",
      "VPN et accès distants",
      "Wi-Fi et NAC",
      "Switches et routeurs",
      "Load balancers et WAF",
    ],
  },
  {
    title: "Systèmes et serveurs",
    description: "Durcissement de vos serveurs",
    items: [
      "Windows Server",
      "Linux (RHEL, Ubuntu, Debian)",
      "Conteneurs et Kubernetes",
      "Bases de données",
      "Services web (Apache, Nginx, IIS)",
    ],
  },
];

const benchmarks = [
  { name: "CIS Benchmarks", description: "Center for Internet Security" },
  { name: "NIST", description: "National Institute of Standards" },
  { name: "ANSSI", description: "Guides de l'ANSSI" },
  { name: "Microsoft", description: "Security Baselines" },
  { name: "STIGs", description: "Security Technical Implementation Guides" },
];

export default function AuditConfiguration() {
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
            Audit de <span className="text-[#7d53de]">configuration</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Vérifiez la conformité de vos systèmes aux bonnes pratiques de sécurité
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi auditer vos configurations ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Les erreurs de configuration sont l&apos;une des principales causes de compromission
              des systèmes d&apos;information. Un audit de configuration permet d&apos;identifier
              les écarts par rapport aux bonnes pratiques de sécurité et aux standards de l&apos;industrie.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Statistique clé</p>
              <p>
                <strong>80%</strong> des attaques réussies exploitent des erreurs de configuration
                ou des paramètres par défaut non modifiés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Périmètres d&apos;audit
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditTypes.map((audit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {audit.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{audit.description}</p>
                <ul className="space-y-2">
                  {audit.items.map((item, idx) => (
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

      {/* Benchmarks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Référentiels utilisés
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              Nos audits s&apos;appuient sur les référentiels reconnus de l&apos;industrie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {benchmarks.map((benchmark, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <div className="text-lg font-bold text-[#7d53de] mb-1">{benchmark.name}</div>
                <div className="text-xs text-[#3c3a47]">{benchmark.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre méthodologie
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Collecte", desc: "Extraction automatisée des configurations actuelles" },
              { step: "2", title: "Analyse", desc: "Comparaison avec les référentiels et bonnes pratiques" },
              { step: "3", title: "Priorisation", desc: "Classification des écarts par criticité" },
              { step: "4", title: "Remédiation", desc: "Plan d'action détaillé avec scripts de correction" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#7d53de] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Durcissez vos systèmes
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Identifiez et corrigez les erreurs de configuration de votre SI.
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
