import React from "react";
import { useRouter } from "next/router";


const DirectionButtonsControllers = ({ goHome, callback }) => {
  const router = useRouter()

  const init = () => {
    router.push("/");
  };

  const next = () => {
    callback && callback();

    const data = router.asPath;

    data === "/typeOfClothes"
    ? router.push('/cut')
    : data === "/cut"
    ? router.push("/modification")
    : router.push("/endMerch");
  };

  const back = () => {
    router.back();
  };

  return (
    <div className="flex justify-center w-full">
      <div className=" h-12 basis-1/2 text-white w-full">
        <button onClick={back} className="w-full h-full bg-black hover:bg-slate-600 ">
          ANTERIOR
        </button>
      </div>
      <div className=" h-12 basis-1/2 text-white">
        {goHome ? (
          <button onClick={init} className="w-full h-full bg-black hover:bg-slate-600 ">
            IR AL INICIO
          </button>
        ) : (
          <button onClick={next} className="w-full h-full bg-black hover:bg-slate-600 ">
            SIGUIENTE
          </button>
        )}
      </div>
    </div>
  );
};

export default DirectionButtonsControllers;
