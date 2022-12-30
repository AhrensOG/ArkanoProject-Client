import React from "react";
import SelectBar from '../SelectBar/SelectBar';


const ImageSelect = () => {
    return (
        <div>
            <div className="bg-[#313131] flex justify-center items-center w-full h-12" >
                <input className=" text-white" type="file" ></input>
            </div>
            <SelectBar array={["Superior", "Inferior", "Cuello", "Posterior"]} handleSelect={() => 1} />
        </div>
    );
};

export default ImageSelect;
