import React from "react";


const Card = ({ SVG, id, width, clothes }) => {
  return (
    <div className='h-full bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-12 flex flex-col justify-center items-center gap-6'>
      <SVG 
        id={id} 
        width={width} 
        clothes={clothes}
      />
    </div>
  );
};

export default Card;
