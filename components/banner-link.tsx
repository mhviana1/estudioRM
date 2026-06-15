import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface BannerLinkProps {
  href: string
  src: string
  alt: string
  label: string
  external?: boolean
}

export function BannerLink({ href, src, alt, label, external }: BannerLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="relative aspect-[1920/640] w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <span className="pointer-events-none absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-card/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </a>
  )
}
