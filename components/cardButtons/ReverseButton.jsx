import React from 'react'


const ReverseButton = ({ viewClothes, setViewClothes }) => {
  const path = "/reverse.svg";

  const handleReverse = (e, viewClothes, setViewClothes) => {
    e.preventDefault();
    const newViewClothes = viewClothes === 'frontal' ? 'dorsal' : 'frontal';
    setViewClothes(newViewClothes);
  };

  return (
    <div className=' absolute z-10 left-5 bottom-40'>
      <input onClick={(e) => handleReverse(e, viewClothes, setViewClothes)} className="" type="image" src={path} alt="reverse" />
    </div>
  );
};

export default ReverseButton;
