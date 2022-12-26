import React from 'react'

const LandingPage = () => {
  return (
    <div className='h-full bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-12 flex flex-col gap-6'>
      <div className='flex flex-row justify-center items-center px-6 basis-1/2'>
        <img className='h-[100px] w-full' src="/sun.svg" alt="" />
      </div>
      <div className='flex flex-col gap-6 text-center px-6 tracking-wide basis-1/2'>
        <p className='uppercase text-xl'>Bienvenido al creador de diseños</p>
        <p className='uppercase text-xl'>Presione el boton <b className='uppercase text-xl font-semibold'>iniciar</b> para empezar a crear</p>  
      </div>
    </div>
  )
}

export default LandingPage