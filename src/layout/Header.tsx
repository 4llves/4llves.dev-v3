export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-white/10 bg-background/80 backdrop-blur-md">
      <header className="flex h-16 w-full max-w-6xl items-center justify-between">
        <div className="">
          <a href="#">4llves.dev</a>
        </div>

        <nav className="flex gap-6">
          <a href="#hero">Inicio</a>
          <a href="#about-me">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a href="#contact-me">Contato</a>
        </nav>
        <div>
          <img src="/terminal.svg" alt="Terminal" />
        </div>
      </header>
    </div>
  );
}
