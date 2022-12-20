import ConfirmationOptions from "../buttons/ConfirmationOptions"
import { useState } from "react"
import NavBar from "../Navbar/NavBar"
import DirectionButtonsControllers from "../buttons/DirectionButtonsControllers"

const EndingPage = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <NavBar nav={nav} setNav={setNav}/>
            <div className='bg-gradient-to-b from-[#00FFFF] via-[#E73D93] to-[#9400B3]'>
                <div className='bg-white/70 pt-6 flex flex-col gap-12'>
                    <div className='flex flex-row justify-center px-6'>
                        <img src="/sun.svg" alt="" />
                    </div>
                    <div className='flex flex-col gap-6 text-center tracking-wide'>
                        <ConfirmationOptions/>
                        <DirectionButtonsControllers goHome={true}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndingPage