"use client"; // necessário para usar useEffect/useState se precisar futuramente

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border border-white/30"
      style={{
        background: "rgba(255, 255, 255, 0.15)", // transparente
        backdropFilter: "blur(12px)",            // blur intenso
      }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" 
            alt="Logo NúcleoDrop"
            className="mx-auto mb-3 w-7"
          />
          <span className="font-serif font-bold text-xl text-foreground">NúcleoDrop</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
          <a href="#system" className="text-sm font-medium hover:text-primary transition-colors">Sistema</a>
          <a href="#nuclear-medicine" className="text-sm font-medium hover:text-primary transition-colors">Medicina Nuclear</a>
          <a href="#about-me" className="text-sm font-medium hover:text-primary transition-colors">Sobre Mim</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
        </nav>

        {/* Botão */}
  <Button className="bg-[#A56DCF] hover:bg-[#A56DCF]/90 text-secondary-foreground" asChild>
          <a href="#contact">Fale Comigo</a>
        </Button>
      </div>
    </header>
  );
}
