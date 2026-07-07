import { renderToString } from "react-dom/server";
import { AppRoot } from "./app-root";

export function render() {
  return renderToString(<AppRoot />);
}
