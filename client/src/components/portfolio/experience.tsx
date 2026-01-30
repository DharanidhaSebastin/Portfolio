import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, Building2, Crown, Users, Code, ArrowRight, Rocket } from "lucide-react";

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  crown: Crown,
  users: Users,
  code: Code,
};

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
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-muted -translate-x-1/2 rounded-full" />

            <div className="space-y-0">
              {portfolioData.experience.map((exp, index) => {
                const Icon = roleIcons[exp.icon] || Code;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={exp.id}
                    className="relative"
                    data-testid={`experience-item-${exp.id}`}
                  >
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                      <div className={`w-14 h-14 rounded-full border-4 border-background flex items-center justify-center ${
                        index === 0 ? "bg-primary" : index === 1 ? "bg-accent" : "bg-muted"
                      }`}>
                        <Icon className={`h-6 w-6 ${index === 0 || index === 1 ? "text-white" : "text-foreground"}`} />
                      </div>
                    </div>

                    <div className={`grid md:grid-cols-2 gap-6 md:gap-12 pb-12 ${index === portfolioData.experience.length - 1 ? "pb-0" : ""}`}>
                      <div className={`${isLeft ? "md:text-right" : "md:order-2"}`}>
                        <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                          <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span className="font-semibold text-foreground">{exp.company}</span>
                              {index === 0 && (
                                <Badge variant="default" className="text-xs">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 ${isLeft ? "md:justify-end" : ""}`}>
                              <Calendar className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`${isLeft ? "md:order-2 md:pl-8" : "md:pr-8"}`}>
                        <Card className="p-6 hover-elevate border-l-4 border-l-primary md:border-l-0">
                          <div className="flex items-start gap-4">
                            <div className={`hidden md:flex w-12 h-12 rounded-lg shrink-0 items-center justify-center ${
                              index === 0 ? "bg-primary/10" : index === 1 ? "bg-accent/10" : "bg-muted"
                            }`}>
                              <Rocket className={`h-5 w-5 ${
                                index === 0 ? "text-primary" : index === 1 ? "text-accent" : "text-muted-foreground"
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full inline-block mb-3">
                                {exp.duration}
                              </span>
                              <p className="text-muted-foreground text-sm mb-4">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                  <Badge key={skill} variant="secondary" className="font-mono text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>

                    {index < portfolioData.experience.length - 1 && (
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-2 z-10">
                        <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center relative z-10">
  <div
    className="
      inline-flex items-center gap-3 px-6 py-3 rounded-full
      bg-gradient-to-r from-primary/10 to-accent/10
      border border-primary/20
      backdrop-blur-sm
      relative z-10
    "
  >
    <Rocket className="h-5 w-5 text-primary" />
    <span className="font-semibold whitespace-nowrap">
      3+ Years of Growth & Impact
    </span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}