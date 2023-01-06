import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import { Carousel } from "flowbite-react";
import TShirtCard from "../components/typeCloth/cards/TShirtCard";
import DirectionButtonsControllers from "../components/buttons/DirectionButtonsControllers";
import { useDispatch, useSelector } from "../context/hooks";
import { updateClassClothes } from "../context/Actions/clothes";


export default function TypeClothes() {
  const [nav, setNav] = useState(false);

  const clothes = useSelector(state => state.clothes);

  const dispatch = useDispatch();

  const updateTypeOfClothes = () => {
    const childrenOfTheCrousel = document.getElementsByClassName('theCarousel')[0].childNodes[0].childNodes[0].childNodes;
    childrenOfTheCrousel.forEach(child => {
      const childIsActive = child.attributes[1].value;
      if (childIsActive === 'true') {
        const clothesClass = child.childNodes[0].childNodes[0].id;
        dispatch(updateClassClothes(clothesClass));
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
          <NavBar nav={nav} setNav={setNav} state={'select'} />
          <SideBar nav={nav} setNav={setNav} />
        </div>
        <div className="basis-[90%] theCarousel">
          <Carousel indicators={false} slide={false}>
            <TShirtCard id="Remera" width={250} />
            <TShirtCard id="Buzo" width={250} />
            <TShirtCard id="Campera" width={250} />
          </Carousel>          
        </div>
        <div className="basis-[5%]">
          <DirectionButtonsControllers callback={updateTypeOfClothes} />
        </div>
      </div>
    </>
  );
};
