import { mkdirSync, writeFileSync } from "node:fs";

// The last text a dying phone sends at one percent battery.
// Exactly 130 characters, no trailing newline.
const LINE =
  "1% left. I deleted your 47 alarm apps, kept the one that says 'wake up beautiful,' and I'm taking the Wi-Fi password to the grave.";

// Fail loudly instead of silently handing the judge an invalid entry:
// the gate requires 1-200 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
