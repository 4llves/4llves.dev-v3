import { Hero } from "./hero";
import { TerminalWindow } from "./terminal-window";

export function HomePage() {
  return (
    <section className="flex w-full items-center gap-6 py-28">
      <Hero />
      <TerminalWindow />
    </section>
  );
}
