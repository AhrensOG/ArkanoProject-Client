import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtMdCard from "../components/typeCloth/cards/TShirtMdCard";

export default function Corte() {
  const [nav, setNav] = useState(false);
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
            <TShirtMdCard />
            <TShirtMdCard />
            <TShirtMdCard />
          </Carousel>
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers redirectFirstButton="" />
        </div>
      </div>
    </>
  );
}
