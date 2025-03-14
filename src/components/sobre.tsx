"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="flex justify-center py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="px-3 py-1">
            Sobre Mim
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Minha Jornada</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Conheça um pouco sobre minha trajetória profissional e pessoal no mundo do desenvolvimento web.
          </p>
        </motion.div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold">Quem Sou</h3>
            <p className="text-muted-foreground">
            Graduando em Engenharia de Computação pela Universidade Federal do Pará, atualmente no 9º semestre. Sou apaixonado por tecnologia e estou focado em me especializar na área de desenvolvimento web, buscando sempre aprender e aplicar novos conhecimentos.
            Estou em busca de uma oportunidade de estágio onde eu possa contribuir com meu conhecimento e continuar crescendo profissionalmente.
            </p>
            <p className="text-muted-foreground">
              Meu objetivo é desenvolver aplicações web que não apenas atendam às necessidades dos usuários, mas também
              proporcionem experiências memoráveis e intuitivas.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Experiência & Educação</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex gap-4">
                  <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Bacharelado em Engenharia de Computação</h4>
                    <p className="text-sm text-muted-foreground">Universidade Federal do Pará • 2020 - Presente</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex gap-4">
                  <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Técnico em Manutenção e Suporte em Informática</h4>
                    <p className="text-sm text-muted-foreground">Instituto Federal do Pará • 2017 - 2020</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

