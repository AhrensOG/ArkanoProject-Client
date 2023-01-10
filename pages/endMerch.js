import { useEffect, useState } from 'react';
import Head from 'next/head'
import EndingPage from '../components/EndingPage/EndingPage';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/Navbar/SideBar';
import { useSelector } from '../context/hooks';


export default function EndMerch() {
    const [nav, setNav] = useState(false)

    const clothes = useSelector(state => state.clothes);

    // useEffect(() => {
    //     console.log(clothes);
    // });

return (
    <>
        <Head>
            <title>Arkano</title>
            <meta name="description" content="Arkano Indumentary" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col h-full">
            <NavBar nav={nav} setNav={setNav} />
            <SideBar nav={nav} setNav={setNav}/>
            <EndingPage/>
        </div>
    </>
    );
};
