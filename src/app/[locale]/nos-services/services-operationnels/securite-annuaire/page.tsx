import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité des services d'annuaire | Cyber-SSI",
  description: "Protégez votre Active Directory ou Azure AD : audit, MFA, réduction des privilèges et détection d'activités suspectes.",
};

const services = [
  {
    title: "Audit Active Directory",
    description: "Évaluation complète de la sécurité de votre environnement AD",
    items: [
      "Architecture et conception",
      "Comptes à privilèges",
      "Chemins d'attaque (BloodHound)",
      "Politique de mots de passe",
      "Group Policy Objects (GPO)",
      "Délégations et permissions",
    ],
  },
  {
    title: "Durcissement AD",
    description: "Mise en œuvre des mesures de protection",
    items: [
      "Tiering Model (Tiers 0, 1, 2)",
      "Privileged Access Workstations (PAW)",
      "LAPS (Local Administrator Password Solution)",
      "Suppression des chemins d'attaque",
      "Configuration des GPO de sécurité",
      "Restriction des protocoles obsolètes",
    ],
  },
  {
    title: "Surveillance et détection",
    description: "Mise en place de la supervision",
    items: [
      "Collecte et analyse des logs AD",
      "Détection des attaques (Kerberoasting, DCSync...)",
      "Alerting sur les modifications critiques",
      "Microsoft Defender for Identity",
      "Honeypots et leurres",
    ],
  },
  {
    title: "Plan de reprise",
    description: "Préparation à la récupération en cas d'incident",
    items: [
      "Sauvegarde des contrôleurs de domaine",
      "Procédures de restauration",
      "Tests de reprise d'activité",
      "Documentation technique",
    ],
  },
];

const attacks = [
  { name: "Kerberoasting", desc: "Extraction de tickets de service" },
  { name: "AS-REP Roasting", desc: "Attaque sur les comptes sans pré-authentification" },
  { name: "DCSync", desc: "Réplication des credentials AD" },
  { name: "Golden Ticket", desc: "Forge de tickets Kerberos" },
  { name: "Silver Ticket", desc: "Forge de tickets de service" },
  { name: "Pass-the-Hash", desc: "Réutilisation de hash NTLM" },
  { name: "Pass-the-Ticket", desc: "Réutilisation de tickets Kerberos" },
  { name: "AdminSDHolder", desc: "Persistance via SDProp" },
];

export default function SecuriteAnnuaire() {
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
            Sécurité des <span className="text-[#7d53de]">services d&apos;annuaire</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Protégez votre Active Directory, cible privilégiée des attaquants
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Pourquoi sécuriser Active Directory ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              Active Directory est au cœur de la plupart des systèmes d&apos;information. Il gère
              les identités, les accès et les politiques de sécurité de votre organisation.
              C&apos;est pourquoi il constitue une cible privilégiée pour les attaquants.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">Statistique clé</p>
              <p className="text-red-700">
                <strong>95%</strong> des attaques par ransomware passent par la compromission
                de l&apos;Active Directory pour se propager dans le réseau.
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
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#7d53de] text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
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

      {/* Common Attacks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Attaques courantes sur Active Directory
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              Nous identifions et protégeons contre les techniques d&apos;attaque les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {attacks.map((attack, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg hover:bg-[#7d53de]/10 transition-colors"
              >
                <div className="font-semibold text-[#0e0c19] text-sm">{attack.name}</div>
                <div className="text-xs text-[#3c3a47] mt-1">{attack.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiering Model */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modèle de Tiering
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nous implémentons le modèle de tiering Microsoft pour protéger vos assets critiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Tier 0",
                title: "Contrôle de l'identité",
                assets: "Contrôleurs de domaine, PKI, ADFS, Azure AD Connect",
                color: "bg-red-500",
              },
              {
                tier: "Tier 1",
                title: "Serveurs et applications",
                assets: "Serveurs d'applications, bases de données, middleware",
                color: "bg-orange-500",
              },
              {
                tier: "Tier 2",
                title: "Postes de travail",
                assets: "Postes utilisateurs, appareils mobiles, imprimantes",
                color: "bg-yellow-500",
              },
            ].map((tier, index) => (
              <div key={index} className="bg-white/5 border border-[#7d53de]/20 rounded-xl overflow-hidden">
                <div className={`${tier.color} px-6 py-3`}>
                  <span className="text-white font-bold">{tier.tier}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{tier.title}</h3>
                  <p className="text-white/70 text-sm">{tier.assets}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sécurisez votre Active Directory
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Protégez le cœur de votre système d&apos;information contre les attaquants.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Demander un audit AD
          </Link>
        </div>
      </section>
    </>
  );
}
