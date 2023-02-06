import React, { useEffect, useRef } from "react";
import Bank from '../svgBank/SvgBank';
import clothesPropsByClassAndCut from "../../context/Reducer/SVGScrapping";


const Card = ({ clothes, viewClothes = 'frontal' }) => {
  let classClothes = clothes?.class,
    cutClothes = clothes?.cut,
    viewClothesState = viewClothes === 'frontal' || viewClothes === 'dorsal' ? viewClothes : 'frontal';

  const CARD_REF = useRef();

  useEffect(() => {
    classClothes = clothes.class;
  }, [clothes.class]);

  useEffect(() => {
    cutClothes = clothes.cut;
  }, [clothes.cut]);

  useEffect(() => {
    viewClothesState = viewClothes === 'frontal' || viewClothes === 'dorsal' ? viewClothes : 'frontal';
  }, [viewClothes]);

  useEffect(() => {
    const colorZones = Object.keys(clothesPropsByClassAndCut[classClothes][cutClothes][viewClothesState].color)
    const colorStates = colorZones?.reduce((obj, zone) => ({
      ...obj, 
      [zone]: (clothes.color)[zone] 
    }), {});
    colorZones?.forEach(zone => {
      [...CARD_REF.current.getElementsByClassName(zone)]
        .map(e => e.setAttribute('fill', colorStates[zone]));
    });
  }, [classClothes, cutClothes, viewClothesState, clothes.color]);

  return (
    <Bank 
      classClothes={classClothes} 
      cutClothes={cutClothes} 
      viewClothes={viewClothesState} 
      bankRef={CARD_REF} 
    />
  );
};

export default Card;
