import React from "react";
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

  const zonas = ["Mangas", "Cuello", "Atrás", "Frente" ]

  return (
    <>
      <div className="flex bg-[#313131] w-full h-12 gap-1 py-2 justify-around">
        {colors.map((e) => {
          return (
            <div key={e} className="">
              <button
                style={{ backgroundColor: e }}
                className="rounded-full p-3"
              ></button>
            </div>
          );
        })}
      </div>
      <SelectBar array={zonas} handleSelect={() => 1} />
    </>
  );
};

export default ColorSelect;
