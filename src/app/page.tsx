import Hero from "@/components/Hero";
import Cuisine from "@/components/Cuisine";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Privatisation from "@/components/Privatisation";
import InfosPratiques from "@/components/InfosPratiques";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Cuisine />
      <Menu />
      <Gallery />
      <About />
      <Privatisation />
      <InfosPratiques />
      <Contact />
    </>
  );
}
