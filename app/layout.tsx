import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { BackgroundPaths } from '@/components/ui/floating-paths'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Ricardo Félix Morais - Medical Doctor & AI Engineer',
  description:
    'Medical Doctor and AI Engineer focusing on exploring synergies between the Human Brain and Artificial Intelligence. Specializing in neuroradiology, brain-computer interfaces, and neural correlates of consciousness.',
  keywords: [
    'Ricardo Félix Morais',
    'Medical Doctor',
    'AI Engineer', 
    'Neuroradiology',
    'Brain Computer Interface',
    'Artificial Intelligence',
    'Neuroscience',
    'Machine Learning',
    'Harvard Medical School',
    'Porto Portugal',
    'Neural Networks',
    'Consciousness AI'
  ],
  authors: [{ name: 'Ricardo Félix Morais', url: 'https://ricardofelixmorais.com' }],
  creator: 'Ricardo Félix Morais',
  publisher: 'Ricardo Félix Morais',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ricardofelixmorais.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ricardo Félix Morais - Medical Doctor & AI Engineer',
    description: 'Medical Doctor and AI Engineer focusing on exploring synergies between the Human Brain and Artificial Intelligence.',
    url: 'https://ricardofelixmorais.com',
    siteName: 'Ricardo Félix Morais',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ricardo Félix Morais - Medical Doctor & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo Félix Morais - Medical Doctor & AI Engineer',
    description: 'Medical Doctor and AI Engineer focusing on exploring synergies between the Human Brain and Artificial Intelligence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ricardo Félix Morais",
              "jobTitle": ["Medical Doctor", "AI Engineer"],
              "description": "Medical Doctor and AI Engineer focusing on exploring synergies between the Human Brain and Artificial Intelligence",
              "url": "https://ricardofelixmorais.com",
              "email": "ricardofelixmorais@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/ricardofelixmorais"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Hospital Boa Nova Trofa Saúde"
                },
                {
                  "@type": "Organization", 
                  "name": "Centro Hospitalar Universitário São João"
                }
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "Harvard Medical School"
                },
                {
                  "@type": "Organization",
                  "name": "Universidade de Coimbra"
                }
              ],
              "knowsAbout": [
                "Neuroradiology",
                "Artificial Intelligence",
                "Brain Computer Interface",
                "Neural Networks",
                "Machine Learning",
                "Neuroscience"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} tracking-tight antialiased bg-white dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <BackgroundPaths />
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-6 pt-10">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
