import {AiOutlineArrowRight} from "react-icons/ai"
import { IconContext } from "react-icons"

const NextButton = () => {
  return (
    <div>
    <div className="bg-black w-96">
      <button className="text-white flex justify-center w-full  h-12 pt-3">
        <div className="pr-3 font-custom">
          SIGUIENTE
        </div>
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
          <div className='pt-1'>
            <AiOutlineArrowRight />
          </div>
        </IconContext.Provider>
      </button>
    </div>
  </div>
  )
}


























export default NextButton
    //   <div className=''>
    //   <button className=' text-white sm:w-96 w-96'>
    //     <div className='bg-black flex justify-center h-12 pt-3'>
    //       <div className='pr-1'>
    //         SIGUIENTE
    //       </div>
    //     <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
    //       <div className='pt-1'>
    //         <AiOutlineArrowRight />
    //       </div>
    //     </IconContext.Provider>
    //     </div>
    //   </button>
    // </div>