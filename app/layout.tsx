import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils" // optional: utility for conditional classNames

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
