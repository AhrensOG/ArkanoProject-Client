import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import cheerio from 'cheerio';
import Bank from "../../../public/SVGClothes/SvgBank";


configure({ adapter: new Adapter() });


const bank = shallow(<Bank/>).render().html();
const $ = cheerio.load(bank);
const clothesPropsByClassAndCut = {};

$('svg').each((i, e) => {
    const zonesObj = {};
    $(e).find('.colors').each((i, e) => $(e)[0].children.forEach(e => {
        const zone = $(e)[0].attribs.class;
        zonesObj[zone] = '#FFFFFF';
    }));
    const classClothes = e.attribs.id;
    const cutClothes = $(e).find('.cutClothes')[0].attribs.id;
    const viewClothes = $(e).find('.viewClothes')[0].attribs.id;
    const svgClass = clothesPropsByClassAndCut[classClothes] ? clothesPropsByClassAndCut[classClothes] : null;
    const svgClassCut = svgClass && clothesPropsByClassAndCut[classClothes][cutClothes] ? clothesPropsByClassAndCut[classClothes][cutClothes] : null;
    const svgClassCutView = svgClassCut && clothesPropsByClassAndCut[classClothes][cutClothes][viewClothes] ? clothesPropsByClassAndCut[classClothes][cutClothes][viewClothes] : null;
    clothesPropsByClassAndCut[classClothes] = {
        ...svgClass,
        [cutClothes]: {
            ...svgClassCut,
            [viewClothes]: {
                ...svgClassCutView,
                'color': zonesObj,
            },
        }, 
    };
});

// console.log({ file: './context/Reducer/SVGScrapping', clothesPropsByClassAndCut });

export default clothesPropsByClassAndCut;
