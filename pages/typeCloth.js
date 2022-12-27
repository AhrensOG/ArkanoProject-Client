import { Carousel } from 'flowbite-react';
import Head from 'next/head'
import { useState } from 'react';
import DirectionButtonsControllers from '../components/buttons/DirectionButtonsControllers';
import NavBar from '../components/Navbar/NavBar';
import SideBar from '../components/Navbar/SideBar';
import Card from '../components/typeCloth/Card';

const TypeCloth = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <Head>
        <title>Arkano</title>
        <meta name="description" content="Arkano Indumentary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col h-full'>
        <div className='basis-[5%]'>
          <NavBar nav={nav} setNav={setNav} title={'MUCHAS GRACIAS'}/>
          <SideBar nav={nav} setNav={setNav}/>
        </div>
        <div className='basis-[90%]'>
          <Carousel slide={false}>
            <Card/>
            <Card/>
            <Card/>
          </Carousel>
        </div>
        <div className='basis-[5%]'>
          <DirectionButtonsControllers redirectFirstButton=''/>
        </div>
      </div>
    </>
  )
}

export default TypeCloth