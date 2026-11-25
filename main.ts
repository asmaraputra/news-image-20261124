// World news in one image, 24 November 2026.
// Node 22, standard library only, no network.
// The entry image lives beside this file as entry.png.
// The program copies those exact bytes to the output folder.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
