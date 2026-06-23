export function Header() {
  return (
    <div className="flex mx-auto w-full justify-center border border-b-white/10">
      <header className="w-full max-w-6xl h-16 flex items-center justify-between">
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
  )
}