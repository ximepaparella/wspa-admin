import '../../app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NavMenu} from '@/components/navMenu' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wspa Dashboard',
  description: 'Administre sus tratamientos de spa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-row p-2 w-full">
      <div className="flex-none w-2/12 h-14 p-4">
        <NavMenu/>
      </div>
      <div className="flex-initial w-10/12 p-4 border-slate-100">
      {children}
      </div>
    </main>
      </body>
    </html>
  )
}
