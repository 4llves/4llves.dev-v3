// import { Circle } from "lucide-react";

// export function TerminalWindow() {
//   return (
//     <section className="animate-float flex w-[520px] flex-col rounded-xl border border-white/10 shadow-[-10px_0_60px_rgba(34,211,238,0.12),10px_0_60px_rgba(192,132,252,0.12)]">
//       <div className="flex h-[36px] w-full items-center justify-between rounded-t-xl border border-[#262626] bg-[#171717] px-4">
//         <div className="flex gap-2">
//           <Circle size={12} className="fill-red-400" color="none" />
//           <Circle size={12} className="fill-amber-400" color="none" />
//           <Circle size={12} className="fill-green-400" color="none" />
//         </div>

//         <span className="text-lg font-semibold text-[#8e9192]">hello.ts</span>
//       </div>
//       <div className="flex w-full flex-col gap-4 border border-[#262626] bg-[#111111] p-7 text-sm">
//         <div className="flex">
//           <p className="text-(--txt-purple-window)">
//             import{" "}
//             <span className="text-(--txt-window)">
//               {"{"} Developer {"}"}
//             </span>{" "}
//             from <span className="text-(--txt-blue-low-window)">"@future/web"</span>;
//           </p>
//         </div>

//         <div className="flex flex-col">
//           <p className="text-(--txt-window)">
//             <span className="text-(--txt-purple-window)">const</span> profile{" "}
//             <span className="text-(--txt-blue-strong-window)"> = </span>{" "}
//             <span className="text-(--txt-purple-window)">new</span> Developer {"({"}
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             name: <span className="text-(--txt-blue-low-window)">"4llves"</span>,
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             role: <span className="text-(--txt-blue-low-window)">"Full-Stack Engineer"</span>,
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             focus:{" "}
//             <span className="text-(--txt-blue-low-window)">
//               ["TypeScript", "React", "Node.js", "Python"]
//             </span>
//             ,
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             passion:{" "}
//             <span className="text-(--txt-blue-low-window)">"Building scalable systems"</span>,
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             coffeeStatus: <span className="text-(--txt-blue-low-window)">"True"</span>
//           </p>
//           <p className="text-(--txt-window)">{"});"}</p>
//         </div>

//         <div className="flex max-w-[250px] flex-col">
//           <p className="text-(--txt-window)">
//             profile.<span className="text-(--txt-blue-strong-window)">initialize</span>().
//             <span className="text-(--txt-blue-strong-window)">then</span>(( ){" "}
//             <span className="text-(--txt-purple-window)">{"=>"}</span> {"{"}
//           </p>
//           <p className="pl-4 text-(--txt-window)">
//             console.<span className="text-(--txt-blue-strong-window)">log</span>("Ready to code.");
//           </p>
//           <p className="text-(--txt-window)">{"});"}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Circle } from "lucide-react";

type WindowState = "normal" | "minimized" | "fullscreen" | "closed";

export function TerminalWindow() {
  const [windowState, setWindowState] = useState<WindowState>("normal");

  if (windowState === "closed") {
    return null;
  }

  const isMinimized = windowState === "minimized";
  const isFullscreen = windowState === "fullscreen";

  function handleMinimize() {
    setWindowState("minimized");
  }

  function handleFullscreen() {
    if (windowState === "minimized") {
      setWindowState("normal");
      return;
    }

    if (windowState === "fullscreen") {
      setWindowState("normal");
      return;
    }

    setWindowState("fullscreen");
  }

  function handleClose() {
    setWindowState("closed");
  }

  return (
    <section
      className={`flex flex-col rounded-xl border border-white/10 shadow-[-10px_0_60px_rgba(34,211,238,0.12),10px_0_60px_rgba(192,132,252,0.12)] transition-all duration-300 ${
        isMinimized ? "fixed bottom-6 left-6 z-50 w-[360px]" : "animate-float w-[520px]"
      } ${isFullscreen ? "fixed inset-0 z-50 h-screen w-screen rounded-none bg-[#111111]" : ""} `}
    >
      <div
        className={`flex h-[36px] w-full items-center justify-between border border-[#262626] bg-[#171717] px-4 ${isFullscreen ? "rounded-none" : "rounded-t-xl"} ${isMinimized ? "rounded-xl" : ""} `}
      >
        <div className="flex gap-2">
          <button onClick={handleClose} aria-label="Fechar janela">
            <Circle size={12} className="fill-red-400" color="none" />
          </button>

          <button onClick={handleMinimize} aria-label="Minimizar janela">
            <Circle size={12} className="fill-amber-400" color="none" />
          </button>

          <button onClick={handleFullscreen} aria-label="Expandir janela">
            <Circle size={12} className="fill-green-400" color="none" />
          </button>
        </div>

        <span className="text-lg font-semibold text-[#8e9192]">hello.ts</span>
      </div>

      {!isMinimized && (
        <div
          className={`flex w-full flex-col gap-4 border border-[#262626] bg-[#111111] p-7 text-sm ${isFullscreen ? "h-full" : ""} `}
        >
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
              console.<span className="text-(--txt-blue-strong-window)">log</span>("Ready to
              code.");
            </p>
            <p className="text-(--txt-window)">{"});"}</p>
          </div>
        </div>
      )}
    </section>
  );
}
