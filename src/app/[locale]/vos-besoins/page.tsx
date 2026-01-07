import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vos Besoins en Cybersécurité | Cyber-SSI",
  description: "Identifiez vos besoins en sécurité informatique : conformité réglementaire, évaluation de posture, amélioration de maturité cyber, tests d'intrusion.",
};

const besoins = [
  {
    title: "Mise en conformité réglementaire",
    description: "Vous souhaitez identifier les obligations applicables à votre activité et être accompagné dans leur mise en œuvre ?",
    href: "/nos-services/gouvernance-risque-conformite",
  },
  {
    title: "Évaluer votre posture de sécurité",
    description: "Vous souhaitez évaluer votre entreprise au regard des réglementations et des normes en cybersécurité ? Identifier vos écarts et prioriser vos actions de mise en conformité ?",
    href: "/nos-services/conseils-et-audits",
  },
  {
    title: "Améliorer la maturité cyber de votre entreprise",
    description: "Vous souhaitez structurer votre démarche cybersécurité, renforcer vos dispositifs existants et aligner vos pratiques avec les standards du marché ?",
    href: "/nos-services",
  },
  {
    title: "Tester la résistance de votre système",
    description: "Vous souhaitez simuler des attaques réelles pour évaluer la résistance de votre système d'information ? Nos équipes réalisent des tests d'intrusion, audits techniques et exercices Red Team.",
    href: "/nos-services/services-operationnels",
  },
];

export default function VosBesoins() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-animation="fadeInDown">
            Quels sont vos besoins en{" "}
            <span className="text-[#7d53de]">sécurité informatique</span> ?
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1" data-animation="fadeInLeft">
              <p className="text-[#3c3a47] text-lg leading-relaxed mb-6">
                Vous n&apos;avez pas encore structuré votre <strong>stratégie de sécurité informatique</strong> ?
                Vous ignorez si vous êtes conforme aux dernières réglementations qui s&apos;imposent à votre entreprise ?
                Il est peut-être temps de faire appel à une entreprise de cybersécurité pour protéger votre activité,
                vos données, celles de vos clients, et préserver votre chiffre d&apos;affaires :
              </p>
              <ul className="space-y-3 text-[#3c3a47]">
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span><strong>Protéger vos informations</strong> sensibles face aux menaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span><strong>Renforcer la confiance</strong> de vos clients et partenaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span><strong>Assurer la continuité</strong> de vos activités</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7d53de] mt-1">✓</span>
                  <span><strong>Anticiper les exigences</strong> des régulateurs</span>
                </li>
              </ul>
              <p className="text-[#0e0c19] font-semibold mt-6">
                Protégez aujourd&apos;hui ce qui comptera encore demain.
              </p>
              <Link
                href="#contact"
                className="inline-block mt-6 rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white hover:bg-[#161131] transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>
            <div className="order-1 lg:order-2" data-animation="fadeInRight" data-delay="0.2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#7d53de]/10 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/2025/05/Laptop-1024x675.jpg"
                  alt="Sécurité informatique"
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Besoins Grid */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-animation="fadeInDown">
              Quels sont vos besoins ?
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full" data-animation="scaleIn" data-delay="0.2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {besoins.map((besoin, index) => (
              <Link
                key={index}
                href={besoin.href}
                className="group bg-white/5 border-2 border-[#7d53de]/20 p-8 rounded-xl hover:bg-[#7d53de]/20 hover:border-[#7d53de]/50 transition-all duration-300 hover:scale-[1.02]"
                data-animation="fadeInUp"
                data-delay={String(index * 0.1)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#7d53de] transition-colors">
                  {besoin.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {besoin.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi la sécurité est prioritaire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animation="fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-6">
                Ma sécurité informatique est-elle une priorité ?
              </h2>
            </div>
            <div data-animation="fadeInRight" data-delay="0.2">
              <div className="w-full h-1 bg-[#7d53de] mb-6 rounded-full"></div>
              <p className="text-[#3c3a47] text-lg leading-relaxed mb-4">
                En tant que PME ou institution, négliger votre <strong>sécurité informatique</strong> met
                directement en danger <strong>votre rentabilité</strong>. Une cyberattaque peut paralyser
                vos opérations pendant des jours, exposer les données sensibles de vos clients et fournisseurs,
                et entraîner des <strong>pertes financières majeures</strong>.
              </p>
              <p className="text-[#3c3a47] text-lg leading-relaxed">
                Entre les interruptions d&apos;activité, la perte de confiance de vos partenaires et les
                sanctions potentielles, investir dans votre cybersécurité n&apos;est plus une option,
                c&apos;est une nécessité stratégique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-animation="fadeInDown">
            Prêt à sécuriser votre entreprise ?
          </h2>
          <p className="text-white/90 text-lg mb-8" data-animation="fadeInUp" data-delay="0.1">
            Contactez-nous pour un diagnostic personnalisé de vos besoins en cybersécurité.
          </p>
          <div data-animation="fadeInUp" data-delay="0.2">
            <Link
              href="#contact"
              className="inline-block rounded-full bg-white text-[#7d53de] px-8 py-4 text-lg font-semibold hover:bg-[#0e0c19] hover:text-white transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
