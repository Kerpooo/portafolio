import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  openGraph: {
    title: "Kevin Rincon",
    description:
      "Kevin Rincon es un ingeniero de sistemas que desarrolla software con distintos lenguajes de programacion como javascript y python.",
    url: "https://www.kerpo.xyz/",
    siteName: "Kerpo",
    locale: "es_CO",
    alternateLocale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
