import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.css";
import { AppRoot } from "./app-root.tsx";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root not found.");
}

const app = (
  <StrictMode>
    <AppRoot />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
