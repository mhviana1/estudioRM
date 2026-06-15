import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentoria Individual de Fotografia — Estúdio RM',
  description:
    'Acelere anos de aprendizado na fotografia com o direcionamento estratégico e personalizado da fotógrafa Rebeca Moura. Defina o seu momento, domine a iluminação, edição e aumente suas vendas.',
}

export default function MentoriaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
