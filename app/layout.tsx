import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oscar - Assistant IA Coach Digital',
  description: 'Votre assistant IA personnel pour la gestion de cabinet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
