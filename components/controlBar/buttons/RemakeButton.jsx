import React from 'react';
import Remake from './assets/Remake';
import { useDispatch, useSelector } from '../../../context/hooks';
import { updateCurrentNode } from '../../../context/Actions/currentNode';


const RemakeButton = (/* { handleRemake } */) => {
  const dispatch = useDispatch();
  const currentNode = useSelector(state => state.currentNode);
  const { next } = currentNode;

  const handleRemake = (e) => {
    next && dispatch(updateCurrentNode({ moveTo: 'next' }));
  };

  return (
    <button onClick={(e) => handleRemake(e)} className='w-6 h-6 mx-1' >
      <Remake 
        width={next ? 25 : 20} 
        className={next ? ' fill-white' : 'fill-gray-400'} 
      />
    </button>
  );
};

export default RemakeButton;
