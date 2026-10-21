# Rotary Exchange Trainer

Leadership training and resources for Rotary District 5680, built as a pnpm workspace with a React
client, an Express API, and an OpenAPI-first generated client and validation layer.

## Requirements

- Node.js 22 or newer
- pnpm 12 (`corepack enable` is the simplest setup)

## Development

Install dependencies and start the API and web app together:

```powershell
pnpm install
pnpm dev
```

The API listens on `http://127.0.0.1:3000`; the web app listens on
`http://127.0.0.1:5173` and proxies `/api` to the API during local development.

Use `pnpm dev:api` or `pnpm dev:web` when working on one side only. Copy the relevant `.env.example`
file to `.env.local` for local overrides.

## API-first workflow

1. Change the source contract in `packages/api-contract/openapi.yaml`.
2. Run `pnpm generate` to update the React Query client and server-side Zod schemas.
3. Implement the API route using schemas exported by `@rotary-exchange-trainer/api-schema`.
4. Consume the generated hooks and models from `@rotary-exchange-trainer/api-client`.
5. Run `pnpm build` before committing. The build regenerates the client, type-checks every workspace,
   and builds both deployable apps from a clean output directory.

Generated files are committed so contract changes are reviewable. Do not edit files under a
`src/generated/` directory by hand.

## Workspace layout

```text
apps/
  api/                 Express API
  web/                 React and Vite client
packages/
  api-contract/        OpenAPI source and Orval configuration
  api-client/          Generated React Query client and fetch adapter
  api-schema/          Generated Zod response validation
scripts/               Cross-platform repository tooling
docs/reference/        Original project reference material
```

## Commands

| Command             | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| `pnpm dev`          | Run the API and web development servers          |
| `pnpm generate`     | Regenerate API client and schemas from OpenAPI   |
| `pnpm typecheck`    | Type-check shared packages and both apps         |
| `pnpm build`        | Clean, generate, type-check, and build both apps |
| `pnpm clean`        | Remove generated build output                    |
| `pnpm format`       | Format the workspace                             |
| `pnpm format:check` | Check formatting without changing files          |

## Production output

- API: `apps/api/dist/index.js` (start with `pnpm --filter @rotary-exchange-trainer/api start`)
- Web: `apps/web/dist/` (static files suitable for a CDN or static host)

Set `PORT` for the API when the hosting environment does not use port 3000. Set `BASE_PATH` during
the web build when deploying below a URL prefix, and set `VITE_API_URL` when the deployed API uses a
different origin.
