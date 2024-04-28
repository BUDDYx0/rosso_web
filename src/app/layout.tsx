import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalFooter from './components/GlobalFooter'
import GlobalNavigation from "@/app/components/GlobalNavigation";

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
    themeColor: "#e11d48",
};

export const metadata: Metadata = {
  title: 'Solace - International Server'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">
      <body className={inter.className}>
      <main className={'bg-[#010202]'}>
          <GlobalNavigation/>
          {children}
          <GlobalFooter/>
      </main>
      </body>
    </html>
  )
}