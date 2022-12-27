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
    <div className="flex bg-[#313131] w-full h-8 justify-between">
      {colors.map((e) => {
        return (
          <div key={e} className=" pt-1 px-1">
            <div
              style={{ backgroundColor: e }}
              className="rounded-full w-6 h-6"
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
