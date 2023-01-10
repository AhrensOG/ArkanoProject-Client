import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtCard from "../components/typeCloth/cards/TShirtCard";
import { useSelector } from "../context/hooks";


export default function Corte() {
  const [nav, setNav] = useState(false);

  const clothes = useSelector(state => state.clothes);

  // useEffect(() => {
  //   console.log(clothes);
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
        <div className="basis-[5%]">
          <NavBar nav={nav} setNav={setNav} state={'cut'} />
          <SideBar nav={nav} setNav={setNav} />
        </div>
        <div className="basis-[90%]">
          <Carousel slide={false}>
            <TShirtCard id="REMERA 1" width={250} />
            <TShirtCard id="REMERA 2" width={250} />
            <TShirtCard id="REMERA 3" width={250} />
          </Carousel>
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers redirectFirstButton="" />
        </div>
      </div>
    </>
  );
}
