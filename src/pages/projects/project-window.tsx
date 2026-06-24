import { Circle } from "lucide-react";

type ProjecstProps = {
  title: string;
  bgImage: string;
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
  nameProject,
  descriptionProject,
  liveUrl,
  techsProject,
  status,
  year,
}: ProjecstProps) {
  return (
    <section className="flex w-[520px] flex-col rounded-xl border">
      {/* barra topo janela */}
      <div className="flex h-[36px] w-full items-center justify-between rounded-t-xl border border-[#262626] bg-[#171717] px-4">
        <div className="flex gap-2">
          <Circle size={12} className="fill-red-400" color="none" />
          <Circle size={12} className="fill-amber-400" color="none" />
          <Circle size={12} className="fill-green-400" color="none" />
        </div>

        <span className="text-lg font-semibold text-[#8e9192]">{title}</span>
      </div>

      {/* corpo janela */}
      <div className="relative flex w-full flex-col gap-4 overflow-hidden border border-[#262626] bg-[#111111] p-7 text-sm">
        {/* <div className="pointer-events-none absolute inset-0 bg-[url('/logo-full-w.svg')] bg-size-[80%] bg-center bg-no-repeat opacity-25" /> */}
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "80%" }}
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
          <p className="pl-4 text-(--txt-window)">
            liveUrl: <span className="text-(--txt-blue-low-window)">"{liveUrl}"</span>,
          </p>
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
