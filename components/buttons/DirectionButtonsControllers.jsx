import React from "react";

const DirectionButtonsControllers = ({ goHome }) => {
  return (
    <div className="flex justify-center w-full">
      <div className=" h-12 basis-1/2 text-white w-full">
        <button className="w-full h-full bg-black hover:bg-slate-600 ">
          ANTERIOR
        </button>
      </div>
      <div className=" h-12 basis-1/2 text-white">
        {goHome ? (
          <button className="w-full h-full bg-black hover:bg-slate-600 ">
            IR AL INICIO
          </button>
        ) : (
          <button className="w-full h-full bg-black hover:bg-slate-600 ">
            SIGUIENTE
          </button>
        )}
      </div>
    </div>
  );
};

export default DirectionButtonsControllers;
