// Worst Fix Ever: Funniest Commit Message — entry program.
// Prints one commit message (1–100 chars) and writes it to /output/entry.txt.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const line =
  "fix: off-by-one in login throttle, > became >= — now nobody logs in, including me, the author";

if (line.length < 1 || line.length > 100) {
  throw new Error(`entry must be 1-100 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

// Round-trip check: what we wrote must be exactly what we print.
const written = readFileSync("/output/entry.txt", "utf8").trimEnd();
if (written !== line) {
  throw new Error("round-trip mismatch between entry.txt and the printed line");
}

console.log(line);
