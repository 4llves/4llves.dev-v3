import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { LayoutDefault } from "./layout/LayoutDefault.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>      
      <LayoutDefault>
        <App />
      </LayoutDefault>
    </ThemeProvider>
  </StrictMode>
)
