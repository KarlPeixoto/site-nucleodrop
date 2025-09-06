export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="font-serif font-bold text-xl">NúcleoDrop</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Tecnologia em medicina nuclear, com rastreabilidade e segurança.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about-me" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a href="#system" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sistema
                  </a>
                </li>
                <li>
                  <a href="#nuclear-medicine" className="text-muted-foreground hover:text-foreground transition-colors">
                    Medicina Nuclear
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@nucleodrop.com.br</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 NúcleoDrop. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
