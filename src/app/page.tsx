import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/sobre"
import { SkillsSection } from "@/components/skills"
import { ProjectsSection } from "@/components/projetos"
import { ContactSection } from "@/components/contato"
import { Navbar } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background ">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

