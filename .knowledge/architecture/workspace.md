---
id: workspace-architecture
title: Workspace and API Contract Architecture
type: architecture
source_of_truth:
  - apps/web/vite.config.ts
  - .github/workflows/pages.yml
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

A read-only static demo of the web app is built with `pnpm build:demo` (Vite mode `demo`, see
`apps/web/.env.demo`) and published to GitHub Pages by `.github/workflows/pages.yml`. In that mode,
`VITE_API_MODE=mock` makes `apps/web/src/main.tsx` start Mock Service Worker through the `msw/vite`
plugin before rendering. Handlers in `apps/web/src/mocks/` combine Orval-generated MSW handlers
(`@rotary-exchange-trainer/api-client/mocks`) with typed fixtures, reject writes with 405, and
answer unknown `/api` paths with 404. `vite.config.ts` always defines `VITE_API_MODE` as a string
literal (`live` by default) so live builds drop the mock code and the service worker.

The root `pnpm build` command cleans outputs, regenerates contract artifacts, type-checks all
workspaces, and then builds the API and web app. Generated contract code is committed for review but
must never be edited manually.
