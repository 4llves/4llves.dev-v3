import { ArrowRight } from "lucide-react";

export function CardProject() {
  return (
    <div className="flex w-[368px] justify-center border border-[#262626FF] bg-[#1e2020FF]">
      <div>
        <div className="relative flex h-[192px] w-[368px] items-center justify-center bg-[#141c1d] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]">
          <img src="/logo-full-w.svg" alt="" />
          <div className="absolute bottom-5 h-px w-[340px] bg-linear-to-r from-transparent via-(--txt-blue-strong-window) to-transparent" />
        </div>

        <div className="flex h-[232px] flex-col gap-5 p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">SindSaúde-PA</h2>
            <span>Portal institucional do SindSaúde Pará.</span>
          </div>

          <div className="flex gap-2.5 text-xs">
            <span className="border(text-(--txt-blue-strong-window) border-2 bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
              VITE.JS
            </span>
            <span className="border(text-(--txt-blue-strong-window) border-2 bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
              TYPESCRIPT
            </span>
            <span className="border(text-(--txt-blue-strong-window) border-2 bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
              TAILWIND.CSS
            </span>
          </div>

          <div className="flex gap-1.5">
            <a href="https://sindsaudepa.org.br" className="text-(--txt-blue-strong-window)">
              VER PROJETO
            </a>
            <ArrowRight className="text-(--txt-blue-strong-window)" />
          </div>
        </div>
      </div>
    </div>
  );
}
