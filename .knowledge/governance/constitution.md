---
id: rotary-exchange-trainer-constitution
title: Rotary Exchange Trainer Constitution
type: governance
source_of_truth:
  - package.json
  - apps/web/package.json
  - apps/api/package.json
  - packages/api-contract/openapi.yaml
---

# Rotary Exchange Trainer Constitution

## Core Principles

### I. Accessibility

Training content and interactive features must support keyboard navigation, semantic structure,
readable contrast, and clear labels. Validate affected accessibility behavior when changing the interface.

### II. Student Privacy and Safety

Minimize personal data collection, protect student information, and keep secrets out of source control
and logs. Training content must respect youth exchange safeguarding needs.

### III. Maintainability

Prefer simple solutions that fit existing workspace conventions. Keep API contracts, validation,
and consumers aligned. Preserve existing behavior unless a change is intentional and documented.

### IV. Reliable Validation

Run checks appropriate to the change. Use the existing pnpm typecheck and build commands for
application changes, and targeted checks for tooling or documentation. Report failures and limitations
honestly. Keep durable project knowledge synchronized with behavior changes.

## Technology

- TypeScript with pnpm workspaces and Node.js.
- React, Vite, Tailwind CSS, and Radix UI for the training interface.
- Express for the API.
- OpenAPI/Orval for generated API clients and Zod for validation.
- DevSpark tooling includes Python and both PowerShell and Bash script sets.

## Development Workflow

Use the smallest implementation and verification scope that addresses the requested change.
Review relevant privacy, safety, accessibility, and compatibility implications. Keep framework defaults
in `.devspark/`, overrides and temporary plans in `.devspark.work/`, and current project truth in
`.knowledge/`. Do not overwrite project knowledge during framework updates.

## Governance

This constitution governs Rotary Exchange Trainer. Amendments must state the reason and any
impact on existing behavior, and require repository owner acceptance. The initial project name,
stack, and principles were accepted by the repository owner during setup.

**Version**: 1.0.0 | **Ratified**: 2026-10-20 | **Last Amended**: 2026-10-20
