import React, { useEffect, useState } from "react";
import ColorSelect from './colorBar/ColorSelect';
import FontSelect from './fontBar/FontSelect';
import ImageSelect from './imageBar/ImageSelect';
import SlideUp from "../transitions/SlideUp";


const ControlsDesign = () => {
  const [colorTool, setColorTool] = useState(false);
  const [textTool, setTextTool] = useState(false);
  const [logoTool, setLogoTool] = useState(false);

  useEffect(() => {
    setColorTool(true);
  }, []);

  const handleSelectColor = (e) => {
    if (e.target.value === 'color') {
      setColorTool(true);
      setTextTool(false);
      setLogoTool(false);
    };
    if (e.target.value === 'text') {
      setColorTool(false);
      setTextTool(true);
      setLogoTool(false);
    };
    if (e.target.value === 'logo') {
      setColorTool(false);
      setTextTool(false);
      setLogoTool(true);
    };
  };

  return (
    <div>
      <div>
        {
          colorTool 
          ? <SlideUp>
            <ColorSelect/>
          </SlideUp>
          : textTool 
            ? <SlideUp><FontSelect/></SlideUp>
            : logoTool 
              ? <SlideUp><ImageSelect/></SlideUp>
              : <div></div>
        }
      </div>
      <div className="flex justify-center  w-full">
        <div className=" h-12 basis-1/3 text-white w-full">
          <button value="color" onClick={handleSelectColor} className="w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 ">COLOR</button>
        </div>
        <div className=" h-12 basis-1/3 text-white">
          <button value="text" onClick={handleSelectColor} className="w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 ">TEXTO</button>
        </div>
        <div className=" h-12 basis-1/3 text-white">
          <button value="logo" onClick={handleSelectColor} className="w-full h-full bg-black hover:bg-slate-600 focus:bg-slate-600 ">EMOJI/ESCUDO</button>
        </div>
      </div>
    </div>
  );
};

export default ControlsDesign;
