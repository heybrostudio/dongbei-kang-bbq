import { ConnectButtonProvider } from '@/components/connect-button-provider'
import { Header } from '@/components/header'
import { Nav } from '@/components/nav/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThirdwebProvider } from 'thirdweb/react'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Dongbei Kang BBQ',
  description: 'Welcome to Dongbei Kang BBQ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ThirdwebProvider>
            <main className="flex min-h-screen flex-col items-center">
              <Header>
                <div className="m-auto flex h-full max-w-5xl items-center justify-between">
                  <Nav />
                  <div className="hidden sm:block">
                    <ConnectButtonProvider />
                  </div>
                </div>
              </Header>
              <div className="w-full flex-1">{children}</div>
            </main>
            <Toaster />
          </ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
