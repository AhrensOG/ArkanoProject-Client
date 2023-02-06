import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import { useDispatch, useSelector } from "../context/hooks";
import { updateCutClothes } from "../context/Actions/clothes";
import Bank from "../components/svgBank/SvgBank";


export default function CutClothes() {
  const [nav, setNav] = useState(false);

  const clothes = useSelector(state => state.clothes);

  const dispatch = useDispatch();

  const classClothes = clothes.class,
    viewClothes = 'frontal';

  const CAROUSEL_CUT_CONTAINER_REF = useRef();

  const handleUpdateCutClothes = () => {
    const childrenOfTheCrousel = CAROUSEL_CUT_CONTAINER_REF.current.childNodes[0].childNodes[0].childNodes;
    childrenOfTheCrousel.forEach(child => {
      const childIsActive = child.attributes[1].value;
      if (childIsActive === 'true') {
        const cutClothes = child.childNodes[0].childNodes[1].id;
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
        <div className="basis-[90%]" ref={CAROUSEL_CUT_CONTAINER_REF}>
          <Bank 
            classClothes={classClothes} 
            viewClothes={viewClothes} 
            inCarousel={true} 
          />
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers callback={handleUpdateCutClothes} />
        </div>
      </div>
    </>
  );
}
