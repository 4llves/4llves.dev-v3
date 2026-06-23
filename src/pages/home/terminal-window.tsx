import { Circle } from "lucide-react";

export function TerminalWindow() {
  return (
    <section className="animate-float flex w-[520px] flex-col rounded-xl border border-white/10 shadow-[-10px_0_60px_rgba(34,211,238,0.12),10px_0_60px_rgba(192,132,252,0.12)]">
      <div className="flex h-[36px] w-full items-center justify-between rounded-t-xl border border-[#262626] bg-[#171717] px-4">
        <div className="flex gap-2">
          <Circle size={12} className="fill-red-400" color="none" />
          <Circle size={12} className="fill-amber-400" color="none" />
          <Circle size={12} className="fill-green-400" color="none" />
        </div>

        <span className="text-lg font-semibold text-[#8e9192]">hello.ts</span>
      </div>
      <div className="flex w-full flex-col gap-4 border border-[#262626] bg-[#111111] p-7 text-sm">
        <div className="flex">
          <p className="text-(--txt-purple-window)">
            import{" "}
            <span className="text-(--txt-window)">
              {"{"} Developer {"}"}
            </span>{" "}
            from <span className="text-(--txt-blue-low-window)">"@future/web"</span>;
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-(--txt-window)">
            <span className="text-(--txt-purple-window)">const</span> profile{" "}
            <span className="text-(--txt-blue-strong-window)"> = </span>{" "}
            <span className="text-(--txt-purple-window)">new</span> Developer {"({"}
          </p>
          <p className="pl-4 text-(--txt-window)">
            name: <span className="text-(--txt-blue-low-window)">"4llves"</span>,
          </p>
          <p className="pl-4 text-(--txt-window)">
            role: <span className="text-(--txt-blue-low-window)">"Full-Stack Engineer"</span>,
          </p>
          <p className="pl-4 text-(--txt-window)">
            focus:{" "}
            <span className="text-(--txt-blue-low-window)">
              ["TypeScript", "React", "Node.js", "Python"]
            </span>
            ,
          </p>
          <p className="pl-4 text-(--txt-window)">
            passion:{" "}
            <span className="text-(--txt-blue-low-window)">"Building scalable systems"</span>,
          </p>
          <p className="pl-4 text-(--txt-window)">
            coffeeStatus: <span className="text-(--txt-blue-low-window)">"True"</span>
          </p>
          <p className="text-(--txt-window)">{"});"}</p>
        </div>

        <div className="flex max-w-[250px] flex-col">
          <p className="text-(--txt-window)">
            profile.<span className="text-(--txt-blue-strong-window)">initialize</span>().
            <span className="text-(--txt-blue-strong-window)">then</span>(( ){" "}
            <span className="text-(--txt-purple-window)">{"=>"}</span> {"{"}
          </p>
          <p className="pl-4 text-(--txt-window)">
            console.<span className="text-(--txt-blue-strong-window)">log</span>("Ready to code.");
          </p>
          <p className="text-(--txt-window)">{"});"}</p>
        </div>
      </div>
    </section>
  );
}
