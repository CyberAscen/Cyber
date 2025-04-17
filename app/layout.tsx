import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: 'Cyber Ascension',
  description: 'Utilize NFTs to achieve eternal, tamper-proof storage of consciousness data, drive digital life with computing power, and enable physical form through robotics.',
  generator: 'CAT (Cyber Ascension Technology)',
  applicationName: 'Cyber Ascension',
  keywords: [
    'Cyber Ascension',
    'NFTs',
    'Consciousness',
    'Digital Life',
    'Robotics',
    'Blockchain',
    'Decentralized Storage',
    'Artificial Intelligence'
  ],
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <html lang="en">
    <head>
      <title>Cyber Ascension</title>
      <meta
        name="description"
        content="Utilize NFTs to achieve eternal, tamper-proof storage of consciousness data, drive digital life with computing power, and enable physical form through robotics."
      />
    </head>
    <body className={`${inter.className} bg-black`}>
    <ContextProvider cookies={null}>{children}</ContextProvider>
    </body>
    </html>
  )
}


import './globals.css'
import ContextProvider from "./providers"
 
