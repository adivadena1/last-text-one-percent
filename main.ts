import { mkdirSync, writeFileSync } from "node:fs";

// Last text at one percent — exactly 103 characters, no trailing newline.
const LINE =
  "1%. You named an alarm 'wake up beautiful.' Forty mornings, zero wake-ups. I'm dying with the evidence.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry length ${LINE.length} is outside the 1-200 character limit`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
