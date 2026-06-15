"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Send, Sparkles, PhoneCall } from "lucide-react"

const FOCUS_AREAS = [
  { id: "edicao", label: "Edição de Imagens e Fluxo de Trabalho (Photoshop/Lightroom)" },
  { id: "iluminacao", label: "Iluminação (Luz Natural, Estúdio, Flash/Led)" },
  { id: "poses", label: "Direção de Poses e Conexão com o Cliente" },
  { id: "vendas", label: "Vendas, Atendimento e Prospecção de Clientes" },
  { id: "posicionamento", label: "Posicionamento de Marca e Redes Sociais" },
  { id: "gestao", label: "Precificação e Organização Financeira/Negócio" },
]

export default function MentoriaPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    instagram: "",
    experience: "",
    selectedAreas: [] as string[],
    goals: "",
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleAreaToggle = (areaId: string) => {
    setFormData(prev => {
      const alreadySelected = prev.selectedAreas.includes(areaId)
      const newAreas = alreadySelected
        ? prev.selectedAreas.filter(id => id !== areaId)
        : [...prev.selectedAreas, areaId]
      return { ...prev, selectedAreas: newAreas }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    // Basic Validation
    if (!formData.name.trim()) {
      setValidationError("Por favor, preencha o seu nome completo.")
      return
    }
    if (!formData.whatsapp.trim()) {
      setValidationError("Por favor, informe o seu WhatsApp para contato.")
      return
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Por favor, informe um email válido.")
      return
    }
    if (!formData.experience) {
      setValidationError("Por favor, selecione o seu tempo de experiência.")
      return
    }

    setSubmitting(true)

    // Simulate submission to API / LocalStorage persistence
    setTimeout(() => {
      try {
        const savedSubmissions = JSON.parse(localStorage.getItem("mentoria_candidaturas") || "[]")
        savedSubmissions.push({
          ...formData,
          date: new Date().toISOString(),
        })
        localStorage.setItem("mentoria_candidaturas", JSON.stringify(savedSubmissions))
      } catch (err) {
        console.error("Falha ao salvar candidatura localmente:", err)
      }

      setSubmitting(false)
      setSuccess(true)
    }, 1500)
  }

  // Generate WhatsApp message URL for direct checkout/anticipation
  const getWhatsAppMessageUrl = () => {
    const formattedPhone = "5561981926287"
    const text = encodeURIComponent(
      `Olá Rebeca! Acabei de enviar minha aplicação para a Mentoria Individual.\n\n` +
      `👤 Nome: ${formData.name}\n` +
      `📱 WhatsApp: ${formData.whatsapp}\n` +
      `📸 Instagram: ${formData.instagram}\n` +
      `💡 Áreas de Foco: ${formData.selectedAreas.map(a => FOCUS_AREAS.find(f => f.id === a)?.label || a).join(", ")}`
    )
    return `https://wa.me/${formattedPhone}?text=${text}`
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Glow Blobs Decorativos */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-60 pointer-events-none -z-10 animate-pulse duration-[6000ms]" />
      <div className="absolute top-[40%] right-[-15%] w-[60%] h-[55%] bg-accent/10 rounded-full blur-[130px] opacity-50 pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />

      {/* Menu / Header Fixo Minimalista (Glassmorphism) */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Link href="/links" className="font-serif text-lg font-light tracking-wide text-foreground">
            Estúdio <span className="italic font-medium text-accent">RM</span>
          </Link>
          <Link
            href="#formulario"
            className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 font-sans text-xs font-semibold tracking-wider text-primary uppercase transition-all hover:bg-primary hover:text-primary-foreground duration-300"
          >
            Aplicar Agora
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        {/* Botão de Retorno */}
        <Link
          href="/links"
          className="group inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" />
          Voltar para Links
        </Link>

        {/* HERO SECTION */}
        <section className="text-center md:text-left mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase text-accent font-semibold block mb-4">
            Mentoria Individual & Personalizada
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] text-foreground mb-6">
            Encurte anos de erros na fotografia com uma <span className="italic text-accent font-medium">direção estratégica individual</span>
          </h1>
          <p className="font-sans text-base md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-8">
            Ter acesso direto a uma profissional que já superou as maiores dificuldades do mercado antecipa anos de aprendizado, poupando seu tempo, dinheiro e energia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#formulario"
              className="bg-primary text-primary-foreground font-sans font-semibold text-sm md:text-base tracking-wide uppercase px-8 py-4 rounded-full hover:bg-accent hover:scale-[1.03] transition-all duration-300 shadow-xl text-center"
            >
              Fazer Minha Aplicação
            </Link>
            <a
              href="#sobre"
              className="flex items-center justify-center gap-2 border border-border bg-card/40 backdrop-blur-sm px-8 py-4 rounded-full font-sans text-sm md:text-base font-semibold text-foreground transition-all duration-300 hover:bg-card hover:border-primary/30 text-center"
            >
              Saiba Mais
            </a>
          </div>
        </section>

        {/* SECTION: POR QUE A MENTORIA? */}
        <section id="sobre" className="grid md:grid-cols-2 gap-12 items-stretch py-12 border-t border-border/40 mb-16 md:mb-24">
          <div className="flex flex-col justify-center gap-6">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-accent font-semibold">
              O Atalho Inteligente
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
              Por que aprender sozinho se você pode ter o mapa pronto?
            </h2>
            <p className="font-sans text-base text-muted-foreground font-light leading-relaxed">
              Muitos fotógrafos passam anos lutando com edição de pele inconsistente, fotos sem nitidez, iluminação sem graça ou a constante falta de clientes.
            </p>
            <p className="font-sans text-base text-muted-foreground font-light leading-relaxed">
              A mentoria individual com a <strong>Rebeca Moura</strong> é desenhada sob medida para o seu momento de carreira. Analisamos detalhadamente seus pontos fracos e criamos um plano prático para corrigi-los imediatamente.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/60 shadow-xl flex flex-col justify-between gap-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
            <h3 className="font-serif text-2xl font-medium text-foreground">O que iremos trabalhar:</h3>
            <ul className="space-y-4">
              {[
                "Correção cirúrgica do seu fluxo de edição e cores",
                "Domínio de iluminação (seja luz natural ou estúdio)",
                "Direção de poses fluida para ensaios femininos e newborn",
                "Estratégia de vendas e atendimento de alto padrão"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <Check className="size-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="w-full h-px bg-border/40" />
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-muted relative shrink-0 border border-border">
                {/* Imagem de perfil da Rebeca */}
                <img src="/images/fotoPerfil.jpeg" alt="Rebeca Moura" className="object-cover size-full" />
              </div>
              <div>
                <h4 className="font-serif text-base font-semibold text-foreground">Rebeca Moura</h4>
                <p className="text-xs text-muted-foreground">Fotógrafa e Mentora de Negócios Criativos</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION FORMULARIO */}
        <section id="formulario" className="py-12 border-t border-border/40 scroll-mt-20">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-accent font-semibold">
                Processo de Seleção
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground mt-2">
                Ficha de Diagnóstico
              </h2>
              <div className="w-16 h-px bg-primary/40 mx-auto mt-4" />
              <p className="font-sans text-sm md:text-base text-muted-foreground font-light mt-4 leading-relaxed">
                As vagas para mentoria individual são estritamente limitadas para garantir foco absoluto. Preencha os campos abaixo para que eu possa avaliar o seu perfil.
              </p>
            </div>

            {success ? (
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="size-8" />
                </div>
                <h3 className="font-serif text-3xl font-light text-foreground">
                  Candidatura Recebida!
                </h3>
                <p className="font-sans text-base text-muted-foreground font-light leading-relaxed max-w-md mx-auto">
                  Parabéns por dar este passo decisivo. Salvei suas respostas e irei analisá-las detalhadamente.
                </p>
                <div className="p-4 bg-muted rounded-2xl border border-border/40 max-w-sm mx-auto text-xs text-left space-y-2">
                  <span className="font-semibold block text-foreground uppercase tracking-wider text-[10px]">Resumo enviado:</span>
                  <p className="text-muted-foreground"><strong className="text-foreground">Nome:</strong> {formData.name}</p>
                  <p className="text-muted-foreground"><strong className="text-foreground">Dores selecionadas:</strong> {formData.selectedAreas.length > 0 ? formData.selectedAreas.map(a => FOCUS_AREAS.find(f => f.id === a)?.label.split(" (")[0]).join(", ") : "Nenhuma selecionada"}</p>
                </div>
                <div className="pt-4 flex flex-col gap-3 max-w-sm mx-auto">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide uppercase px-6 py-4 rounded-full hover:bg-accent hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="size-4 animate-bounce" />
                    Notificar Rebeca no WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSuccess(false)
                      setFormData({
                        name: "",
                        whatsapp: "",
                        email: "",
                        instagram: "",
                        experience: "",
                        selectedAreas: [],
                        goals: "",
                      })
                    }}
                    className="font-sans text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    Preencher novamente
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border border-border shadow-xl space-y-6 backdrop-blur-sm">
                
                {validationError && (
                  <div className="p-4 rounded-2xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 animate-in shake duration-300">
                    ⚠️ {validationError}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ex: Rebeca Moura"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsapp" className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      placeholder="Ex: (61) 98192-6287"
                      value={formData.whatsapp}
                      onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Ex: contato@estudiorm.com.br"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>

                  {/* Instagram */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="instagram" className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Instagram / Portfólio
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      placeholder="Ex: @rebecamourafoto"
                      value={formData.instagram}
                      onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                      className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Experiencia */}
                <div className="flex flex-col gap-3 border-t border-border/40 pt-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Tempo de Experiência na Fotografia *
                  </span>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { id: "iniciante", label: "Estou começando agora" },
                      { id: "intermediario", label: "Trabalho há 1 a 3 anos" },
                      { id: "avancado", label: "Trabalho há mais de 3 anos" },
                    ].map(exp => (
                      <button
                        type="button"
                        key={exp.id}
                        onClick={() => setFormData({ ...formData, experience: exp.id })}
                        className={`rounded-xl border p-4 text-center text-xs font-medium transition-all ${
                          formData.experience === exp.id
                            ? "border-primary bg-primary/15 text-primary shadow-sm"
                            : "border-border bg-background/40 text-muted-foreground hover:bg-background/80 hover:text-foreground"
                        }`}
                      >
                        {exp.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Areas de Foco */}
                <div className="flex flex-col gap-3 border-t border-border/40 pt-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Quais áreas você mais precisa destravar hoje? * (Selecione todas que aplicam)
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {FOCUS_AREAS.map(area => {
                      const isSelected = formData.selectedAreas.includes(area.id)
                      return (
                        <button
                          type="button"
                          key={area.id}
                          onClick={() => handleAreaToggle(area.id)}
                          className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-background/40 text-muted-foreground hover:bg-background/80 hover:text-foreground"
                          }`}
                        >
                          <div className={`flex size-4 shrink-0 items-center justify-center rounded-md border mt-0.5 transition-all ${
                            isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"
                          }`}>
                            {isSelected && <Check className="size-2.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium leading-tight">{area.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Objetivos */}
                <div className="flex flex-col gap-1.5 border-t border-border/40 pt-4">
                  <label htmlFor="goals" className="font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Fale um pouco sobre o seu momento atual e suas expectativas com a mentoria:
                  </label>
                  <textarea
                    id="goals"
                    rows={4}
                    placeholder="Quais são as suas maiores dificuldades e o que você espera conquistar com a mentoria?"
                    value={formData.goals}
                    onChange={e => setFormData({ ...formData, goals: e.target.value })}
                    className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all outline-none resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-full hover:bg-accent hover:scale-[1.02] active:scale-100 transition-all duration-300 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="size-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Enviar Minha Candidatura
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>

      <footer className="w-full border-t border-border/40 py-8 bg-card/20 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Estúdio de Fotografia Rebeca Moura. Todos os direitos reservados.
      </footer>
    </main>
  )
}
