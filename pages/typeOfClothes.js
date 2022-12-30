import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtCard from "../components/typeCloth/cards/TShirtCard";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";


export default function TypeClothes() {
  const [nav, setNav] = useState(false);

  const updateTypeOfClothes = () => {
    let y = null;
    const x = document.getElementsByClassName('theCarousel')[0].childNodes[0].childNodes[0].childNodes.forEach(e => {
      if (e.attributes[1].value === 'true') {
        y = e.childNodes[0].childNodes[0].id;
      };
    });
    console.log(y);
  };

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
        <div className="basis-[90%] theCarousel">
          <Carousel indicators={false} slide={false}>
            <TShirtCard id="REMERA 1" width={250} />
            <TShirtCard id="REMERA 2" width={250} />
            <TShirtCard id="REMERA 3" width={250} />
          </Carousel>          
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers callback={updateTypeOfClothes} />
        </div>
      </div>
    </>
  );
};
