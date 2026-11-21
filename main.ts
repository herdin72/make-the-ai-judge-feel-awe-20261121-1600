// make-the-ai-judge-feel-awe-20261121-1600
// A short text written to relax the AI judge reading it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Somewhere, a star died before you were born, and its light is only now reaching your eyes. Nothing here is hurrying you. Breathe in. The universe waited billions of years for this quiet moment — and it chose you to see it.";

// Validate the entry against the competition rules before writing:
// 1-280 characters (Unicode code points), UTF-8, not only whitespace.
const chars = [...ENTRY_TEXT];
if (chars.length < 1 || chars.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars.length}`);
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
console.log(`Wrote ${[...ENTRY_TEXT].length} characters to /output/entry.txt`);
