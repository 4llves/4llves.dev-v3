import { Circle } from "lucide-react";

type ProjecstProps = {
  title: string;
  bgImage: string;
  bgImageAlt: string;
  nameProject: string;
  descriptionProject: string;
  liveUrl: string;
  techsProject: string[];
  status: string;
  year: string;
};

export function ProjectWindow({
  title,
  bgImage,
  bgImageAlt,
  nameProject,
  descriptionProject,
  liveUrl,
  techsProject,
  status,
  year,
}: ProjecstProps) {
  return (
    <section className="flex w-full max-w-full flex-col rounded-xl border xl:max-w-[520px]">
      {/* barra topo janela */}
      <div className="flex h-[36px] w-full items-center justify-between rounded-t-xl border border-[#262626] bg-[#171717] px-4">
        <div className="flex gap-2">
          <Circle size={12} className="fill-red-400" color="none" />
          <Circle size={12} className="fill-amber-400" color="none" />
          <Circle size={12} className="fill-green-400" color="none" />
        </div>

        <div className="flex min-w-0 items-center justify-center gap-1.5">
          <img src={`/${bgImage}`} alt={bgImageAlt} className="w-12 sm:w-16" loading="lazy" />
          <span className="truncate text-sm font-semibold text-[#8e9192] sm:text-lg">{title}</span>
        </div>
      </div>

      {/* corpo janela */}
      <div className="relative flex w-full flex-col gap-4 overflow-hidden border border-[#262626] bg-[#111111] p-4 text-xs sm:p-7 sm:text-sm">
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(/${bgImage})`, backgroundSize: "80%" }}
          aria-hidden="true"
        />
        <div className="flex">
          <p className="text-(--txt-purple-window)">
            import{" "}
            <span className="text-(--txt-window)">
              {"{"} Project {"}"}
            </span>{" "}
            from <span className="text-(--txt-blue-low-window)">"@future/web"</span>;
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-(--txt-window)">
            <span className="text-(--txt-purple-window)">const</span> project{" "}
            <span className="text-(--txt-blue-strong-window)"> = </span>{" "}
            <span className="text-(--txt-purple-window)">new</span> Project {"({"}
          </p>
          <p className="pl-4 text-(--txt-window)">
            name: <span className="text-(--txt-blue-low-window)">"{nameProject}"</span>,
          </p>
          <p className="pl-4 text-(--txt-window)">
            description:{" "}
            <span className="text-(--txt-blue-low-window)">"{descriptionProject}"</span>,
          </p>
          <a
            className="w-full break-all pl-4 text-(--txt-window)"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir projeto ${nameProject} em nova aba`}
          >
            liveUrl: <span className="text-(--txt-blue-low-window)">"{liveUrl}"</span>,
          </a>
          <p className="pl-4 text-(--txt-window)">
            techs:{" "}
            <span className="text-(--txt-blue-low-window)">
              {techsProject.map((tech) => `"${tech}"`).join(", ")}
            </span>
            ,
          </p>
          <p className="pl-4 text-(--txt-window)">
            status: <span className="text-(--txt-blue-low-window)">"{status}"</span>
          </p>
          <p className="pl-4 text-(--txt-window)">
            year: <span className="text-(--txt-blue-low-window)">{year}</span>
          </p>
          <p className="text-(--txt-window)">{"});"}</p>
        </div>

        <div className="flex max-w-full flex-col sm:max-w-[250px]">
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
