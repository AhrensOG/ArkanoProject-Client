import React from "react";


const SelectBar = ({ array, handleSelect }) => {
    return (
        <div className="bg-[#313131] flex items-center w-full h-12">
            {array.map(option => {
                return (
                    <button key={option} value={option} onClick={handleSelect} className=" text-white w-full h-full hover:bg-white hover:text-black focus:bg-white focus:text-black">{option}</button>
                )
            })}
        </div>
    );
};

export default SelectBar;
