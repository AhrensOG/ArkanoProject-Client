import '../styles/globals.css'

import { Roboto } from '@next/font/google'
// import NavBar from '../components/Navbar/NavBar'
import SideBar from '../components/Navbar/SideBar'
import { useState } from 'react'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-roboto`}>
      {/* <NavBar nav={nav} setNav={setNav} state={"welcome"}/> */}
      <SideBar nav={nav} setNav={setNav}/>
      <Component {...pageProps} />
    </main>
  )
}
