"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: "100%", label: t("stats.clients") },
    { value: "NIS2", label: t("stats.compliance") },
    { value: "24/7", label: t("stats.support") },
    { value: "ISO", label: t("stats.certifications") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div data-animation="fadeInLeft">
            <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
              {t("section1.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mt-4 mb-6 leading-tight">
              {t("section1.title")}
            </h2>
          </div>

          {/* Right Column */}
          <div data-animation="fadeInRight" data-delay="0.2">
            <p className="text-[#3c3a47] text-lg leading-relaxed">
              {t("section1.description")}
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          {/* Left Column */}
          <div data-animation="fadeInLeft">
            <span className="text-[#7d53de] font-semibold uppercase tracking-wider text-sm">
              {t("section2.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0e0c19] mt-4 mb-6 leading-tight">
              {t("section2.title")}
            </h2>
          </div>

          {/* Right Column */}
          <div data-animation="fadeInRight" data-delay="0.2">
            <p className="text-[#3c3a47] text-lg leading-relaxed">
              {t("section2.description")}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 stagger-children">
          {stats.map((stat, index) => (
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
