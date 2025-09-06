import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export function AboutMeSection() {
  return (
    <section id="about-me" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-balance mb-12">
            Sobre o Desenvolvedor
          </h2>

          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="font-serif font-semibold text-2xl mb-4">Especialista em Tecnologia para Saúde</h3>

                  <p className="text-muted-foreground mb-4">
                    Com anos de experiência no desenvolvimento de soluções tecnológicas para o setor de saúde, dedico-me
                    a criar sistemas que fazem a diferença na vida das pessoas.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    O NúcleoDrop nasceu da necessidade de modernizar e otimizar os processos em radiofarmácias,
                    garantindo segurança e eficiência em cada etapa do tratamento.
                  </p>

                  <p className="text-muted-foreground">
                    Acredito que a tecnologia deve ser uma aliada na busca por tratamentos mais seguros e eficazes na
                    medicina nuclear.
                  </p>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <User className="h-24 w-24 text-primary" />
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
