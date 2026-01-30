import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/lib/portfolio-data";
import {
  Server,
  Database,
  Cloud,
  Wrench,
  Palette,
} from "lucide-react";
import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAmazon,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { useInView } from "framer-motion";

/* ------------------ CATEGORY CONFIG ------------------ */
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Palette,
    skills: portfolioData.skills.frontend,
    colorClass: "bg-primary/10",
    iconColorClass: "text-primary",
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: portfolioData.skills.backend,
    colorClass: "bg-accent/10",
    iconColorClass: "text-accent",
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: portfolioData.skills.database,
    colorClass: "bg-primary/10",
    iconColorClass: "text-primary",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: portfolioData.skills.cloud,
    colorClass: "bg-accent/10",
    iconColorClass: "text-accent",
  },
  {
    id: "tools",
    title: "Tools & Methods",
    icon: Wrench,
    skills: portfolioData.skills.tools,
    colorClass: "bg-primary/10",
    iconColorClass: "text-primary",
  },
];

/* ------------------ ICON MAP ------------------ */
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Angular: SiAngular,
  "React JS": SiReact,
  JavaScript: SiJavascript,
  "HTML/CSS/SCSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Spring Boot": SiSpring,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  AWS: SiAmazon,
  Firebase: SiFirebase,
  Git: SiGit,
};

export function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [progressValues, setProgressValues] = useState<Record<string, number>>(
    {}
  );

  /* ------------------ SLOW FIRST-TIME ANIMATION ------------------ */
  useEffect(() => {
    if (!isInView) return;

    const targetValues: Record<string, number> = {};
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        targetValues[skill.name] = skill.level;
      });
    });

    // Start everything at 0
    let currentValues: Record<string, number> = {};
    Object.keys(targetValues).forEach((key) => {
      currentValues[key] = 0;
    });

    setProgressValues(currentValues);

    const interval = setInterval(() => {
      let completed = true;
      const updatedValues: Record<string, number> = { ...currentValues };

      Object.keys(targetValues).forEach((key) => {
        if (updatedValues[key] < targetValues[key]) {
          updatedValues[key] += 1; // 👈 slow & smooth
          completed = false;
        }
      });

      currentValues = updatedValues;
      setProgressValues(updatedValues);

      if (completed) {
        clearInterval(interval);
      }
    }, 20); // 👈 higher = slower, lower = faster

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 bg-muted/30"
      data-testid="section-skills"
    >
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-mono">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              className="p-6 hover-elevate"
              data-testid={`card-skills-${category.id}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-md ${category.colorClass} flex items-center justify-center`}
                >
                  <category.icon
                    className={`h-5 w-5 ${category.iconColorClass}`}
                  />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = techIcons[skill.name];
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {Icon && (
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {progressValues[skill.name] ?? 0}%
                        </span>
                      </div>

                      <Progress
                        value={progressValues[skill.name] ?? 0}
                        className="h-2 transition-all duration-700"
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* ALSO EXPERIENCED WITH */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Also experienced with
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SCSS",
              "REST APIs",
              "Microservices",
              "Spring Security",
              "S3 Bucket",
              "Jira",
              "Agile",
              "Scrum",
            ].map((item) => (
              <Badge
                key={item}
                className="
                  font-mono text-xs
                  bg-primary/10 text-primary
                  border border-primary/20
                  hover:bg-primary/20
                  dark:bg-primary/20 dark:border-primary/30
                  transition-colors
                "
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
