import React from 'react'

const UndoButton = (handleUndo) => {
  const path = "/undo.svg";
  
  return (
    <div>
      <input onClick={(e) => handleUndo(e)} className='w-6 h-6 mx-1' type="image" src={path} alt="undo" />
    </div>
  );
};

export default UndoButton;