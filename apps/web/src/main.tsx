import { createRoot } from "react-dom/client";
import { setBaseUrl } from "@rotary-exchange-trainer/api-client";
import App from "./App";
import "./index.css";

setBaseUrl(import.meta.env.VITE_API_URL || null);

// The guard is replaced at build time, so live builds drop MSW, the mock
// handlers and the service worker entirely.
if (import.meta.env.VITE_API_MODE === "mock") {
  const { network } = await import("virtual:msw");
  const { handlers } = await import("./mocks/handlers");

  network.configure({ handlers });
  await network.enable();
}

createRoot(document.getElementById("root")!).render(<App />);
