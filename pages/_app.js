import '../styles/globals.css'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-roboto`}>
      <Component {...pageProps} />
    </main>
  )
}
