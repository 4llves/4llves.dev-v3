export function ProjectsPage() {
  return (
    <section className="flex w-full flex-col gap-6 pt-12">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <p className="text-lg">Tools I use to bring ideas to life.</p>
        </div>

        <div className="flex w-[368px] bg-[#262626]">
          <div>
            <div className="h-[194px]">
              <img src="" alt="" />
            </div>
            <div className="flex h-[230px] flex-col items-center justify-center">
              <div>
                <h2>Pulse UI Kit</h2>
                <span>A compreheseive design system focusing</span>
              </div>

              <div className="flex gap-2.5">
                <span className="rounded-sm bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
                  Tailwind
                </span>
                <span className="rounded-sm bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
                  Storybook
                </span>
                <span className="rounded-sm bg-(--txt-blue-strong-window)/10 px-2 py-1 text-(--txt-blue-strong-window)">
                  Framer Motion
                </span>
              </div>

              <div>
                <a href="#">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
