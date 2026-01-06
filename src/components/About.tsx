export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-animation="fadeInLeft">
            <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
              Qu&apos;est-ce qu&apos;une entreprise de cybersécurité ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mt-4 mb-6 leading-tight">
              Comprendre le rôle crucial des entreprises de cybersécurité
            </h2>
          </div>

          {/* Right Column */}
          <div data-animation="fadeInRight" data-delay="0.2">
            <p className="text-[#3c3a47] text-lg leading-relaxed">
              Une entreprise de cybersécurité, comme Cyber-SSI, joue un rôle essentiel dans la protection
              des données et des systèmes informatiques contre les menaces numériques. Dans un monde où
              les cyberattaques sont de plus en plus sophistiquées, ces entreprises fournissent des
              solutions de sécurité avancées pour protéger les informations sensibles des PME, startups,
              administrations et institutions. Leur importance réside dans leur capacité à prévenir les
              violations de données, à sécuriser les infrastructures numériques et à garantir la
              continuité des opérations.
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          {/* Left Column */}
          <div data-animation="fadeInLeft">
            <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
              Pourquoi faire appel à une entreprise de cybersécurité ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mt-4 mb-6 leading-tight">
              Les avantages de collaborer avec des experts en cybersécurité
            </h2>
          </div>

          {/* Right Column */}
          <div data-animation="fadeInRight" data-delay="0.2">
            <p className="text-[#3c3a47] text-lg leading-relaxed">
              Faire appel à une entreprise de cybersécurité est crucial pour toute organisation souhaitant
              protéger ses actifs numériques. Cyber-SSI offre une expertise inégalée pour identifier les
              vulnérabilités, mettre en œuvre des solutions de sécurité sur mesure et assurer la conformité
              aux normes internationales comme ISO 27001. En collaborant avec nous, les entreprises peuvent
              réduire les risques de cyberattaques, éviter les pertes financières et préserver leur réputation.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 stagger-children">
          {[
            { value: "100%", label: "Clients satisfaits" },
            { value: "NIS2", label: "Conformité garantie" },
            { value: "24/7", label: "Support disponible" },
            { value: "ISO", label: "Certifications" },
          ].map((stat, index) => (
            <div key={index} className="text-center" data-animation="fadeInUp" data-delay={String(index * 0.1)}>
              <div className="text-4xl md:text-5xl font-bold text-[#7d53de] mb-2">
                {stat.value}
              </div>
              <div className="text-[#3c3a47] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
