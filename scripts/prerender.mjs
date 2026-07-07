import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");
const entryServerPath = path.join(distDir, "server", "entry-server.js");

const template = await readFile(templatePath, "utf8");
const { render } = await import(pathToFileURL(entryServerPath).href);
const appHtml = render();

const prerenderedHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await writeFile(templatePath, prerenderedHtml, "utf8");
