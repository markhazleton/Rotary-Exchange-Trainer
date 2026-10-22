import { Info } from "lucide-react";

export function DemoBanner() {
  return (
    <aside
      aria-label="Preview notice"
      className="bg-accent text-accent-foreground text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-2 text-center">
        <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
        <p>
          <span className="font-semibold">Preview site.</span> Sample data only;
          changes are not saved.
        </p>
      </div>
    </aside>
  );
}
