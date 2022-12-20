import React from 'react'

const RemakeButton = (handleRemake) => {
  const path = "/remake.svg";
  
  return (
    <div>
      <input onClick={(e) => handleRemake(e)} className='flex items-end w-4 h-4 mx-1' type="image" src={path} alt="remake" />
    </div>
  );
};

export default RemakeButton;