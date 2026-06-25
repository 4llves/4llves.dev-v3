export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-white/10 bg-background/80 backdrop-blur-md">
      <header className="flex h-16 w-full max-w-6xl items-center justify-between">
        <div className="">
          <a href="#">4llves.dev</a>
        </div>

        <nav className="flex gap-6">
          <a href="#">Inicio</a>
          <a href="#">Projetos</a>
          <a href="#">Experiência</a>
          <a href="#">Contato</a>
        </nav>
        <div>
          <img src="/terminal.svg" alt="Terminal" />
        </div>
      </header>
    </div>
  );
}
