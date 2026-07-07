type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  side: "left" | "right";
  isCurrent?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    period: "2021 - Present",
    role: "Senior Frontend Engineer",
    company: "TechFlow Inc.",
    description:
      "Lead the architecture and development of scalable micro-frontends using React and TypeScript. Improved initial load time by 40%.",
    technologies: ["React", "TypeScript", "Next.js"],
    side: "right",
    isCurrent: true,
  },
  {
    period: "2018 - 2021",
    role: "Fullstack Developer",
    company: "Nexus Dynamics",
    description:
      "Developed robust RESTful APIs using Node.js and maintained legacy Python services. Spearheaded the migration to containerized deployments.",
    technologies: ["Node.js", "Vue.js", "Docker"],
    side: "left",
  },
  {
    period: "2016 - 2018",
    role: "Junior Web Developer",
    company: "Creative Digital",
    description:
      "Built responsive marketing sites and internal tooling. Focused on semantic HTML, CSS architectures, and vanilla JavaScript performance.",
    technologies: ["JavaScript", "Sass", "PHP"],
    side: "right",
  },
];

export function Experience() {
  return (
    <section id="experience" className="flex w-full flex-col gap-10 pt-16">
      <div className="max-w-2xl space-y-3">
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#f1f3f4] sm:text-5xl">
          Experience & Timeline
        </h2>
        <p className="max-w-xl text-base leading-7 text-[#9ca3af]">
          A chronological look at my journey through code, architecture, and engineering milestones.
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 py-4 before:absolute before:top-0 before:bottom-0 before:left-4 before:w-px before:bg-cyan-400/30 md:gap-14 md:before:left-1/2 md:before:-translate-x-1/2">
        {experiences.map((experience) => {
          const isRight = experience.side === "right";

          return (
            <article
              key={`${experience.company}-${experience.period}`}
              className="relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-14"
            >
              <div
                className={[
                  "order-2 md:order-none",
                  isRight ? "md:col-start-1 md:text-right" : "md:order-3 md:col-start-3",
                ].join(" ")}
              >
                <div className="space-y-2 pl-10 md:pl-0">
                  <span className="text-xs font-semibold tracking-[0.24em] text-cyan-400 uppercase">
                    {experience.period}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-semibold text-[#f1f3f4] sm:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-[#b8bec8]">{experience.company}</p>
                  </div>
                </div>
              </div>

              <div className="order-1 flex items-start md:order-none md:col-start-2 md:justify-center">
                <div className="absolute top-2 left-4 z-10 size-3 -translate-x-1/2 rounded-full border border-cyan-400 bg-background shadow-[0_0_0_4px_rgba(34,211,238,0.12)] md:left-1/2">
                  {experience.isCurrent ? (
                    <div className="absolute inset-[3px] rounded-full bg-cyan-400" />
                  ) : null}
                </div>
              </div>

              <div
                className={[
                  "order-3 md:order-none",
                  isRight ? "md:col-start-3" : "md:col-start-1 md:text-right",
                ].join(" ")}
              >
                <div className="ml-10 space-y-5 border border-white/8 bg-[#171717] px-4 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-6 sm:py-6 md:ml-0">
                  <p className="max-w-md text-sm leading-7 text-[#e5e7eb] md:max-w-none">
                    {experience.description}
                  </p>

                  <div
                    className={[
                      "flex flex-wrap gap-2",
                      isRight ? "md:justify-start" : "md:justify-end",
                    ].join(" ")}
                  >
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#cfd3d8] uppercase"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
