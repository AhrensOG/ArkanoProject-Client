import Head from 'next/head'
import { useState } from 'react'
import NavBar from '../components/Navbar/NavBar'
import SideBar from '../components/Navbar/SideBar'
import ControlsDesign from '../components/controlsDesignToolBar/ControlsDesign'
import DeleteButton from '../components/buttons/DeleteButton'
import InitialsButtons from '../components/buttons/InitialsButtons'
import DirectionButtonsControllers from '../components/buttons/DirectionButtonsControllers'

export default function Home() {
  const [nav, setNav] = useState(false)
  return (
    <>
      <Head>
        <title>Arkano</title>
        <meta name="description" content="Arkano Indumentary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar nav={nav} setNav={setNav}/>
        <SideBar nav={nav} setNav={setNav}/>
        <ControlsDesign/>
        <DeleteButton/>
        <InitialsButtons/>
        <InitialsButtons initial={true}/>
        <DirectionButtonsControllers goHome={true}/>
      </div>
    </>
  )
}