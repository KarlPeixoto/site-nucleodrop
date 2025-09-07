import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutMeSection } from "@/components/about-me-section";
import { AboutSystemSection } from "@/components/about-system-section";
import { NuclearMedicineSection } from "@/components/nuclear-medicine-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

function generateParticles(count: number, minSize: number, maxSize: number, containerHeight: number, animation: string) {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const top = Math.random() * containerHeight;
    const left = Math.random() * 95; // horizontal %
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;

    return (
      <div
        key={i}
        className={`floating-dot ${animation}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}px`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });
}

export default function HomePage() {
  const containerHeight = 4000;

  return (
    <div className="relative">
      {/* Fundo aquarelado fixo */}
      <div className="watercolor-bg fixed top-0 left-0 w-full h-full z-0"></div>

      {/* Partículas atrás do conteúdo */}
      {generateParticles(15, 15, 25, containerHeight, 'floatSlow')}
      {generateParticles(25, 6, 12, containerHeight, 'floatMedium')}
      {generateParticles(50, 3, 6, containerHeight, 'floatFast')}

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
