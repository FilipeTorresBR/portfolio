"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="flex justify-center py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse gap-8 md:gap-12 lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <motion.h1
                className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Olá, eu sou <span className="text-primary">Filipe Torres</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Desenvolvedor Web Full Stack
              </motion.p>
            </div>
            <motion.p
              className="max-w-[600px] text-muted-foreground text-base md:text-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Criando experiências digitais inovadoras e soluções web de alta performance.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#projetos">
                  Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#contato">Entre em Contato</Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 mt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="https://github.com/filipetorresbr" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/filipe-kaue" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:filipekaue@protonmail.com">
                <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-11 sm:w-11">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              className="relative aspect-square overflow-hidden rounded-full border bg-muted w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:h-auto max-w-[400px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/profile_pic.jpg"
                alt="Foto de perfil"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

