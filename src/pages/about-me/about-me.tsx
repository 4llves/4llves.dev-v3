import { User } from "lucide-react";

export function AboutMe() {
  return (
    <section className="flex w-full pt-20">
      <div className="w-2 self-stretch rounded-l-2xl bg-(--txt-blue-strong-window)" />

      <div className="flex h-auto w-6xl flex-col gap-4 rounded-r-2xl border border-[#262626FF] bg-[#171717FF] p-12 text-[#c4c7c7]">
        <div className="flex items-center gap-2">
          <User color="#8e9192FF" className="w-4" />
          <span className="text-sm text-[#8e9192FF]">ABOUT ME</span>
        </div>

        <div>
          <h2 className="text-3xl text-[#e2e2e2FF]">The Journey</h2>
        </div>

        <div>
          <span>
            {"{{"}DATA:DOCUMENT:DOCUMENT_1{"}}"}
          </span>
        </div>
        <div>
          <p>
            I specialize in bridging the gap between complex backend architecture and sleek,
            intuitive user interfaces. My approach is rooted in writing clean, maintainable code and
            designing systems that scale effortlessly.
          </p>
        </div>

        <div className="flex gap-2">
          <span className="rounded-sm border border-[#262626] px-3 py-1">BACKEND ARCHITECTURE</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">UI/UX DESIGN</span>
          <span className="rounded-sm border border-[#262626] px-3 py-1">
            PERFORMACE OPTIMIZATION
          </span>
        </div>
      </div>
    </section>
  );
}
