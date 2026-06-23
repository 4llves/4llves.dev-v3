import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex w-full max-w-[600px] flex-col gap-6">
      <div>
        <span>AVAILABLE FOR NEW PROJECTS</span>
        <h2>Building the future of the web.</h2>
        <p>
          Full-stack developer specializing in creating high-performance, minimalist digital
          experiences with a focus on modern tooling and scalable architecture.
        </p>

        <div>
          <Button>View Projects</Button>

          <Button>
            Contecte Me <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
