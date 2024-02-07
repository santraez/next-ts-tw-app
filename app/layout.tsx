import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { Provider } from '@/lib/provider'
import './globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'NEXT-TS-TW-APP',
  description: 'next-ts-tw-app template'
}

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <Provider>
        <body className={ubuntu.className}>
          {children}
        </body>
      </Provider>
    </html>
  )
}
