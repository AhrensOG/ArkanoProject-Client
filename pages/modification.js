import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import TShirtCard from "../components/typeCloth/cards/TShirtCard";
import ControlsDesign from "../components/controlsDesignToolBar/ControlsDesign";
import ControlBar from '../components/controlBar/ControlBar';
import { useSelector } from '../context/hooks';


export default function Modification() {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const clothes = useSelector(state => state.clothes);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    router.push('/endMerch');
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
          <NavBar nav={nav} setNav={setNav} state={"creation"} />
          <SideBar nav={nav} setNav={setNav} />
        </div>
        <div>
          <ControlBar handleBack={handleBack} handleSave={handleSave}/>
        </div>
        <div className="basis-[90%]">
          <TShirtCard id={clothes.class} width={250} clothes={clothes} />
        </div>
        <div className="basis-[5%]">
          <ControlsDesign/>
        </div>
      </div>
    </>
  );
};
