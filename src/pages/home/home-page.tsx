import { Hero } from "./hero";
import { TerminalWindow } from "./terminal-window";

export function HomePage() {
  return (
    <section className="flex w-full gap-6">
      <Hero />
      <TerminalWindow />
    </section>
  )
}
