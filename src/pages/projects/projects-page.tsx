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
    bgImage: "sindsaude-pa.svg",
    nameProject: "SindSaúde",
    descriptionProject: "Portal institucional do SindSaúde Pará",
    liveUrl: "https://sindsaudepa.org.br/",
    techsProject: ["Vite.js", "TypeScript", "Tailwind.css"],
    status: "Concluído",
    year: "2026",
  },
  {
    title: "movemarias.org.br",
    bgImage: "move-marias.svg",
    nameProject: "Move Marias",
    descriptionProject: "Portal institucional da Move Marias",
    liveUrl: "https://www.movemarias.org.br/",
    techsProject: ["TypeScript", "Tailwind.css", "Framer Motion"],
    status: "Concluído",
    year: "2026",
  },
];

export function ProjectsPage() {
  return (
    <section id="projects" className="flex w-full flex-col gap-6 pt-12">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Projetos em Destaque</h2>
          <p className="text-base sm:text-lg">Alguns dos projetos que transformei em realidade.</p>
        </div>

        <div className="flex w-full flex-col gap-6 xl:flex-row xl:justify-between">
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
