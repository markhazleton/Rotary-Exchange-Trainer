/// <reference types="vite/client" />
/// <reference types="msw/vite/client" />

interface ImportMetaEnv {
  /** "mock" serves API responses from MSW fixtures (static demo build). */
  readonly VITE_API_MODE?: "live" | "mock";
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
