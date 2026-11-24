import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I live alone, and every morning the kettle is warm and a second mug waits beside mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert it
// is exactly the entry line (86 characters, 86 bytes, no trailing newline).
import { readFileSync } from "node:fs";
const back = readFileSync("/output/entry.txt", "utf8");
const expected =
  "I live alone, and every morning the kettle is warm and a second mug waits beside mine.";
if (back !== expected) throw new Error("read-back mismatch");
if (back.length !== 86) throw new Error(`expected 86 chars, got ${back.length}`);
if (Buffer.byteLength(back, "utf8") !== 86) throw new Error("expected 86 bytes");
if (back.endsWith("\n")) throw new Error("trailing newline present");
