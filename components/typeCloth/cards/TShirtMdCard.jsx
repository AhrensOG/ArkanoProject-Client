import FrontTShirtMd from '../Tshirt/FrontTShirtMd'

const TShirtMdCard = () => {
  return (
    <div className='h-full bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-12 flex flex-col gap-6'>
      <div className='flex flex-row justify-center items-center'>
        <FrontTShirtMd />
      </div>
    </div>
  )
}

export default TShirtMdCard