import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";

export function Hero() {
  return (
    <section className="flex w-full max-w-[600px] flex-col gap-6">
      <div className="flex flex-col gap-8">
        <span className="flex w-3xs items-center justify-center gap-2 rounded-4xl border-2 border-[#262626] px-3 py-1 text-xs font-semibold text-(--txt-blue-strong-window)">
          <Circle size={16} className="fill-(--txt-blue-strong-window)" color="none" /> AVAILABLE
          FOR NEW PROJECTS
        </span>
        <div className="flex max-w-[430px] flex-col">
          <h2 className="text-[##e2e2e2FF]; text-5xl font-bold">Building the future</h2>
          <h2 className="text-[#c4c7c7FF;] text-5xl font-bold">of the web.</h2>
        </div>
        <p className="text-xl">
          Full-stack developer specializing in creating high-performance, minimalist digital
          experiences with a focus on modern tooling and scalable architecture.
        </p>

        <div className="flex gap-4">
          <Button className="h-12 w-40 rounded-none bg-[#fafafaFF] text-sm text-[#0a0a0aFF]">
            View Projects
          </Button>

          <Button className="h-12 w-40 rounded-none border-2 border-[#262626] bg-transparent text-sm text-[#e2e2e2]">
            Contecte Me <ArrowRight fill="#e2e2e2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
