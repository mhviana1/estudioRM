import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-12 text-foreground">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-65 pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] opacity-65 pointer-events-none -z-10" />

      <div className="flex max-w-md flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="space-y-4">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-accent">
            Home
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-wide text-foreground">
            Estúdio <span className="italic font-medium text-accent">RM</span>
          </h1>
          <div className="w-12 h-px bg-primary/30 mx-auto mt-6" />
          <p className="font-sans text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-sm">
            Bem-vindo ao espaço do Estúdio Rebeca Moura. Em breve, nosso novo site institucional estará no ar.
          </p>
        </div>

        {/* Links quick navigation */}
        <Link
          href="/links"
          className="group flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-6 py-3 font-sans text-sm font-medium text-foreground transition-all duration-300 hover:scale-105 hover:bg-card hover:border-primary/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Acessar links úteis
          <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </Link>
      </div>

      <footer className="absolute bottom-6 font-sans text-[10px] tracking-wider uppercase text-muted-foreground/60">
        © {new Date().getFullYear()} Estúdio RM • Todos os direitos reservados.
      </footer>
    </main>
  )
}
