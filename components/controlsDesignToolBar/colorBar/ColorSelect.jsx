import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../context/hooks";
import { updatePropClothes } from "../../../context/Actions/clothes";
import SelectBar from "../SelectBar/SelectBar";


const ColorSelect = () => {
  const colors = [
    `#FF0000`,
    `#0094FF`,
    `#00FF19`,
    `#FAFF00`,
    `#FF8A00`,
    `#FF00A8`,
    `#9E00FF`,
    `#FFFFFF`,
    `#000000`,
  ];

  const dispatch = useDispatch();

  const clothes = useSelector(state => state.clothes);

  const [zonas, setZonas] = useState(Object.keys(clothes.color));
  const [zona, setZona] = useState(zonas[0]);

  useEffect(() => {
    setZonas(Object.keys(clothes.color));
  }, [clothes.class, clothes.cut]);

  useEffect(() => {
    setZona(zonas[0]);
  }, [zonas]);

  const handleSelectColor = (e) => {
    e.preventDefault();
    const classClothes = 'color';
    const propAndValueEdited = { [zona]: e.target.id };
    dispatch(updatePropClothes({ classClothes, propAndValueEdited }));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setZona(e.target.id);
  };

  return (
    <>
      <div className="flex bg-[#313131] w-full h-12 gap-1 py-2 justify-around items-center">
        {colors?.map((e) => {
          return (
            <button
              id={e}
              key={e}
              onClick={(e) => handleSelectColor(e)}
              style={{ backgroundColor: e }}
              className="rounded-full p-3 h-5 w-5"
            ></button>
          );
        })}
      </div>
      <SelectBar 
        array={zonas} 
        handleSelect={handleSelect} 
        state={zona}
      />
    </>
  );
};

export default ColorSelect;
