import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import CertificationsBanner from "@/components/CertificationsBanner";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <CertificationsBanner />
      <Services />
      <CaseStudies />
      <About />
      <Contact />
    </>
  );
}
