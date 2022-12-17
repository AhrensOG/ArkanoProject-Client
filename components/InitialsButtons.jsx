import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

const InitialButton = ({ flag }) => {
  return (
    <div className="">
      <button className=" text-white sm:w-96 w-96">
        <div className="bg-black flex justify-center h-12 pt-3 hover:bg-slate-600 ">
          {flag ? (
            <div className="pr-1 ">INICIAR</div>
          ) : (
            <div className="pr-1 ">SIGUIENTE</div>
          )}

          <IconContext.Provider
            value={{ color: "white", className: "global-class-name" }}
          >
            <div className="pt-1">
              <AiOutlineArrowRight />
            </div>
          </IconContext.Provider>
        </div>
      </button>
    </div>
  );
};

export default InitialButton;