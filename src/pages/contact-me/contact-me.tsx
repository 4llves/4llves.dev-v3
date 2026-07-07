import { SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactMe() {
  return (
    <section id="contact-me" className="flex w-full pt-16 pb-24">
      <div className="w-full rounded-2xl border border-white/8 bg-[#171717] px-6 py-8 sm:px-8 sm:py-10">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#f2f4f5] sm:text-5xl">
              Let&apos;s Connect
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7dadf]">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 border border-white/8 bg-[#121414] px-4 text-sm text-[#eef1f3] outline-none transition-colors placeholder:text-[#64748b] focus:border-cyan-400/60"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7dadf]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="h-12 border border-white/8 bg-[#121414] px-4 text-sm text-[#eef1f3] outline-none transition-colors placeholder:text-[#64748b] focus:border-cyan-400/60"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7dadf]">
                Message
              </span>
              <textarea
                rows={7}
                placeholder="How can we collaborate?"
                className="min-h-44 resize-none border border-white/8 bg-[#121414] px-4 py-4 text-sm text-[#eef1f3] outline-none transition-colors placeholder:text-[#64748b] focus:border-cyan-400/60"
              />
            </label>

            <Button
              type="submit"
              variant="secondary"
              className="h-11 rounded-none border border-[#d9dde0] bg-[#eef1f3] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#111315] hover:bg-white"
            >
              Send Message
              <SendHorizonal className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
