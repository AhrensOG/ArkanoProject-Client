import React from 'react'

const AddButton = (handleAdd) => {
  const path = "/add.svg";
  
  return (
    <div>
      <input onClick={(e) => handleAdd(e)} className="" type="image" src={path} alt="add" />
    </div>
  );
};

export default AddButton;