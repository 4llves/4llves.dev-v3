import App from "./App";
import { ThemeProvider } from "@/components/theme-provider";

export function AppRoot() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
