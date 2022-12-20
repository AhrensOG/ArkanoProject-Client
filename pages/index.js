import Head from 'next/head';
import { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/Navbar/SideBar';
import ControlBar from '../components/controlBar/ControlBar.jsx';
import AddButton from '../components/cardButtons/AddButton.jsx';
import ReverseButton from '../components/cardButtons/ReverseButton.jsx';


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
        <ControlBar/>
        <AddButton/>
        <ReverseButton/>
      </div>
    </>
  );
};
