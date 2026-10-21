import { createRoot } from "react-dom/client";
import { setBaseUrl } from "@rotary-exchange-trainer/api-client";
import App from "./App";
import "./index.css";

setBaseUrl(import.meta.env.VITE_API_URL || null);

createRoot(document.getElementById("root")!).render(<App />);
