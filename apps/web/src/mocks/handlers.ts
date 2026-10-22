import { http, HttpResponse } from "msw";
import {
  getApiMock,
  getHealthCheckMockHandler,
} from "@rotary-exchange-trainer/api-client/mocks";
import * as fixtures from "./fixtures";

const API_PATH = "*/api/*";
const READ_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

function problem(status: number, title: string, detail: string) {
  return HttpResponse.json(
    { status, title, detail },
    { status, headers: { "content-type": "application/problem+json" } },
  );
}

// The demo is read-only: reject writes before any generated handler can
// pretend to save them. Returning nothing lets reads fall through.
const readOnly = http.all(API_PATH, ({ request }) => {
  if (READ_METHODS.has(request.method)) return;

  return problem(
    405,
    "Read-only demo",
    "This preview uses sample data and does not save changes.",
  );
});

// Operations with hand-written fixtures. Add one here for each new endpoint.
const fixtureHandlers = [getHealthCheckMockHandler(fixtures.healthStatus)];

// Anything under /api that the contract does not describe.
const notMocked = http.all(API_PATH, ({ request }) =>
  problem(
    404,
    "Not mocked",
    `No demo response for ${request.method} ${new URL(request.url).pathname}.`,
  ),
);

export const handlers = [
  readOnly,
  ...fixtureHandlers,
  // Contract-shaped faker data for operations that have no fixture yet.
  ...getApiMock(),
  notMocked,
];
