import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutMeSection } from "@/components/about-me-section"
import { AboutSystemSection } from "@/components/about-system-section"
import { NuclearMedicineSection } from "@/components/nuclear-medicine-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen watercolor-bg">
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <AboutSystemSection />
        <NuclearMedicineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
