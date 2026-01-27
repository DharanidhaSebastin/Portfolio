import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, GraduationCap, MapPin, Code, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years",
    description: "Professional Experience",
  },
  {
    icon: Users,
    title: "Team Lead",
    description: "Leading Dev Teams",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "End-to-End Development",
  },
  {
    icon: Rocket,
    title: "3+ Projects",
    description: "Production Apps Delivered",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4"
      data-testid="section-about"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Passionate About Building
            <span className="text-gradient"> Great Software</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a developer who loves turning ideas into reality through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-testid="text-about-intro">
              {portfolioData.summary}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{portfolioData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary shrink-0" />
                <span>Team Lead at DataPattern</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <span>{portfolioData.education.degree} - {portfolioData.education.institution}</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["Angular", "Java", "Spring Boot", "AWS", "PostgreSQL", "MongoDB"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate cursor-default"
                data-testid={`card-highlight-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}