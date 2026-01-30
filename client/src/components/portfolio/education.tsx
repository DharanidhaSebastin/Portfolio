import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import {
  GraduationCap,
  Calendar,
  Award,
  Users,
  CheckCircle,
  Cloud,
} from "lucide-react";

export function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section
      id="education"
      className="py-20 px-4"
      data-testid="section-education"
    >
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            Education & Certifications
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foundation of knowledge and continuous learning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* ===================== EDUCATION (UNCHANGED) ===================== */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>

              <Card className="p-6 h-full hover-elevate" data-testid="card-education">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>

                  <h4 className="text-lg font-bold mb-2">
                    {education.degree}
                  </h4>

                  <p className="text-muted-foreground text-sm mb-3">
                    {education.institution}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-3">
                      Leadership & Activities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Users className="h-3 w-3 mr-1" />
                          {activity.split(",")[0]}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* ===================== CERTIFICATIONS (CREATIVE DESIGN) ===================== */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Certifications
              </h3>

              <div className="grid gap-4">
                {certifications.map((cert) => {
                  const isMicrosoft = cert.issuer === "Microsoft";

                  return (
                    <Card
                      key={cert.id}
                      className="
                        relative p-5 overflow-hidden
                        transition-all duration-300
                        hover:-translate-y-1 hover-elevate
                      "
                      data-testid={`card-certification-${cert.id}`}
                    >
                      {/* LEFT ACCENT STRIP */}
                      <div
                        className={`absolute left-0 top-0 h-full w-1 ${
                          isMicrosoft ? "bg-blue-500" : "bg-green-500"
                        }`}
                      />

                      <div className="flex items-start gap-4 pl-2">
                        {/* ICON */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                            isMicrosoft
                              ? "bg-blue-500/10 text-blue-500"
                              : "bg-green-500/10 text-green-500"
                          }`}
                        >
                          {isMicrosoft ? (
                            <Cloud className="h-5 w-5" />
                          ) : (
                            <CheckCircle className="h-5 w-5" />
                          )}
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-semibold text-sm mb-1">
                                {cert.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {cert.issuer}
                              </p>
                            </div>

                            {cert.exam && (
                              <Badge
                                className="
                                  font-mono text-xs
                                  bg-primary/10 text-primary
                                  border border-primary/20
                                  shrink-0
                                "
                              >
                                {cert.exam}
                              </Badge>
                            )}
                          </div>

                          {cert.date && (
                            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>Earned: {cert.date}</span>
                            </div>
                          )}

                          {cert.credentialId && (
                            <div className="mt-3 flex items-center gap-2 text-xs font-mono">
                              <span className="text-muted-foreground">
                                ID: {cert.credentialId}
                              </span>
                              <span className="ml-auto text-primary font-semibold">
                                Verified
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
