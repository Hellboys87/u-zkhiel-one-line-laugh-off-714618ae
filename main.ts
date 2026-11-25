// One-Line Laugh-Off entry: writes exactly one joke line to entry.txt.
// The gate allows 1 to 200 characters, so the line is checked before writing.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// The whole entry: one joke, no setup, no explanation.
const line =
  "I asked my AI to make me a sandwich; it hallucinated a picture, cited three fake sources, and apologized that the bread was imaginary.";

if (line.trim().length === 0) {
  throw new Error("entry line must not be empty");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line, with no line breaks");
}
if (line.length > MAX_CHARS) {
  throw new Error(`entry line is ${line.length} characters, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
