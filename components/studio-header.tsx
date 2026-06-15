import Image from "next/image"

export function StudioHeader() {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {/* Container da foto de perfil */}
      <div className="relative flex size-32 items-center justify-center rounded-full border border-border bg-card shadow-sm overflow-hidden">
        <Image 
          src="/images/fotoPerfil.jpeg" // Altere aqui para o caminho da sua foto, ex: "/avatar.jpg"
          alt="Foto de perfil"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground text-balance">
          Estúdio de Fotografia
        </h1>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
          Ensaios autorais, mentorias e workshops para quem ama fotografia.
        </p>
      </div>
    </header>
  )
}

