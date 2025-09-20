import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Activity, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/logo.png" 
            alt="Logo NúcleoDrop"
            className="mx-auto mb-8 w-40"
          />
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-balance mb-6">
            Tecnologia em medicina nuclear
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            O NúcleoDrop é um sistema completo de gestão para radiofarmácias, oferecendo controle total sobre processos
            críticos da medicina nuclear.
          </p>

          {/* Botoẽs para talvez usar no futuro */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#A56DCF] hover:bg-[#A56DCF]/90 text-secondary-foreground" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Fale Comigo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#system">Conheça o Sistema</a>
            </Button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 border-1 border-[#A56DCF]">
                <Shield className="h-6 w-6 text-[#A56DCF]" />
              </div>
              <h3 className="font-semibold mb-2">Segurança</h3>
              <p className="text-sm text-muted-foreground">Controle rigoroso de materiais radioativos</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 border-1 border-[#A56DCF]">
                <Activity className="h-6 w-6 text-[#A56DCF]" />
              </div>
              <h3 className="font-semibold mb-2">Rastreabilidade</h3>
              <p className="text-sm text-muted-foreground">Acompanhamento completo do ciclo de vida</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 border-1 border-[#A56DCF]">
                <Zap className="h-6 w-6 text-[#A56DCF]" />
              </div>
              <h3 className="font-semibold mb-2">Inovação</h3>
              <p className="text-sm text-muted-foreground">Tecnologia de ponta para medicina nuclear</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
