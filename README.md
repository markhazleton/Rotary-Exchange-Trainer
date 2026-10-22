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

## Static demo (GitHub Pages)

A read-only build of the web app runs without the API, for sharing with stakeholders. In demo mode
(`vite --mode demo`, configured in `apps/web/.env.demo`) the browser loads Mock Service Worker,
which answers `/api` requests from fixtures:

- `pnpm generate` also writes contract-based MSW handlers to
  `packages/api-client/src/generated/api.msw.ts`, exported as `@rotary-exchange-trainer/api-client/mocks`.
- `apps/web/src/mocks/fixtures.ts` holds the sample responses, typed with the generated models. Add
  a fixture and register its handler in `apps/web/src/mocks/handlers.ts` for each new operation;
  operations without one fall back to generated faker data. Never use real member or student data.
- Writes (`POST`, `PUT`, `PATCH`, `DELETE`) return `405 Read-only demo`, and paths outside the
  contract return `404 Not mocked`.
- A banner marks every page as a preview. The build also copies `index.html` to `404.html` so
  client-side routes survive a refresh on GitHub Pages, and sets `noindex, nofollow` so search
  engines skip the preview.

Run it locally with `pnpm dev:demo`, or `pnpm build:demo` followed by
`pnpm --filter @rotary-exchange-trainer/web run preview:demo` and open
`http://127.0.0.1:5173/Rotary-Exchange-Trainer/`.

`.github/workflows/pages.yml` publishes the demo on every push to `main`. Enable it once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**. Live builds (`pnpm build`) do
not include MSW, the fixtures, the banner or the service worker.

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
| `pnpm dev:demo`     | Run the web app against MSW fixtures, no API     |
| `pnpm build:demo`   | Build the read-only static demo for GitHub Pages |
| `pnpm clean`        | Remove generated build output                    |
| `pnpm format`       | Format the workspace                             |
| `pnpm format:check` | Check formatting without changing files          |

## Production output

- API: `apps/api/dist/index.js` (start with `pnpm --filter @rotary-exchange-trainer/api start`)
- Web: `apps/web/dist/` (static files suitable for a CDN or static host)

Set `PORT` for the API when the hosting environment does not use port 3000. Set `BASE_PATH` during
the web build when deploying below a URL prefix, and set `VITE_API_URL` when the deployed API uses a
different origin.
