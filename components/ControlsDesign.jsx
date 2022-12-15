import React from 'react'

const ControlsDesign = () => {
  return (
    <div className='flex justify-center  sm:w-96 w-96'>
    <div className=' h-12 basis-1/3 text-white w-full'>
      <button className='w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 font-custom'>
        COLOR
      </button>
    </div>
    <div className=' h-12 basis-1/3 text-white'>
      <button className='w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 font-custom'>
        TEXTO
      </button>
    </div>
    <div className=' h-12 basis-1/3 text-white'>
      <button className='w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 font-custom'>
        EMOJI/ESCUDO
      </button>
    </div>
</div>  
  )
}

export default ControlsDesign