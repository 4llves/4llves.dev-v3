export function Footer() {
  return (
    <section className="mt-6 flex w-full justify-center border-t border-white/10 bg-background/80 backdrop-blur-md">
      <footer className="flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm sm:px-6 lg:flex-row lg:px-0">
        <div>
          <a
            href="https://github.com/4llves"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil de Alves Jhonata no GitHub"
          >
            GitHub
          </a>
        </div>

        <p className="text-center">
          © 2026 <a href="#hero">4llves.dev</a>
        </p>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/4llves/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil de Alves Jhonata no LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
