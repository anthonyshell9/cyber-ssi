import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conseils et Audits Cybersécurité | Cyber-SSI",
  description: "Accompagnement sur-mesure en audit, conformité (NIS2, ISO 27001…), gouvernance pour renforcer votre cybersécurité.",
};

const services = [
  {
    title: "Amélioration de la maturité cyber",
    description: "Renforcez votre résilience cyber : gouvernance, gestion des risques, outils et sensibilisation pour passer à la vitesse supérieure.",
    href: "/nos-services/conseils-audits/maturite-cyber",
  },
  {
    title: "Évaluer votre posture de sécurité",
    description: "Évaluez votre posture de sécurité : audit complet, tests d'intrusion, cartographie des risques et plan pour renforcer votre cybersécurité.",
    href: "/nos-services/conseils-audits/evaluer-posture",
  },
  {
    title: "Due Diligence Cyber",
    description: "Analysez la maturité cyber avant acquisition : due diligence complète pour sécuriser vos deals et décisions M&A.",
    href: "/nos-services/conseils-audits/due-diligence",
  },
  {
    title: "RSSI à temps partagé",
    description: "Bénéficiez d'un RSSI senior à temps partiel pour piloter votre sécurité, conformité et résilience cyber sans recrutement interne.",
    href: "/nos-services/conseils-audits/rssi-temps-partage",
  },
];

export default function ConseilsAudits() {
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
            Conseils et <span className="text-[#7d53de]">Audits</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            Accompagnement stratégique pour renforcer votre cybersécurité
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#3c3a47] text-lg leading-relaxed">
            Nos consultants et RSSI à temps partagé structurent votre gouvernance cybersécurité,
            pilotent vos analyses de risques, encadrent vos prestataires critiques et renforcent
            votre sécurité opérationnelle par des tests d&apos;intrusion et des audits techniques.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-[#0e0c19] mb-3 group-hover:text-[#7d53de] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#3c3a47] leading-relaxed">
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

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Pourquoi choisir Cyber-SSI ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise certifiée",
                description: "Consultants CISSP, CISM, ISO 27001 LA/LI avec une expérience terrain significative.",
              },
              {
                title: "Approche pragmatique",
                description: "Des recommandations concrètes et adaptées à votre contexte, pas de conseils théoriques.",
              },
              {
                title: "Accompagnement complet",
                description: "Du diagnostic à la mise en œuvre, nous vous accompagnons à chaque étape.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7d53de]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#7d53de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0e0c19] mb-2">{item.title}</h3>
                <p className="text-[#3c3a47] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un accompagnement ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Discutons de vos enjeux cybersécurité et voyons comment nous pouvons vous aider.
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
