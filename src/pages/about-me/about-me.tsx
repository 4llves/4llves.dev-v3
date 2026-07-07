import { User } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about-me" className="flex w-full pt-16">
      <div className="w-1 self-stretch rounded-l-2xl bg-(--txt-blue-strong-window) sm:w-2" />

      <div className="flex h-auto w-full flex-col gap-4 rounded-r-2xl border border-[#262626FF] bg-[#171717FF] p-6 text-[#c4c7c7] sm:p-10 lg:p-12">
        <div className="flex items-center gap-2">
          <User color="#8e9192FF" className="w-4" />
          <span className="text-sm text-[#8e9192FF] uppercase">sobre mim</span>
        </div>

        <div>
          <h2 className="text-3xl text-[#e2e2e2FF] sm:text-4xl">A Jornada</h2>
        </div>

        <div>
          <span>
            {"{{"}DATA:DOCUMENT:DOCUMENT_1{"}}"}
          </span>
        </div>
        <div>
          <p className="text-sm leading-7 sm:text-base sm:leading-8">
            Olá sou Jhonata Alves, tenho 29 anos e sou apaixonado por tecnologia desde os 9.
            Atualmente atuo como Desenvolvedor Full-Stack, criando aplicações web modernas, rápidas
            e intuitivas. Moro no Pará e estou sempre em busca de aprender novas tecnologias e
            transformar boas ideias em soluções digitais.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-sm border border-[#262626] px-3 py-1">FRONT END</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">BACK END</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">UI/UX DESIGN</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">RPA</span>
        </div>
      </div>
    </section>
  );
}
