import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#about-me", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact-me", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-white/10 bg-background/80 backdrop-blur-md">
      <header className="w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-0 lg:py-0">
        <div className="flex items-center justify-between lg:h-16">
          <a
            href="#hero"
            className="flex items-center justify-between gap-3 text-xl font-extrabold"
          >
            <img src="/4llvesdev.svg" alt="Logotipo 4llves.dev" className="w-8 object-contain" />
            4llves.dev
          </a>

          <div className="flex items-center gap-3 lg:hidden">
            <img src="/terminal.svg" alt="Ícone de terminal" className="w-6" />
            <button
              type="button"
              onClick={handleToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="flex size-10 items-center justify-center border border-white/10 bg-white/5 text-[#f2f4f5] transition-colors hover:bg-white/10"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#d5d9dd] lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={`Ir para a seção ${item.label}`}
                className="text-base font-bold hover:text-(--txt-blue-strong-window)"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <img src="/terminal.svg" alt="Ícone de terminal" />
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-4 flex flex-col border border-white/10 bg-[#171717] lg:hidden"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                aria-label={`Ir para a seção ${item.label}`}
                className="border-b border-white/10 px-4 py-3 text-sm text-[#d5d9dd] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
    </div>
  );
}
