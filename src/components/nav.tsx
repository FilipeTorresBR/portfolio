"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-end">
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#habilidades" className="text-sm font-medium hover:text-primary transition-colors">
            Habilidades
          </Link>
          <Link href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </Link>
          <Button>
            <Link href="/Filipe_Kaue_Torres_Soares.pdf" target="_blank" className="text-sm font-medium transition-colors">
              Veja meu CV
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="#inicio"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#sobre"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#habilidades"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Habilidades
              </Link>
              <Link
                href="#projetos"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="#contato"
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button className="mt-2">
                <Link href="/Filipe_Kaue_Torres_Soares.pdf" target="_blank" className="py-2 text-sm font-medium transition-colors">
                  Veja meu CV
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

