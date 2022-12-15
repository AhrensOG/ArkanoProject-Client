import React from 'react'

const NextAndPreviousButton = () => {
  return (
    <div className='flex justify-center  sm:w-96 w-96'>
        <div className=' h-12 basis-1/2 text-white w-full'>
          <button className='w-full h-full bg-black hover:bg-slate-600 font-custom'>
            ANTERIOR
          </button>
        </div>
        <div className=' h-12 basis-1/2 text-white'>
          <button className='w-full h-full bg-black hover:bg-slate-600 font-custom'>
            SIGUIENTE
          </button>
        </div>
    </div>  
  )
}

export default NextAndPreviousButton