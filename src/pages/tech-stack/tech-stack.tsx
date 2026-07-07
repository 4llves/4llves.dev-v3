export function TechStack() {
  return (
    <section className="flex w-full flex-col gap-6 pt-6">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Tecnologias:</h2>
          <p className="text-base sm:text-lg">Ferramentas que uso para dar vida a ideias.</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          <div className="flex h-[160px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-[#262626FF] bg-[#171717FF]">
            <div className="flex">
              <img src="/ts.svg" alt="TS" className="w-9" />
            </div>
            <span className="text-[#e2e2e2FF]">Type Script</span>
          </div>

          <div className="flex h-[160px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-[#262626FF] bg-[#171717FF]">
            <div className="flex">
              <img src="/react.svg" alt="React" className="w-9" />
            </div>
            <span className="text-[#e2e2e2FF]">React</span>
          </div>

          <div className="flex h-[160px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-[#262626FF] bg-[#171717FF]">
            <div className="flex">
              <img src="/node.svg" alt="Node" className="w-9" />
            </div>
            <span className="text-[#e2e2e2FF]">Node.js</span>
          </div>

          <div className="flex h-[160px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-[#262626FF] bg-[#171717FF]">
            <div className="flex">
              <img src="/python.svg" alt="Python" className="w-9" />
            </div>
            <span className="text-[#e2e2e2FF]">Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}
