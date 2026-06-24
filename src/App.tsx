import { LayoutDefault } from "./layout/LayoutDefault";
import { AboutMe } from "./pages/about-me/about-me";
import { HomePage } from "./pages/home/home-page";
import { TechStack } from "./pages/tech-stack/tech-stack";

export function App() {
  return (
    <LayoutDefault className="flex-col">
      <HomePage />
      <TechStack />
      <AboutMe />
    </LayoutDefault>
  );
}

export default App;
