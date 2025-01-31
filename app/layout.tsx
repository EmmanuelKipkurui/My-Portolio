import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Kipkurui Ronoh - Portfolio",
    template: "%s | Emmanuel Kipkurui Ronoh",
  },
  description: "Network and IT professional portfolio of Emmanuel Kipkurui Ronoh",
  keywords: ["Network", "IT", "Cloud Computing", "Cybersecurity", "AWS", "CCNA"],
  authors: [{ name: "Emmanuel Kipkurui Ronoh" }],
  creator: "Emmanuel Kipkurui Ronoh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.emmanuelronoh.com",
    title: "Emmanuel Kipkurui Ronoh - Portfolio",
    description: "Network and IT professional portfolio of Emmanuel Kipkurui Ronoh",
    siteName: "Emmanuel Kipkurui Ronoh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Kipkurui Ronoh - Portfolio",
    description: "Network and IT professional portfolio of Emmanuel Kipkurui Ronoh",
    creator: "@emmanuelronoh",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`font-sans antialiased gradient-bg min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main id="page-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

