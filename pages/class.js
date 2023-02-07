import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import { useDispatch, useSelector } from "../context/hooks";
import { updateClassClothes } from "../context/Actions/clothes";
import Bank from "../components/svgBank/SvgBank";


export default function ClassClothes() {
  const [nav, setNav] = useState(false);

  const state = useSelector(state => state);
  const clothes = useSelector(state => state.clothes);

  const dispatch = useDispatch();

  const cutClothes = clothes.cut,
    viewClothes = 'frontal';

  const CAROUSEL_CLASS_CONTAINER_REF = useRef();

  const handleUpdateClassClothes = () => {
    const classClothes = CAROUSEL_CLASS_CONTAINER_REF.current
      .querySelector('[data-active="true"]')
      .getElementsByClassName('classClothes')[0].id;
    dispatch(updateClassClothes({ classClothes }));
  };

  // useEffect(() => {
  //   console.log({ state, file: './pages/class' });
  // }, [state]);

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
        <div className="basis-[90%]" ref={CAROUSEL_CLASS_CONTAINER_REF}>
          <Bank
            cutClothes={cutClothes} 
            viewClothes={viewClothes} 
            inCarousel={true} 
          />
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers callback={handleUpdateClassClothes} />
        </div>
      </div>
    </>
  );
};
