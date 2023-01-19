import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtCard from "../components/typeCloth/cards/TShirtCard";
import { useDispatch, useSelector } from "../context/hooks";
import { updateCutClothes } from "../context/Actions/clothes";


export default function Corte() {
  const [nav, setNav] = useState(false);

  const state = useSelector(state => state);

  useEffect(() => {
      console.log({ state, file: 'cut.js' });
  }, [state]);

  const clothes = useSelector(state => state.clothes);

  const dispatch = useDispatch();

  const updateCut = () => {
    const childrenOfTheCrousel = document.getElementsByClassName('theCarousel')[0].childNodes[0].childNodes[0].childNodes;
    childrenOfTheCrousel.forEach(child => {
      const childIsActive = child.attributes[1].value;
      if (childIsActive === 'true') {
        const cutClothes = child.childNodes[0].childNodes[0].id;
        dispatch(updateCutClothes({ cutClothes }));
      };
    });
  };

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
        <div className="basis-[90%] theCarousel">
          <Carousel slide={false}>
            <TShirtCard id="Cut 1" width={250} />
            <TShirtCard id="Cut 2" width={250} />
          </Carousel>
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers callback={updateCut} />
        </div>
      </div>
    </>
  );
}
