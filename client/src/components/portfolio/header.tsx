import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
      data-testid="header"
    >
      <nav className="container mx-auto px-4 flex items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-lg font-bold"
          data-testid="link-logo"
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline">DS</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button asChild className="hidden md:flex" data-testid="button-hire-me">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-md overflow-hidden" data-testid="mobile-menu">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2" data-testid="button-mobile-hire-me">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}