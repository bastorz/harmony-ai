import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, auth } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harmony AI',
  description: 'You have never been closer to the real world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
     <ClerkProvider> 
        <html lang="en">
            <CrispProvider/> 
            <body className={inter.className}>
              <ModalProvider/>
              <ToasterProvider/>
              {children}
            </body>
        </html>
      </ClerkProvider>
  )
}
