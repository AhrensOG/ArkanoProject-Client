import Head from 'next/head'
import EndingPage from '../components/EndingPage/EndingPage';
import NavBar from '../components/Navbar/NavBar';
import { useState } from 'react';
import SideBar from '../components/Navbar/SideBar';

export default function EndMerch() {

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
            <NavBar nav={nav} setNav={setNav} />
            <SideBarar nav={nav} setNav={setNav}/>

            <EndingPage/>
        </div>
    </>
    );
};
