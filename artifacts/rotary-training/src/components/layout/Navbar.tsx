import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" data-testid="nav-logo">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg leading-none">R</span>
              </div>
              <span className="font-serif font-semibold text-lg tracking-tight">District 5680</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium" data-testid="nav-home">Home</Link>
            <Link href="/resources" className="hover:text-accent transition-colors font-medium" data-testid="nav-resources">Resources</Link>
            <a 
              href="https://my.rotary.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
              data-testid="nav-login"
            >
              Member Login
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-primary-foreground hover:text-accent"
              data-testid="nav-mobile-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <a 
              href="https://my.rotary.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-semibold text-accent"
              onClick={() => setIsOpen(false)}
            >
              Member Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
