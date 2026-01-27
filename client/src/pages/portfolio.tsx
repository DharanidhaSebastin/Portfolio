import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen" data-testid="portfolio-page">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}