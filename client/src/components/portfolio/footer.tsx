import { portfolioData } from "@/lib/portfolio-data";
import { Code2, Heart } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t" data-testid="footer">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm">
              {portfolioData.name.split(" ")[0]}
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Built with <Heart className="inline h-3 w-3 text-destructive mx-1" /> using React & Tailwind CSS
          </p>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${portfolioData.email}`} data-testid="footer-link-email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            {currentYear} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}