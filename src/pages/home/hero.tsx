import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="flex w-full max-w-[600px] flex-col gap-6">
      <div className="flex flex-col gap-8">
        <span className="flex w-fit max-w-full items-center justify-center gap-2 rounded-4xl border-2 border-[#262626] px-3 py-1 text-[11px] font-semibold text-(--txt-blue-strong-window) uppercase sm:text-xs">
          <Circle size={16} className="fill-(--txt-blue-strong-window)" color="none" />
          Disponível para novos projetos
        </span>
        <div className="flex max-w-[430px] flex-col">
          <h2 className="text-[##e2e2e2FF]; text-4xl font-bold sm:text-5xl">
            Construindo o futuro através de códigos.
          </h2>
        </div>
        <p className="text-base leading-8 sm:text-lg lg:text-xl">
          Desenvolvedor Full-Stack apaixonado por criar aplicações modernas, rápidas e fáceis de
          usar. Transformo ideias em soluções digitais com foco em qualidade, desempenho e uma ótima
          experiência para o usuário.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button className="h-12 w-full rounded-none bg-[#fafafaFF] text-sm text-[#0a0a0aFF] sm:w-40">
            Ver Projetos
          </Button>

          <Button className="h-12 w-full rounded-none border-2 border-[#262626] bg-transparent text-sm text-[#e2e2e2] sm:w-40">
            Contate-me <ArrowRight fill="#e2e2e2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
