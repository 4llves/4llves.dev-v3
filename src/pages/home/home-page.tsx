import { Hero } from "./hero";
import { TerminalWindow } from "./terminal-window";

export function HomePage() {
  return (
    <section className="flex w-full flex-col items-start gap-10 py-16 lg:flex-row lg:items-center lg:gap-6 lg:py-28">
      <Hero />
      <TerminalWindow />
    </section>
  );
}
