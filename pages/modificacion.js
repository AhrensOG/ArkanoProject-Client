
import { useState } from 'react';
import Head from 'next/head'
import LandingPage from '../components/LandingPage/LandingPage';
import NavBar from '../components/Navbar/NavBar';
import DirectionButtonsControllers from '../components/buttons/DirectionButtonsControllers';

export default function Ending() {
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
            <NavBar nav={nav} setNav={setNav} state={"creation"} />
            <LandingPage/>
            <DirectionButtonsControllers/>
            HORA DE MODIFICAAAAAAAAR
        </div>
    </>
    );
};
