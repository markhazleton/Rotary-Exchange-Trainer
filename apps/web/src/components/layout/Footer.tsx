import { Link } from "wouter";
import { ExternalLink } from "@/components/ui/external-link";

export function Footer() {
  return (
    <footer className="bg-foreground text-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg leading-none">
                  R
                </span>
              </div>
              <span className="font-serif font-semibold text-lg text-white">
                District 5680
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              People coming together, taking action, and creating lasting change
              — in the world, in their communities, and in themselves.
            </p>
          </div>
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Training Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-accent transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <ExternalLink
                  href="https://my.rotary.org"
                  className="hover:text-accent transition-colors"
                >
                  My Rotary
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">
              The Four-Way Test
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Is it the TRUTH?</li>
              <li>Is it FAIR to all concerned?</li>
              <li>Will it build GOODWILL and BETTER FRIENDSHIPS?</li>
              <li>Will it be BENEFICIAL to all concerned?</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rotary District 5680. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
