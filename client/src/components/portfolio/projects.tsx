import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { ExternalLink, Layers, Brain, Heart, Users, Share2 } from "lucide-react";

const projectIcons = [Brain, Heart, Users, Share2];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-muted/30"
      data-testid="section-projects"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Things I've
            <span className="text-gradient"> Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications solving real problems for users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioData.projects.map((project, index) => {
            const Icon = projectIcons[index] || Layers;
            const isAccent = project.color === "accent";
            
            return (
              <Card
                key={project.id}
                className="group overflow-hidden hover-elevate"
                data-testid={`card-project-${project.id}`}
              >
                <div className={`h-2 ${isAccent ? "bg-accent" : "bg-primary"}`} />
                
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${isAccent ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center shrink-0`}>
                      <Icon className={`h-6 w-6 ${isAccent ? "text-accent" : "text-primary"}`} />
                    </div>
                    {project.link && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-project-${project.id}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  
                  <Badge variant="outline" className="mb-4 text-xs font-mono">
                    {project.role}
                  </Badge>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}