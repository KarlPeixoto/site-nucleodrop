import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutMeSection } from "@/components/about-me-section";
import { AboutSystemSection } from "@/components/about-system-section";
import { NuclearMedicineSection } from "@/components/nuclear-medicine-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ParticlesBackground } from "@/components/particles-background";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Fundo aquarelado fixo */}
      <div className="watercolor-bg fixed top-0 left-0 w-full h-full z-0"></div>

      {/* Partículas atrás do conteúdo */}
      <ParticlesBackground />

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Header /> {/* header fixo no topo */}
        <main>
          <HeroSection />
          <AboutSystemSection />
          <NuclearMedicineSection />
          <AboutMeSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
