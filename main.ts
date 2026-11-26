// Picket Lines — The Robot Vacuum's Funniest Excuse
// Writes one line (<=120 chars) to /output/entry.txt: the excuse a robot
// vacuum gives for missing a spot. The vacuum's own voice, a machine making
// peace with failure: the pet hair under the sofa has unionized, and this
// machine does not cross picket lines.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The cat hair unionized under the sofa. I don't cross picket lines.";

// Gate self-check: the scorer requires UTF-8 text of 1-120 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} violates the 1-120 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
