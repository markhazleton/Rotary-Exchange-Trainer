import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const generatedFiles = [
  "packages/api-client/src/generated/api.msw.ts",
  "packages/api-client/src/generated/api.schemas.ts",
  "packages/api-client/src/generated/api.ts",
  "packages/api-schema/src/generated/api.ts",
  "packages/api-schema/src/generated/types/healthStatus.ts",
  "packages/api-schema/src/generated/types/index.ts",
];

await Promise.all(
  generatedFiles.map(async (relativePath) => {
    const filePath = path.join(repositoryRoot, relativePath);
    const contents = await readFile(filePath, "utf8");
    const newline = contents.includes("\r\n") ? "\r\n" : "\n";
    await writeFile(filePath, `${contents.trimEnd()}${newline}`, "utf8");
  }),
);

console.log(`Normalized ${generatedFiles.length} generated files.`);
