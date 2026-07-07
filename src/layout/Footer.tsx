export function Footer() {
  return (
    <section className="mt-6 flex w-full justify-center border-t border-white/10 bg-background/80 backdrop-blur-md">
      <footer className="flex h-16 w-full max-w-6xl items-center justify-between">
        <div className="">
          <a href="#">Github</a>
        </div>

        <p>
          © 2026 <a href="/">4llves.dev</a>
        </p>

        <div className="flex gap-3">
          <a href="#">Linkedin</a>
        </div>
      </footer>
    </section>
  );
}
