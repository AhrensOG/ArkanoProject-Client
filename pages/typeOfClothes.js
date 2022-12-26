
import { useState } from 'react';
import Head from 'next/head'
import LandingPage from '../components/LandingPage/LandingPage';
import NavBar from '../components/Navbar/NavBar';
import InitialButtons from "../components/buttons/InitialsButtons"
import SideBar from '../components/Navbar/SideBar';

export default function TypeClothes() {
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
            <NavBar nav={nav} setNav={setNav} state={"select"} />
            <SideBar nav={nav} setNav={setNav}/>
            <LandingPage/>
            <InitialButtons/>
            Akui va la prenduski kpe3333
        </div>
    </>
    );
};
