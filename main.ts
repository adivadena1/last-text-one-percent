import { mkdirSync, writeFileSync } from "node:fs";

// The last text a dying phone sends at one percent battery.
// Exactly 130 characters, no trailing newline.
const LINE =
  "1% left. I deleted your 47 alarm apps, kept the one that says 'wake up beautiful,' and I'm taking the Wi-Fi password to the grave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
