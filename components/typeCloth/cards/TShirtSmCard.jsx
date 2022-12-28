import React from 'react'
import FrontTShirtSm from '../Tshirt/FrontTShirtSm'

const TShirtSmCard = () => {
  return (
    <div className='h-full bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-6 flex flex-col gap-6'>
      <div className='flex flex-row justify-center items-center'>
        <FrontTShirtSm />
      </div>
    </div>
  )
}

export default TShirtSmCard