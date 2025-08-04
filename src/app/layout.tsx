import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <main className='flex items-center justify-center min-h-screen bg-gray-100 px-4 py-6 sm:px-6 box-border'>
          <div className='w-full max-w-6xl mx-auto px-4 py-8'>
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  )
}
