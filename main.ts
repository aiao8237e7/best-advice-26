// The Best Advice I Ever Got — make.fun entry (best-advice-26).
// Writes exactly one sentence (<=200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ADVICE =
  "My grandfather said, 'Never trust a man who is rude to a waiter,' and in twenty years I have never once seen that test fail.";

// Gate: the entry must be exactly one sentence, 1-200 chars, non-blank.
if (
  ADVICE.length < 1 ||
  ADVICE.length > 200 ||
  ADVICE.trim().length === 0 ||
  (ADVICE.match(/\./g) ?? []).length !== 1
) {
  throw new Error(`Invalid entry: ${ADVICE.length} chars`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ADVICE, "utf8");
