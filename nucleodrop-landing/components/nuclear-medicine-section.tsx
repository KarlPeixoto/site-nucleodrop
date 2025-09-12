import { Card, CardContent } from "@/components/ui/card"
import { Atom, Heart, Brain, Microscope } from "lucide-react"

export function NuclearMedicineSection() {
  return (
    <section id="nuclear-medicine" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance mb-6">
              Medicina Nuclear & Radiofarmácias
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              A medicina nuclear utiliza pequenas quantidades de material radioativo para diagnosticar e tratar doenças,
              oferecendo informações únicas sobre o funcionamento dos órgãos e sistemas do corpo humano.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 border-1 border-[#91BF2C]">
                    <Atom className="h-6 w-6 text-[#91BF2C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">O que são Radiofármacos?</h3>
                    <p className="text-muted-foreground">
                      Medicamentos que contêm elementos radioativos, utilizados para diagnóstico por imagem e tratamento
                      de diversas condições médicas. Cada radiofármaco é desenvolvido para se concentrar em órgãos ou
                      tecidos específicos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 border-1 border-[#CC918D]">
                    <Heart className="h-6 w-6 text-[#CC918D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Segurança em Primeiro Lugar</h3>
                    <p className="text-muted-foreground">
                      A manipulação de materiais radioativos exige protocolos rigorosos de segurança. Cada etapa, desde
                      a produção até o descarte, deve ser cuidadosamente monitorada e documentada para garantir a
                      proteção de pacientes e profissionais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-6">Aplicações Clínicas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-[#A56DCF]" />
                  <span>Diagnóstico de doenças cardíacas e neurológicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Microscope className="h-5 w-5 text-[#A56DCF]" />
                  <span>Detecção precoce de tumores e metástases</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-[#A56DCF]" />
                  <span>Avaliação da função de órgãos vitais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Atom className="h-5 w-5 text-[#A56DCF]" />
                  <span>Terapias direcionadas para câncer</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-2xl mb-6">Por que a Tecnologia Importa?</h3>
              <p className="text-muted-foreground mb-4">
                A gestão adequada de radiofarmácias requer sistemas especializados que garantam a rastreabilidade
                completa, desde a recepção dos materiais até sua aplicação nos pacientes.
              </p>
              <p className="text-muted-foreground">
                O NúcleoDrop foi desenvolvido para atender essas necessidades específicas, oferecendo controle total
                sobre processos críticos e garantindo conformidade com regulamentações nacionais e internacionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
