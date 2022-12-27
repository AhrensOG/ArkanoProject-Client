import React, { useState } from "react";
import SelectBar from '../SelectBar/SelectBar';
import SelectFontBar from './SelectBar/SelectFontBar';
import SizeBar from './SelectBar/SizeBar';
import SlideUp from "../../transitions/SlideUp";


const FontSelect = () => {
    const fonts = ['Roboto', 'Zilla Slab Highlight', 'Open Sans', 'Spectral', 'Slabo 27px', 'Lato', 'Roboto Condensed', 'Oswald', 'Source Sans Pro', 'Raleway', 'Zilla Slab', 'Montserrat', 'PT Sans', 'Roboto Slab', 'Merriweather', 'Saira Condensed', 'Saira', 'Saira Stencil One', 'Julee', 'Archivo', 'Ubuntu', 'Lora', 'Manuale', 'Asap Condensed', 'Faustina', 'Playfair Display', 'Noto Sans', 'PT Serif', 'Arimo', 'Poppins', 'Sedgwick Ave Display', 'Titillium Web', 'Sedgwick Ave', 'Indie Flower', 'Mada', 'PT Sans Narrow', 'Noto Serif', 'Bitter', 'Dosis', 'Josefin Sans', 'Inconsolata', 'Bowlby One SC', 'Oxygen Mono', 'Arvo', 'Hind', 'Cabin Sketch', 'Fjalla One', 'Anton', 'Allan', 'Acme', 'Playball', 'EB Garamond', 'Passion One', 'Francois One', 'Archivo Black', 'Pathway Gothic One', 'Vollkorn', 'Vollkorn SC', 'Alegreya', 'Sevillana'];

    const [typography, setTypography] = useState(false);
    const [position, setPosition] = useState(false);
    const [size, setSize] = useState(false);

    const handleSelect = (e) => {
        if (e.target.value === 'FUENTE') {
        setTypography(true);
        setPosition(false);
        setSize(false);
        };
        if (e.target.value === 'ZONA') {
        setTypography(false);
        setPosition(true);
        setSize(false);
        };
        if (e.target.value === 'TAMAÑO') {
        setTypography(false);
        setPosition(false);
        setSize(true);
        };
    };

    return (
        <div>
            <div>
                {
                typography 
                ? <SlideUp><SelectFontBar array={fonts} handleSelect={() => 1} /></SlideUp>
                : position 
                    ? <SlideUp><SelectBar array={["Superior", "Inferior", "Cuello", "Posterior"]} handleSelect={() => 1} /></SlideUp>
                    : size 
                        ? <SlideUp><SizeBar value={1} handleChange={() => 1} /></SlideUp>
                        : <div></div>
                }
            </div>
            <SelectBar array={['FUENTE', 'ZONA', 'TAMAÑO']} handleSelect={handleSelect} />
        </div>
    );
};

export default FontSelect;
