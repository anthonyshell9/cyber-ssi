import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conformité VARA | Cyber-SSI",
  description: "Accompagnement VARA pour les VASP à Dubaï : gouvernance des crypto-actifs, sécurité des clés, conformité globale.",
};

const requirements = [
  {
    title: "Gouvernance et organisation",
    items: [
      "Structure organisationnelle adaptée aux activités crypto",
      "Séparation des fonctions clés",
      "Comité de direction qualifié",
      "Responsable conformité dédié",
    ],
  },
  {
    title: "Gestion des risques",
    items: [
      "Cadre de gestion des risques opérationnels",
      "Évaluation des risques crypto-spécifiques",
      "Plans de continuité d'activité",
      "Gestion des risques de garde",
    ],
  },
  {
    title: "Sécurité des actifs",
    items: [
      "Ségrégation des actifs clients",
      "Solutions de custody sécurisées",
      "Gestion des clés cryptographiques",
      "Protocoles de récupération",
    ],
  },
  {
    title: "Conformité réglementaire",
    items: [
      "KYC/AML renforcés",
      "Travel Rule compliance",
      "Reporting aux autorités",
      "Audit et certification",
    ],
  },
];

const services = [
  "Exchange de crypto-actifs",
  "Broker-dealer",
  "Custody services",
  "Lending platforms",
  "Advisory services",
  "Management & Investment",
  "Transfer & Settlement",
];

export default function VARA() {
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
            Conformité <span className="text-[#7d53de]">VARA</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Virtual Assets Regulatory Authority - Dubai
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Qu&apos;est-ce que VARA ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-[#3c3a47]">
            <p className="text-lg leading-relaxed mb-6">
              VARA (Virtual Assets Regulatory Authority) est l&apos;autorité de régulation des actifs
              virtuels de Dubaï. Elle supervise l&apos;ensemble des activités liées aux crypto-actifs
              dans l&apos;émirat, de l&apos;échange à la custody en passant par les services de conseil.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Pour opérer à Dubaï, les Virtual Asset Service Providers (VASP) doivent obtenir
              une licence VARA et respecter des exigences strictes en matière de gouvernance,
              de sécurité et de conformité.
            </p>
            <div className="bg-[#7d53de]/10 border-l-4 border-[#7d53de] p-6 rounded-r-lg">
              <p className="text-[#0e0c19] font-semibold mb-2">Dubaï, hub crypto mondial</p>
              <p>
                Dubaï s&apos;est positionnée comme une destination attractive pour les entreprises
                crypto grâce à un cadre réglementaire clair et favorable à l&apos;innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e0c19] mb-4">
              Activités réglementées par VARA
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-[#3c3a47] font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Exigences VARA
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-[#0e0c19] mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
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

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre accompagnement VARA
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Préparation",
                description: "Évaluation de votre éligibilité, définition du scope et préparation du dossier de candidature.",
              },
              {
                step: "2",
                title: "Mise en conformité",
                description: "Implémentation des politiques, procédures et contrôles requis par VARA.",
              },
              {
                step: "3",
                title: "Licence & suivi",
                description: "Accompagnement dans le processus de licensing et support post-licence.",
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

      {/* Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0e0c19] mb-6">
            Notre expertise crypto & blockchain
          </h2>
          <p className="text-[#3c3a47] text-lg mb-8">
            Cyber-SSI accompagne les acteurs DeFi, CeFi et Web3 dans leur conformité aux exigences
            DORA, ISO 27001, SOC 2 et des régulateurs (AMF, ACPR, DFIC, VARA) en alliant expertise
            réglementaire et technique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["DeFi", "CeFi", "NFT", "Custody", "Exchange", "Staking"].map((tag, index) => (
              <span key={index} className="bg-[#7d53de]/10 text-[#7d53de] px-4 py-2 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Obtenez votre licence VARA
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts crypto vous accompagnent dans votre mise en conformité VARA.
          </p>
          <Link
            href="/#contact"
            className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
}
