import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-gradient-to-b from-[#00FFFF] via-[#E73D93] to-[#9400B3]'>
      <div className='bg-white/70 py-12 flex flex-col gap-12'>
        <div className='flex flex-row justify-center px-6'>
          <img src="/sun.svg" alt="" />
        </div>
        <div className='flex flex-col gap-6 text-center px-6 tracking-wide'>
          <p className='uppercase text-xl'>Bienvenido al creador de diseños</p>
          <p className='uppercase text-xl'>Presione el boton <b className='uppercase text-xl font-semibold'>iniciar</b> para empezar a crear</p>  
        </div>
      </div>
    </div>
  )
}

export default LandingPage