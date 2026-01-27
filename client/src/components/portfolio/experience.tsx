import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4"
      data-testid="section-experience"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            Work Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Professional
            <span className="text-gradient"> Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Growing from developer to team lead, building impactful products along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative grid md:grid-cols-2 gap-4 md:gap-8"
                  data-testid={`experience-item-${exp.id}`}
                >
                  <div
                    className={`absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-background ${
                      index === 0 ? "bg-primary" : "bg-muted"
                    } md:-translate-x-1/2 z-10`}
                  />

                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"} pl-12 md:pl-0`}>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      {index === 0 && (
                        <Badge variant="default" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? "md:order-2 md:pl-12" : "md:pr-12"} pl-12 md:pl-0`}>
                    <Card className="p-6 hover-elevate">
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{exp.duration}</span>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="font-mono text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}