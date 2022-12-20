import { useRouter } from "next/router";

const InitialButtons = ({ initial }) => {

  const router = useRouter()

  const init = () => {
    router.push("/tipo-de-prenda")
  }
  const next = () => {
    router.push("/corte")
  }

  return (
    <div className="">
      <button className=" text-white w-full">
        <div className="bg-black flex gap-2 justify-center items-center h-12 hover:bg-slate-600 ">
          {initial ? (
            <button onClick={init}>INICIAR</button>
          ) : (
            <button onClick={next}>SIGUIENTE</button>
          )}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </button>
    </div>
  );
};

export default InitialButtons;
