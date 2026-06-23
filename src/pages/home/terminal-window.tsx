import { Circle } from "lucide-react";

export function TerminalWindow() {
  return (
    <section className="flex flex-col w-[520px] rounded-xl">
      <div className="bg-[#171717] w-full h-[36px] flex items-center justify-between px-4 rounded-t-xl border border-[#262626]">
        <div className="flex gap-2">
          <Circle size={12}/>
          <Circle size={12}/>
          <Circle size={12}/>          
        </div>

        <span className="text-xs">hello.ts</span>
      </div>
      <div className="w-full flex bg-[#111111] p-7">
        <div className="flex max-w-[250px] text-xs">
          <p className="text-purple-500">
            import <span className="text-white">{'{'} Developer {'}'}</span> from <span className="text-blue-600">'@future/web'</span>
          </p>
        </div>

      </div>
    </section>
  )
}
