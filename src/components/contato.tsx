"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
//import { toast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("E-mail enviado com sucesso!");
        setForm({ name: "", email: "", subject: "" });
      } else {
        setMessage(data.error || "Erro ao enviar e-mail.");
      }
    } catch (error) {
      setMessage("Erro inesperado ao enviar e-mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="flex justify-center py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="px-3 py-1">
            Contato
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Conversar</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo.
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
            <h3 className="text-2xl font-bold">Informações de Contato</h3>
            <p className="text-muted-foreground">
              Estou disponível para projetos freelance, oportunidades de emprego ou apenas para trocar ideias sobre
              desenvolvimento web.
            </p>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">filipekaue@protonmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="text-sm text-muted-foreground">(94) 99666-0884</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Localização</h4>
                    <p className="text-sm text-muted-foreground">Pará, Brasil</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/filipetorresbr" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/filipe-kaue" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:filipekaue@protonmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" name="name" placeholder="Seu nome" value={form.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="seu-email@exemplo.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" name="subject" placeholder="Assunto da mensagem" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </>
                )}
              </Button>
              {message && <p className="mt-4 text-center">{message}</p>}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

