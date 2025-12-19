import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aolayemi Abimbola Faruq | LIS Professional",
  description:
    "Professional portfolio of Aolayemi Abimbola Faruq - Library and Information Science student at the University of Ilorin, specializing in information management, digital literacy, and research support.",
  keywords: [
    "Library Science",
    "Information Science",
    "LIS",
    "University of Ilorin",
    "Aolayemi Abimbola Faruq",
    "Information Management",
  ],
  authors: [{ name: "Aolayemi Abimbola Faruq" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
