import type { HealthStatus } from "@rotary-exchange-trainer/api-client";

// Deterministic responses for the static demo. Typing each fixture with the
// generated model keeps it aligned with packages/api-contract/openapi.yaml.
// Never put real member or student data here: the demo is published publicly.

export const healthStatus: HealthStatus = { status: "ok" };
