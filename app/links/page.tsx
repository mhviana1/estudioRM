import { ArrowRight } from "lucide-react"
import { StudioHeader } from "@/components/studio-header"
import { BannerLink } from "@/components/banner-link"

// Substitua pelos links reais do estúdio
const WHATSAPP_URL =
  "https://wa.me/5561981926287?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20ensaio."
const PORTFOLIO_URL = "https://www.estudiorebecamoura.com.br/"
const MENTORIA_URL = "https://academy.estudiorm.com.br/mentoria"
const WORKSHOP_URL = "https://academy.estudiorm.com.br/workshop/newborn-bsb"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-5 py-12 text-foreground sm:py-16">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-10">
        <StudioHeader />

        {/* TOPO — Clientes de ensaio (CTA principal para WhatsApp) */}
        <section aria-labelledby="ensaios-heading" className="w-full">
          <h2 id="ensaios-heading" className="sr-only">
            Orçamentos de ensaios
          </h2>
          <BannerLink
            href={WHATSAPP_URL}
            external
            src="/images/1banner_whatsApp.jpg"
            alt="Orçamentos de ensaios: gestante, feminino e newborn. Fale pelo WhatsApp."
            label="Solicitar orçamento de ensaio pelo WhatsApp"
          />
        
        </section>

        {/* MEIO — Institucional (link minimalista) */}
        {/*
        <section aria-labelledby="portfolio-heading" className="w-full">
          <h2 id="portfolio-heading" className="sr-only">
            Portfólio
          </h2>
          <a
            href={PORTFOLIO_URL}
            className="group flex items-center justify-center gap-2 border-y border-border py-5 font-serif text-lg italic text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Conhecer nosso portfólio completo
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </section> 
        
        */}


        {/* RODAPÉ — Para fotógrafos (seção solta) */}
        <section
          aria-labelledby="fotografos-heading"
          className="flex w-full flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Para fotógrafos
            </span>
            <h2
              id="fotografos-heading"
              className="font-serif text-xl font-semibold text-foreground"
            >
              Aprenda com a gente
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <BannerLink
              href={WORKSHOP_URL}
              external
              src="/images/2banner_workshopNewborn.webp"
              alt="Workshop presencial: fotografia de newborn em estúdio, edição e vendas."
              label="Verificar a próxima data do workshop presencial"
            />

            <BannerLink
              href={MENTORIA_URL}
              external
              src="/images/3banner_mentoriaIndividual.webp"
              alt="Mentorias individuais: luz, direção de poses, vendas e edição."
              label="Conhecer as mentorias individuais"
            />
            
          </div>
        </section>

        <footer className="pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Estúdio de Fotografia. Todos os direitos
          reservados.
        </footer>
      </div>
    </main>
  )
}
