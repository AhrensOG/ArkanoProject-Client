import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtMdCard from "../components/typeCloth/cards/TShirtMdCard";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";

export default function TypeClothes() {
  const [nav, setNav] = useState(false);
  const [flag, setflag] = useState(false)

  // useEffect(() => {
  //   setflag(false)
  //   const filterTypeClothes = () => {
  //     const elements = document.getElementsByClassName('w-full flex-shrink-0 transform cursor-grab snap-center')
  //     const elementsArray = Object.values(elements);
  //     for (let i = 0; i < elementsArray?.length; i++) {
  //       console.log(elementsArray[i].getAttribute('data-active'))
        
  //     }
  //   }
  //   filterTypeClothes()
  // }, [flag])

  return (
    <>
      <Head>
        <title>Arkano</title>
        <meta name="description" content="Arkano Indumentary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full">
        <div className="basis-[5%]">
          <NavBar nav={nav} setNav={setNav} state={'select'} />
          <SideBar nav={nav} setNav={setNav} />
        </div>
        <div className="basis-[90%]">
          <Carousel indicators={false} slide={false}>
            <TShirtMdCard />
            <TShirtMdCard />
            <TShirtMdCard />
          </Carousel>          
        </div>
        {/* <div>
          
        <h1 onClick={() => setflag(true)} className="cursor-pointer ">SELECCIONAR</h1>
        </div> */}
        <div className="basis-[5%]">
          <DirectionButtonsControllers redirectFirstButton="" />
        </div>
      </div>
    </>
  );
}
