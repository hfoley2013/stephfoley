import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/general/NavBar'
import Footer from '@/components/general/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.stephfoley.com'),
  title: {
    default: 'Steph Foley | Leader in Tech',
    template: `Steph Foley | %s`,
  },
  description: 'Stephiney Foley is a Technical Product Manager helping entrepreneurs build their business online.',
  image: '/steph_headshot.png',
  themeColor: '#ffffff',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Steph Foley | Leader in Tech',
    description: 'Stephiney Foley is a Technical Product Manager helping entrepreneurs build their business online.',
    url: 'https://stephfoley.com',
    siteName: 'StephFoley.com',
    images: [
      {
        url: '/steph_headshot.png',
        width: 800,
        height: 600,
        alt: 'Stephiney Foley is a Technical Product Manager helping entrepreneurs build their business online.',
      },
      {
        url: '/steph_headshot.png',
        width: 1800,
        height: 1600,
        alt: 'Stephiney Foley is a Technical Product Manager helping entrepreneurs build their business online.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-lightRouge`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
