import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Providers from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('text-slate-900 antialiased font-mono', inter.className)}>
      <body className='h-screen bg-slate-50 dark:bg-slate-900 antialiased overflow-hidden'>
        <h1>Hello World</h1>
        <Providers>
            { /* @ts-expect-error: Server Component */}
            <Navbar />
        </Providers>
      </body>
    </html>
  )
}
