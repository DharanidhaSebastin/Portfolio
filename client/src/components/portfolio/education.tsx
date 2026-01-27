import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { GraduationCap, Calendar, Award, Users, Star } from "lucide-react";

export function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section
      id="education"
      className="py-20 px-4"
      data-testid="section-education"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            Education & Certifications
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic
            <span className="text-gradient"> Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foundation of knowledge and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <Card className="p-6 hover-elevate" data-testid="card-education">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-1">{education.degree}</h4>
                  <p className="text-muted-foreground mb-2">{education.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Activities & Leadership:</p>
                    <div className="flex flex-wrap gap-2">
                      {education.activities.map((activity) => (
                        <Badge key={activity} variant="outline" className="text-xs">
                          <Users className="h-3 w-3 mr-1" />
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="p-4 hover-elevate"
                  data-testid={`card-certification-${cert.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 line-clamp-2">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Earned: {cert.date}
                        </p>
                      )}
                      {cert.exam && (
                        <Badge variant="secondary" className="mt-2 text-xs font-mono">
                          {cert.exam}
                        </Badge>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground mt-1 font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}