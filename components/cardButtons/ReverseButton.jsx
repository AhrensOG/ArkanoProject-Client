import React from 'react'

const ReverseButton = (handleReverse) => {
  const path = "/reverse.svg";
  
  return (
    <div>
      <input onClick={(e) => handleReverse(e)} className="" type="image" src={path} alt="reverse" />
    </div>
  );
};

export default ReverseButton;