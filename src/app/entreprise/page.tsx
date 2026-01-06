import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Entreprise | Cyber-SSI",
  description: "Découvrez Cyber-SSI, entreprise de cybersécurité spécialisée dans l'accompagnement des PME, administrations et institutions.",
};

const certifications = [
  { name: "CISSP", description: "Certified Information Systems Security Professional" },
  { name: "CISM", description: "Certified Information Security Manager" },
  { name: "ISO 27001 LA", description: "Lead Auditor" },
  { name: "ISO 27001 LI", description: "Lead Implementer" },
  { name: "CEH", description: "Certified Ethical Hacker" },
  { name: "OSCP", description: "Offensive Security Certified Professional" },
];

const values = [
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque mission, avec des méthodologies éprouvées et des experts certifiés.",
    icon: "⭐",
  },
  {
    title: "Confiance",
    description: "La confidentialité et l'intégrité sont au cœur de notre relation avec nos clients.",
    icon: "🤝",
  },
  {
    title: "Pragmatisme",
    description: "Nous proposons des solutions concrètes et adaptées à votre contexte, pas des réponses théoriques.",
    icon: "🎯",
  },
  {
    title: "Engagement",
    description: "Nous nous engageons sur des résultats mesurables et un accompagnement dans la durée.",
    icon: "💪",
  },
];

export default function Entreprise() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0e0c19] via-[#161131] to-[#7d53de]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d53de]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7d53de]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Notre <span className="text-[#7d53de]">Entreprise</span>
          </h1>
          <p className="text-white/80 text-xl mt-6 max-w-2xl mx-auto">
            L&apos;expertise cybersécurité au service des PME, administrations et institutions
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
                Notre mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mt-4 mb-6">
                Protéger ce qui compte pour vous
              </h2>
              <p className="text-[#3c3a47] text-lg leading-relaxed mb-6">
                <strong>Cyber-SSI</strong> est née d&apos;un constat simple : les PME, administrations et institutions
                font face aux mêmes menaces cyber que les grandes entreprises, mais n&apos;ont pas toujours
                les ressources pour y faire face.
              </p>
              <p className="text-[#3c3a47] text-lg leading-relaxed mb-6">
                Notre mission est de démocratiser l&apos;accès à une cybersécurité de qualité,
                en proposant des services adaptés à votre taille, votre secteur et vos contraintes budgétaires.
              </p>
              <p className="text-[#3c3a47] text-lg leading-relaxed">
                Nous accompagnons nos clients de la définition de leur stratégie de sécurité
                jusqu&apos;à sa mise en œuvre opérationnelle, en passant par la conformité réglementaire
                et les tests techniques.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#7d53de]/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-[#0e0c19] to-[#161131] rounded-2xl p-12 text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-white text-xl font-semibold">
                  &quot;Votre sécurité, notre expertise&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0e0c19] mb-2">{value.title}</h3>
                <p className="text-[#3c3a47] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e0c19] mb-4">
              Nos Certifications
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full mb-6"></div>
            <p className="text-[#3c3a47] max-w-2xl mx-auto">
              Nos consultants détiennent les certifications les plus reconnues du marché de la cybersécurité.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-[#7d53de]/10 transition-colors"
              >
                <div className="text-2xl font-bold text-[#7d53de] mb-1">{cert.name}</div>
                <div className="text-xs text-[#3c3a47]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 bg-gradient-to-br from-[#0e0c19] to-[#161131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos Secteurs d&apos;Intervention
            </h2>
            <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Finance & Banque",
              "Santé",
              "Industrie",
              "Services publics",
              "E-commerce",
              "Assurance",
              "Transport",
              "Énergie",
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#7d53de]/20 p-6 rounded-xl text-center text-white hover:bg-[#7d53de]/20 transition-colors"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7d53de]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Discutons de vos enjeux cybersécurité et voyons comment nous pouvons vous accompagner.
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
