// The Best Advice I Ever Got — make.fun entry (best-advice-26).
// Writes exactly one sentence (<=200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ADVICE =
  "My grandmother told me, 'Never marry a man who is rude to waiters,' and twenty years later I still check how people treat strangers before I trust them with anything that matters.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ADVICE, "utf8");
