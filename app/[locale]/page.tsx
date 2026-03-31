import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Why from "@/components/sections/Why";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import MyPortfolio from "@/components/sections/MyPorfolio";

export default function LocalizedHomePage() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ParticleCanvas />
      <Navbar />
      <main className="relative overflow-x-hidden bg-[#0d0d1a]">
        <Hero />
        <div className="section-divider" />
        <MarqueeStrip />
        <div className="section-divider" />
        <Why />
        <div className="section-divider" />
        <MyPortfolio />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
