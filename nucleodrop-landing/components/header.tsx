import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <span className="font-serif font-bold text-xl text-foreground">NúcleoDrop</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </a>
          <a href="#about-me" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre Mim
          </a>
          <a href="#system" className="text-sm font-medium hover:text-primary transition-colors">
            Sistema
          </a>
          <a href="#nuclear-medicine" className="text-sm font-medium hover:text-primary transition-colors">
            Medicina Nuclear
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
          <a href="#contact">Fale Comigo</a>
        </Button>
      </div>
    </header>
  )
}
