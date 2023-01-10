import React from "react";


const SelectFontBar = ({ array, handleSelect }) => {
    return (
        <div className="bg-[#313131] flex items-center w-full h-12 overflow-x-scroll">
            {
                array?.map((option, i) => {
                    return (
                        <button 
                            key={option} 
                            value={option} 
                            onClick={(e) => handleSelect(e)} 
                            className={`text-white w-full h-full px-6 whitespace-nowrap hover:bg-white hover:text-black focus:bg-white focus:text-black font-[${option}]`} 
                        >
                            {option}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default SelectFontBar;
