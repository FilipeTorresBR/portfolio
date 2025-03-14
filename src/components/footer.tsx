import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Frame } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 flex justify-center">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 ">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Desenvolvido por Filipe Torres
        </p>
      </div>
    </footer>
  )
}

