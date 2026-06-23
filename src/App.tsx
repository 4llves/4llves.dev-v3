import { LayoutDefault } from "./layout/LayoutDefault";
import { HomePage } from "./pages/home/home-page";
import { TechStack } from "./pages/tech-stack/tech-stack";

export function App() {
  return (
    <LayoutDefault className="flex-col">
      <HomePage />
      <TechStack />
    </LayoutDefault>
  );
}

export default App;
