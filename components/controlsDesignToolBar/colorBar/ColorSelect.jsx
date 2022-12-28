import React from "react";


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

  return (
    <div className="flex bg-[#313131] w-full gap-1 py-2 justify-around">
      {colors.map((e) => {
        return (
          <div key={e} className="">
            <div
              style={{ backgroundColor: e }}
              className="rounded-full p-3"
            >
              {" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorSelect;
