import React from 'react';
import BackButton from './BackButton.jsx';
import UndoButton from './UndoButton.jsx';
import RemakeButton from './RemakeButton.jsx';

const ControlBar = (handleBack, handleUndo, handleRemake, handleSave) => {
    return (
        <div className='flex justify-center items-center bg-black'>
            <div className='basis-[10%] flex flex-row justify-end items-center w-full h-full'>
                <BackButton handleBack={handleBack} />
            </div>
            <div className='basis-[62%] flex flex-row justify-center items-center w-full h-full'>
                <div className='flex justify-center items-end h-full'>
                    <UndoButton handleUndo={handleUndo} />
                </div>
                <div className='flex justify-center items-end h-full'>
                    <RemakeButton handleRemake={handleRemake} />
                </div>
            </div>
            <div className='basis-[28%] text-gray-200 flex justify-center items-center w-full h-full'>
                <button onClick={(e) => handleSave(e)} className='bg-gray-700 hover:bg-slate-600 focus:bg-slate-600 hover:text-white focus:text-white p-2 w-full h-full'>
                    GUARDAR
                </button>
            </div>
        </div>  
    );
};

export default ControlBar;