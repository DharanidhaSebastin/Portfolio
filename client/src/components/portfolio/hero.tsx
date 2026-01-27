import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { portfolioData } from "@/lib/portfolio-data";
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import profileImage from "@assets/Untitled_design_1769508700580.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
      data-testid="section-hero"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="outline" className="px-3 py-1 font-mono text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for opportunities
              </Badge>
            </div>

            <div className="space-y-4 mb-8">
              <p className="font-mono text-primary text-sm" data-testid="text-greeting">
                <Terminal className="inline h-4 w-4 mr-2" />
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient" data-testid="text-title">
                {portfolioData.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed" data-testid="text-summary">
                {portfolioData.summary.split('.')[0]}.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" asChild data-testid="button-contact">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-projects">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild data-testid="button-linkedin">
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="button-email">
                <a href={`mailto:${portfolioData.email}`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/20 p-2 animate-pulse-glow">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={profileImage} alt={portfolioData.name} className="object-cover" />
                    <AvatarFallback className="text-4xl font-bold bg-primary/10">DS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2">
                  <p className="font-mono text-sm flex items-center gap-2">
                    <span className="text-primary">3+</span>
                    <span className="text-muted-foreground">Years Experience</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            data-testid="link-scroll-down"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}