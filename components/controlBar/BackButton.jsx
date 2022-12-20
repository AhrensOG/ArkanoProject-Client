import React from 'react'

const BackButton = (handleBack) => {
  const path = "/back.svg";
  
  return (
    <div>
      <input onClick={(e) => handleBack(e)} className='w-5 h-5' type="image" src={path} alt="back" />
    </div>
  );
};

export default BackButton;