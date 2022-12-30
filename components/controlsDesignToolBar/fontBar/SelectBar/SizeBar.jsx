import React from "react";


const SizeBar = ({ value, handleChange }) => {
    return (
        <div className="bg-[#313131] flex justify-around items-center h-12">
            <input 
                className=""
                type="range" 
                key="sizeRange"
                id="sizeRange"
                name="rating" 
                min={1}
                max={100}
                step={1}
                value={value} 
                required
                onChange={(e) => handleChange(e)}
            />
            <input 
                className="bg-[#313131] text-white font-bold border-none"
                type="number" 
                key="sizeNumber"
                id="sizeNumber"
                name="rating" 
                min={1}
                max={100}
                step={1}
                value={parseInt(String(value))}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default SizeBar;
