import { HadoukenEasterEgg } from "./components/hadouken-easter-egg";
import { LayoutDefault } from "./layout/LayoutDefault";
import { AboutMe } from "./pages/about-me/about-me";
import { ContactMe } from "./pages/contact-me/contact-me";
import { Experience } from "./pages/experience/experience";
import { HomePage } from "./pages/home/home-page";
import { ProjectsPage } from "./pages/projects/projects-page";
import { TechStack } from "./pages/tech-stack/tech-stack";

export function App() {
  return (
    <>
      <LayoutDefault className="flex-col">
        <HomePage />
        <TechStack />
        <AboutMe />
        <ProjectsPage />
        <Experience />
        <ContactMe />
      </LayoutDefault>
      <HadoukenEasterEgg />
    </>
  );
}

export default App;
