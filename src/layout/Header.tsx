export function Header() {
  return (
    <div className="mx-auto flex w-full justify-center border border-b-white/10">
      <header className="flex h-16 w-full max-w-6xl items-center justify-between">
        <div className="">
          <a href="#">4llves.dev</a>
        </div>

        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
        <div>
          <img src="/terminal.svg" alt="Terminal" />
        </div>
      </header>
    </div>
  );
}
