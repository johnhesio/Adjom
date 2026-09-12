import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Differentiators from "../components/sections/Differentiators";
import Packages from "../components/sections/Packages";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import { useSEO, organizationJsonLd } from "../lib/useSEO";

export default function Home() {
  useSEO({
    title: "Sites, sistemas e marcas sob medida em Fortaleza",
    description:
      "A Adjom desenvolve sites, sistemas sob medida e identidades visuais para prestadores de serviço e startups em Fortaleza e em todo o Brasil. Fale agora no WhatsApp.",
    path: "/",
    jsonLd: organizationJsonLd,
  });

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Differentiators />
      <Packages />
      <FAQ />
      <FinalCTA />
    </>
  );
}
