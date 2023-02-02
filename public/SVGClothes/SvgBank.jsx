import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import * as SVGs from './index';


configure({ adapter: new Adapter() });


const Bank = ({ 
    classClothes /* Opcional: filtra por clase */, 
    cutClothes /* Opcional: filtra por corte */, 
    viewClothes /* Opcional: filtra por vista */, 
    Carousel /* Opcional: para envolver el array en carousel u otro padre */, 
    bankRef /* Opcional: al pasar una Referencia, agrega un div con dicha ref. De lo contrario, deja un array de svg's */ 
}) => {
    const svgNamesArray = Object.keys(SVGs)
    const svgJSXArray = svgNamesArray
        .map(svgName => SVGs[svgName].default)
        .map((E, i) => <E key={svgNamesArray[i]} />)
        .filter(e => {
            const wrapper = shallow(e)
            const testClass = classClothes ? (wrapper.find({ id: classClothes }).length) : true;
            const testCut = cutClothes ? (wrapper.find({ id: cutClothes }).length) : true;
            const testView = viewClothes ? (wrapper.find({ id: viewClothes }).length) : true;
            return testClass && testCut && testView;
        });

    // console.log({ file: './public/SVGClothes/SvgBank.js', svgJSXArray });

    return (
        bankRef && Carousel
        ? <Carousel ref={bankRef} slide={false}>
            {svgJSXArray}
        </Carousel>
        : bankRef
        ? <div ref={bankRef}>
            {svgJSXArray}
        </div>
        : Carousel
        ? <Carousel slide={false}>
            {svgJSXArray}
        </Carousel>
        : <div>{
            svgJSXArray
        }</div>
    );
}; 

export default Bank;