import Hero from "@/components/Hero";
import CertificationsBanner from "@/components/CertificationsBanner";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
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
