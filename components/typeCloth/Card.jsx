import FrontTShirtSmall from '../Tshirt/FrontTShirtSmall'

const Card = () => {
  return (
    <div className='h-full bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-12 flex flex-col gap-6'>
      <div className='flex flex-row justify-center items-center'>
        <FrontTShirtSmall />
      </div>
    </div>
  )
}

export default Card