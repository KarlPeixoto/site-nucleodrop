import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Linkedin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-12 max-w-2xl mx-auto">
            Interessado em conhecer mais sobre o{" "}
            <span className="font-bold">NúcleoDrop</span>? Entre em contato e
            descubra como podemos transformar a gestão da sua radiofarmácia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 border-1 border-[#A56DCF]">
                  <MessageCircle className="h-6 w-6 text-[#A56DCF]" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent relative z-10"
                  asChild
                >
                  <a
                    href="https://wa.me/5524981295645"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 border-1 border-[#A56DCF]">
                  <Mail className="h-6 w-6 text-[#A56DCF]" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent relative z-10"
                  asChild
                >
                  <a href="mailto:mateus.peixoto@nucleodrop.com.br">Enviar</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 border-1 border-[#A56DCF]">
                  <Linkedin className="h-6 w-6 text-[#A56DCF]" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent relative z-10"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/mateus-karl-peixoto-a30656174/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conectar
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 border-1 border-[#A56DCF]">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground mb-4">Ligação direta</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <a href="tel:+5511999999999">Ligar</a>
                </Button>
              </CardContent>
            </Card> */}
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="font-serif font-semibold text-2xl mb-4">
              Pronto para Inovar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transforme sua radiofarmácia com tecnologia de ponta. Entre em
              contato hoje mesmo e descubra como o NúcleoDrop pode revolucionar
              seus processos.
            </p>
            <Button
              size="lg"
              className="bg-[#A56DCF] hover:bg-[#A56DCF]/90 text-secondary-foreground relative z-10"
              asChild
            >
              <a
                href="mailto:mateus.peixoto@nucleodrop.com.br"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Fale Comigo Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
