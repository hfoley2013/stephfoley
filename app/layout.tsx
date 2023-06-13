import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steph Foley | Leader in Tech',
  description: 'Stephiney Foley is a Technical Product Manager helping entrepreneurs build their business online.',
  image: '/steph_headshot.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
