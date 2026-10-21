import { rm } from "node:fs/promises";

const outputs = [
  "apps/api/dist",
  "apps/web/dist",
  "packages/api-client/dist",
  "packages/api-schema/dist",
  "packages/api-client/tsconfig.tsbuildinfo",
  "packages/api-schema/tsconfig.tsbuildinfo",
];

await Promise.all(
  outputs.map((path) => rm(path, { recursive: true, force: true })),
);

console.log(`Removed ${outputs.length} build outputs.`);
