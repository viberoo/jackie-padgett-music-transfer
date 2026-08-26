/**
 * Cloudflare Pages serves extension-less paths from matching HTML files.
 * Copying the Vite entry document for the source-faithful public routes lets
 * the client-side Wouter router preserve /music, /poems, and /about on reload.
 */
import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDir = resolve(process.cwd(), "dist/public");
const source = resolve(outputDir, "index.html");
const routes = ["music", "poems", "about"];

await Promise.all(
  routes.map((route) => copyFile(source, resolve(outputDir, `${route}.html`))),
);

console.log(`Created Cloudflare Pages route aliases: ${routes.join(", ")}`);
