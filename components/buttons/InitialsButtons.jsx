import { useRouter } from "next/router";
// import Link from 'next/link';


const InitialButtons = ({ initial }) => {

  const router = useRouter();

  const init = () => {
    router.push("/typeOfClothes");
  };
  const next = () => {
    router.push("/cut");
  };

  return (
    <button 
      className="text-white w-full bg-black flex gap-2 justify-center items-center h-12 hover:bg-slate-600 " 
      onClick={initial ? init : next}
    >
      {initial ? 'INICIAR' : 'SIGUIENTE'}
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
    // <Link 
    //   className="text-white w-full bg-black flex gap-2 justify-center items-center h-12 hover:bg-slate-600 " 
    //   href={initial ? '/typeOfClothes' : '/cut'}
    // >
    //   {initial ? 'INICIAR' : 'SIGUIENTE'}
    //   <svg 
    //     className="w-5 h-5" 
    //     fill="none" 
    //     stroke="currentColor" 
    //     viewBox="0 0 24 24" 
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    //   </svg>
    // </Link>
  );
};

export default InitialButtons;
