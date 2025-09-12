import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Activity, Zap, Database, Users, FileCheck } from "lucide-react"

export function AboutSystemSection() {
  const features = [
    {
      icon: Atom,
      title: "Inteligência Nuclear Integrada",
      description:
        "Cálculos automáticos de decaimento e equilíbrio secular para resultados rápidos, confiáveis e auditáveis.",
    },
    {
      icon: Activity,
      title: "Rastreabilidade Total",
      description: "Acompanhamento completo desde a produção até o descarte, garantindo conformidade regulatória.",
    },
    {
      icon: Zap,
      title: "Inovação Tecnológica",
      description: "Interface moderna e intuitiva com tecnologias de ponta para otimizar processos críticos.",
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description: "Armazenamento seguro e organizado de todas as informações com backup automático.",
    },
    {
      icon: Users,
      title: "Controle de Usuários",
      description: "Sistema de permissões granular para diferentes níveis de acesso e responsabilidades.",
    },
    {
      icon: FileCheck,
      title: "Relatórios Automáticos",
      description: "Geração automática de relatórios regulatórios e documentação para auditorias.",
    },
  ]

  return (
    <section id="system" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-balance mb-6">Sistema NúcleoDrop</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Uma solução completa e integrada para gestão de radiofarmácias, desenvolvida especificamente para atender
              às necessidades da medicina nuclear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-2xl transition-shadow duration-300 relative z-10">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 border-1 border-[#A56DCF]">
                    <feature.icon className="h-6 w-6 text-[#A56DCF]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-1 border-foreground">
              <CardContent className="p-8">
                <h3 className="font-serif font-semibold text-3xl mb-4">Transforme sua radiofarmácia</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  O NúcleoDrop oferece uma experiência completa de gestão, desde o controle de estoque até a geração de
                  relatórios regulatórios, tudo em uma plataforma integrada e segura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
