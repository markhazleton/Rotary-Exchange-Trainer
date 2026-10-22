import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoBanner } from "./DemoBanner";

const isDemo = import.meta.env.VITE_API_MODE === "mock";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      {isDemo && <DemoBanner />}
      <Navbar />
      <main className="flex-1 flex flex-col relative">{children}</main>
      <Footer />
    </div>
  );
}
