import * as React from "react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel"
> & {
  /** Hide the trailing icon when the content already shows one. */
  icon?: boolean;
};

/**
 * A link to another site. Opens in a new tab, shows the external-link icon,
 * and tells screen reader users that it leaves this site.
 */
const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ children, icon = true, ...props }, ref) => (
    <a ref={ref} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {icon && <ExternalLinkGlyph className="ml-1.5" />}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ),
);
ExternalLink.displayName = "ExternalLink";

/** The icon on its own, sized to the surrounding text. */
function ExternalLinkGlyph({ className }: { className?: string }) {
  return (
    <ExternalLinkIcon
      aria-hidden="true"
      className={cn(
        "inline-block size-[0.875em] shrink-0 align-[-0.075em]",
        className,
      )}
    />
  );
}

/** "https://www.rotary.org/x" -> "rotary.org", for showing where a link goes. */
function linkHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export { ExternalLink, ExternalLinkGlyph, linkHost };
