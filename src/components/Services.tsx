import Link from "next/link";

const services = [
  {
    title: "Mise en conformité réglementaire",
    description:
      "Notre approche sur mesure garantit un alignement de votre organisation avec les exigences de NIS2, MiCA, DORA, RGPD, VARA et DIFC, tout en assurant la pérennité de vos activités.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    href: "/services/conformite",
  },
  {
    title: "Certifications de cybersécurité",
    description:
      "Adoptez les standards les plus exigeants en cybersécurité avec notre accompagnement sur les référentiels ISO (27001, 22301, 42001), SOC 2 ou PCI-DSS.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    href: "/services/certifications",
  },
  {
    title: "RSSI à temps partagé",
    description:
      "Bénéficiez d'un Responsable de la Sécurité des Systèmes d'Information (RSSI) expérimenté, certifié et opérationnel immédiatement, pour accompagner votre organisation.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    href: "/services/rssi",
  },
  {
    title: "Formation et sensibilisation",
    description:
      "Nos programmes sur-mesure combinent formations pratiques et sensibilisation régulière, parfaitement adaptées à vos enjeux métiers pour renforcer votre première ligne de défense.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    href: "/services/formation",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mb-4">
            Votre besoin
          </h2>
          <div className="w-24 h-1 bg-[#7d53de] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="service-card group bg-white p-8 rounded-lg shadow-[0_4px_60px_-30px_rgba(125,83,222,0.7)] hover:shadow-[0_8px_80px_-20px_rgba(125,83,222,0.8)] border border-gray-100"
            >
              {/* Icon */}
              <div className="text-[#7d53de] mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#0e0c19] mb-3 group-hover:text-[#7d53de] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#3c3a47] leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block rounded-full bg-[#7d53de] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#161131] transition-all duration-300"
          >
            Quel est votre véritable besoin ?
          </Link>
        </div>
      </div>
    </section>
  );
}
