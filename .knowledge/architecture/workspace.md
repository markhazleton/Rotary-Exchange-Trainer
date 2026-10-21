---
id: workspace-architecture
title: Workspace and API Contract Architecture
type: architecture
source_of_truth:
  - package.json
  - pnpm-workspace.yaml
  - packages/api-contract/openapi.yaml
  - packages/api-contract/orval.config.ts
---

# Workspace and API Contract Architecture

The repository uses a pnpm monorepo split into deployable applications under `apps/` and shared
contract packages under `packages/`.

`packages/api-contract/openapi.yaml` is the source of truth for HTTP operations and data shapes.
`pnpm generate` uses Orval to produce a React Query client in `packages/api-client/src/generated/`
and Zod schemas in `packages/api-schema/src/generated/`. The API imports the generated schemas to
validate responses, while the web app imports the client package and configures its base URL once at
startup.

During local development, Vite proxies `/api` to the Express server on port 3000. This keeps browser
requests same-origin and avoids broad CORS configuration. Production deployments may provide
`VITE_API_URL` when the API is hosted separately.

The root `pnpm build` command cleans outputs, regenerates contract artifacts, type-checks all
workspaces, and then builds the API and web app. Generated contract code is committed for review but
must never be edited manually.
