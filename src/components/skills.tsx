"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layers, Palette, Server, Smartphone, Terminal, Wand2 } from "lucide-react"

export function SkillsSection() {
  const frontendSkills = [
    { name: "HTML5", icon: <Code className="h-5 w-5" /> },
    { name: "CSS3", icon: <Palette className="h-5 w-5" /> },
    { name: "JavaScript", icon: <Globe className="h-5 w-5" /> },
    { name: "React", icon: <Layers className="h-5 w-5" /> },
    { name: "Next.js", icon: <Wand2 className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" /> },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <Server className="h-5 w-5" /> },
    { name: "Django", icon: <Server className="h-5 w-5" /> },    
    { name: "Express", icon: <Terminal className="h-5 w-5" /> },
    { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
    { name: "REST API", icon: <Globe className="h-5 w-5" /> },
  ]

  const otherSkills = [
    { name: "Git", icon: <Terminal className="h-5 w-5" /> },
    { name: "Docker", icon: <Layers className="h-5 w-5" /> },
    { name: "Linux", icon: <Terminal className="h-5 w-5" /> },
    { name: "Responsive Design", icon: <Smartphone className="h-5 w-5" /> },
  ]

  return (
    <section id="habilidades" className="py-20 flex justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="px-3 py-1">
            Habilidades
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Minhas Competências</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tecnologias e ferramentas que utilizo para criar soluções web modernas e eficientes.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-center">Front-end</h3>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {frontendSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <div className="text-primary">{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-center">Back-end</h3>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {backendSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <div className="text-primary">{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-center">Outras Habilidades</h3>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {otherSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <div className="text-primary">{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

