import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Carousel } from "flowbite-react";
import * as SVGs from '../../public/SVGClothes';


configure({ adapter: new Adapter() });


const Bank = ({ 
    maxWidth = '80vw' /* Opcional: tamaño de los SVGs */,
    maxHeight = '80vh' /* Opcional alterno a 'width': tamaño de los SVGs */, 
    classClothes /* Opcional: filtra por clase */, 
    cutClothes /* Opcional: filtra por corte */, 
    viewClothes /* Opcional: filtra por vista */, 
    inCarousel /* requerimiento: para envolver el array en carousel */, 
    bankRef /* requerimiento alterno a 'inCarousel': asigna un div padre con la referencia */,
}) => {
    const svgNamesArray = Object.keys(SVGs)
    const svgJSXArray = svgNamesArray
        .map(svgName => SVGs[svgName].default)
        .map((Element, i) => ({
            tagReact: (
                <Element 
                    key={`${svgNamesArray[i]}-svg`}
                    className={`classClothes max-w-[${maxWidth}] max-h-[${maxHeight}]`}
                    width={null}
                    height={null}
                />
            ),
            key: svgNamesArray[i],
        }))
        .filter(({ tagReact }) => {
            const wrapper = shallow(tagReact)
            const testClass = classClothes ? (wrapper.find({ id: classClothes }).length) : true;
            const testCut = cutClothes ? (wrapper.find({ id: cutClothes }).length) : true;
            const testView = viewClothes ? (wrapper.find({ id: viewClothes }).length) : true;
            return testClass && testCut && testView;
        })
        .map(({ tagReact, key }) => (
            inCarousel
            ? <div key={key} >
                <div className=' h-full w-full flex flex-col justify-center items-center'>
                    {tagReact}
                </div>
            </div>
            : tagReact
        ));

    // console.log({ 
    //     file: './public/SVGClothes/SvgBank.js',
    //     svgJSXArray: svgJSXArray.map(e => shallow(e).render()),
    // });

    return (
        inCarousel
        ? <Carousel slide={false}>
            {svgJSXArray}
        </Carousel>
        : <div 
            ref={bankRef} 
            className=' h-full w-full flex flex-col justify-center items-center'
        >
            {svgJSXArray}
        </div>
    );
}; 

export default Bank;
