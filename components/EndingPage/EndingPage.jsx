import ConfirmationOptions from "../buttons/ConfirmationOptions";
import DirectionButtonsControllers from "../buttons/DirectionButtonsControllers";

const EndingPage = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-center gap-20 bg-gradient-to-b from-[#B2FFFF] via-[#F1C3E0] to-[#d2bfd6] py-12">
        <div className="flex flex-row justify-center px-6">
          <img src="/sun.svg" alt="" />
        </div>
        <div className="flex flex-col gap-6 text-center tracking-wide">
          <ConfirmationOptions />
        </div>
      </div>
      <DirectionButtonsControllers goHome={true} />
    </>
  );
};

export default EndingPage;
