import { Circle } from "lucide-react";

export function TerminalWindow() {
  return (
    <section
      className="flex w-[520px] flex-col rounded-xl border border-white/10"
      style={{
        boxShadow: `-10px 0 60px rgba(34, 211, 238, 0.12), 10px 0 60px rgba(192, 132, 252, 0.12)`,
      }}
    >
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
          <p className="text-[#c084fc]">
            import{" "}
            <span className="text-[#c4c7c7]">
              {"{"} Developer {"}"}
            </span>{" "}
            from <span className="text-[#a1eff8]">'@future/web'</span>;
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-[#c4c7c7]">
            <span className="text-[#c084fc]">const</span> profile{" "}
            <span className="text-[#22d3ee]"> = </span> <span className="text-[#c084fc]">new</span>{" "}
            Developer {"({"}
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            name: <span className="text-[#a1eff8]">'4llves'</span>,
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            role: <span className="text-[#a1eff8]">'Full-Stack Engineer'</span>,
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            focus:{" "}
            <span className="text-[#a1eff8]">['TypeScript', 'React', 'Node.js', 'Python']</span>,
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            passion: <span className="text-[#a1eff8]">'Building scalable systems'</span>,
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            coffeeStatus: <span className="text-[#a1eff8]">'True'</span>
          </p>
          <p className="text-[#c4c7c7]">{"});"}</p>
        </div>

        <div className="flex max-w-[250px] flex-col">
          <p className="text-[#c4c7c7]">
            profile.<span className="text-[#22d3ee]">initialize</span>().
            <span className="text-[#22d3ee]">then</span>((){" "}
            <span className="text-[#c084fc]">{"=>"}</span> {"{"})
          </p>
          <p className="pl-4 text-[#c4c7c7]">
            console.<span className="text-[#22d3ee]">log</span>('Ready to code.');
          </p>
          <p className="text-[#c4c7c7]">{"});"}</p>
        </div>
      </div>
    </section>
  );
}
