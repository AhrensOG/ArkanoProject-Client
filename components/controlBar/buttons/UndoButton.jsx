import React from 'react';
import Undo from './assets/Undo';
import { useDispatch, useSelector } from '../../../context/hooks';
import { updateCurrentNode } from '../../../context/Actions/currentNode';


const UndoButton = (/* { handleUndo } */) => {
  const dispatch = useDispatch();
  const currentNode = useSelector(state => state.currentNode);
  const { back } = currentNode;

  const handleUndo = (e) => {
    back && dispatch(updateCurrentNode({ moveTo: 'back' }));
  };

  return (
    <button onClick={(e) => handleUndo(e)} className='w-6 h-6 mx-1' >
      <Undo 
        width={back ? 25 : 20} 
        className={back ? ' fill-white' : 'fill-gray-400'} 
      />
    </button>
  );
};

export default UndoButton;
