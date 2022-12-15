import {AiOutlineArrowRight} from "react-icons/ai"
import { IconContext } from "react-icons"

const InitialButton = () => {
  return (
    <div className=''>
      <button className=' text-white sm:w-96 w-96'>
        <div className='bg-black flex justify-center h-12 pt-3'>
          <div className='pr-1 font-custom'>
            INICIAR
          </div>
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
          <div className='pt-1'>
            <AiOutlineArrowRight />
          </div>
        </IconContext.Provider>
        </div>
      </button>
    </div>
  )
}

export default InitialButton