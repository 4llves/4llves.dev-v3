import { ProjectWindow } from "./project-window";

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

const projects: ProjecstProps[] = [
  {
    title: "sindsaudepa.org.br",
    bgImage: "logo-full-w.svg",
    nameProject: "SindSaúde",
    descriptionProject: "a",
    liveUrl: "https://sindsaudepa.org.br/",
    techsProject: ["Vite.js", "TypeScript", "Tailwind.css"],
    status: "Concluído",
    year: "2026",
  },
  {
    title: "sindsaudepa.org.br",
    bgImage: "logo-full-w.svg",
    nameProject: "SindSaúde",
    descriptionProject: "a",
    liveUrl: "https://sindsaudepa.org.br/",
    techsProject: ["Vite.js", "TypeScript", "Tailwind.css"],
    status: "Concluído",
    year: "2026",
  },
];

export function ProjectsPage() {
  return (
    <section className="flex w-full flex-col gap-6 pt-12">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-lg">
            Building the next generation of web applications with cutting-edge technologies.
          </p>
        </div>

        <div className="flex w-full justify-between">
          {projects.map((item, i) => {
            return (
              <ProjectWindow
                key={i}
                title={item.title}
                bgImage={item.bgImage}
                nameProject={item.nameProject}
                descriptionProject={item.descriptionProject}
                liveUrl={item.liveUrl}
                techsProject={item.techsProject}
                status={item.status}
                year={item.year}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
