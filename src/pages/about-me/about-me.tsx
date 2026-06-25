import { User } from "lucide-react";

export function AboutMe() {
  return (
    <section className="flex w-full pt-20">
      <div className="w-2 self-stretch rounded-l-2xl bg-(--txt-blue-strong-window)" />

      <div className="flex h-auto w-6xl flex-col gap-4 rounded-r-2xl border border-[#262626FF] bg-[#171717FF] p-12 text-[#c4c7c7]">
        <div className="flex items-center gap-2">
          <User color="#8e9192FF" className="w-4" />
          <span className="text-sm text-[#8e9192FF] uppercase">sobre mim</span>
        </div>

        <div>
          <h2 className="text-3xl text-[#e2e2e2FF]">A Jornada</h2>
        </div>

        <div>
          <span>
            {"{{"}DATA:DOCUMENT:DOCUMENT_1{"}}"}
          </span>
        </div>
        <div>
          <p>
            Olá sou Jhonata Alves, tenho 29 anos e sou apaixonado por tecnologia desde os 9.
            Atualmente atuo como Desenvolvedor Full-Stack, criando aplicações web modernas, rápidas
            e intuitivas. Moro no Pará e estou sempre em busca de aprender novas tecnologias e
            transformar boas ideias em soluções digitais.
          </p>
        </div>

        <div className="flex gap-2">
          <span className="rounded-sm border border-[#262626] px-3 py-1">FRONT END</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">BACK END</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">UI/UX DESIGN</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">RPA</span>
        </div>
      </div>
    </section>
  );
}
