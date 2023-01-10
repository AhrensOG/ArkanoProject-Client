import React from "react";


const SelectBar = ({ array, handleSelect, state}) => {
    return (
        <div className="bg-[#313131] flex items-center w-full h-12 overflow-x-scroll">
            {
                array?.map(option => {
                    return (
                        <button 
                            id={option} 
                            key={option} 
                            value={option} 
                            onClick={(e) => handleSelect(e)} 
                            className={`text-white w-full h-full px-4 hover:bg-white hover:text-black focus:bg-white focus:text-black ${state === option ? 'bg-white text-black' : ''}`}
                        >
                            {option}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default SelectBar;
