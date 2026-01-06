import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gouvernance, Risque et Conformité | Cyber-SSI",
  description: "Structurez votre gouvernance cyber : conformité réglementaire, RSSI externalisé, PCA/PRA, analyse de risques. Accompagnement sur-mesure.",
};

const services = [
  {
    title: "Mise en conformité NIS2",
    description: "Conformez-vous à NIS2 : gouvernance, gestion des risques, notification d'incidents et supervision chaîne d'approvisionnement.",
    href: "/nos-services/gouvernance-risque-conformite/nis2",
  },
  {
    title: "Mise en conformité DORA",
    description: "Conformez-vous au règlement DORA : audit des risques TIC, tests de résilience, gestion des prestataires & réponse cyber pour entités financières.",
    href: "/nos-services/gouvernance-risque-conformite/dora",
  },
  {
    title: "ISO 27001",
    description: "Préparez votre certification ISO 27001 : audit du SMSI, cartographie des risques, mise en œuvre des contrôles et conformité garantie.",
    href: "/nos-services/gouvernance-risque-conformite/iso-27001",
  },
  {
    title: "ISO/IEC 42001",
    description: "Adoptez une gouvernance IA responsable : audit SMIA, cartographie risques IA, conformité ISO/IEC 42001 pour une IA fiable et éthique.",
    href: "/nos-services/gouvernance-risque-conformite/iso-42001",
  },
  {
    title: "AI Act",
    description: "Anticipez l'AI Act : audit IA, cartographie des systèmes, gouvernance & conformité pour éviter jusqu'à 35 M€ d'amende.",
    href: "/nos-services/gouvernance-risque-conformite/ai-act",
  },
  {
    title: "VARA",
    description: "Accompagnement VARA pour les VASP à Dubaï : gouvernance des crypto-actifs, sécurité des clés, conformité globale.",
    href: "/nos-services/gouvernance-risque-conformite/vara",
  },
];

export default function GouvernanceRisqueConformite() {
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
            Nos Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Gouvernance, Risque et <span className="text-[#7d53de]">Conformité</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Structurez votre gouvernance cyber et assurez votre conformité réglementaire
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#3c3a47] text-lg leading-relaxed">
            Les entreprises européennes font face à plusieurs réglementations cybersécurité :
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong className="text-[#7d53de]">NIS 2</strong> : Gouvernance, gestion d&apos;incidents et analyse de risques pour secteurs essentiels
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong className="text-[#7d53de]">DORA</strong> : Obligations spécifiques au secteur financier
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong className="text-[#7d53de]">RGPD</strong> : Protection des données personnelles
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong className="text-[#7d53de]">Normes sectorielles</strong> : Exigences supplémentaires selon le domaine d&apos;activité
            </div>
          </div>
          <p className="text-[#3c3a47] text-lg mt-8">
            Toutes les entreprises doivent démontrer leur conformité pour éviter sanctions, perte de confiance et blocages commerciaux.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos Expertises
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-[#0e0c19] mb-3 group-hover:text-[#7d53de] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#3c3a47] text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-[#7d53de] font-semibold text-sm flex items-center gap-2">
                  En savoir plus
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un accompagnement conformité ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Nos experts vous accompagnent dans votre mise en conformité réglementaire.
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
