import React from "react";
import { useRouter } from "next/router";
const DirectionButtonsControllers = ({ goHome }) => {

  const router = useRouter()

  const init = () => {
    router.push("/")
  }
  const next = () => {
    const data = router.asPath 
    console.log(data) 
    data === "/corte"?
    router.push("/modificacion")
    :
    router.push("/finalizarproducto")
  }

  const back = () => {
    router.back()
  }

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
