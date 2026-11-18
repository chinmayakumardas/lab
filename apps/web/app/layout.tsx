import { Geist, Geist_Mono, Inter } from "next/font/google"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ApplicationShell1 } from "@/components/application-shell1"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <ApplicationShell1>{children}</ApplicationShell1>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
