import { clothesPropsByClassAndCut } from '../../Reducer/SVGScrapping';
import custom from '../Customize';


const { saveValues } = custom;

// const isObject = (posibleObj) => {  // Comprueba si el argumento es un objeto clásico o no
//     return Object.prototype.toString.call(posibleObj) === '[object Object]';
// };

export const refreshWhenClassCutClothesChange = ({ classClothes /* Opcional */, cutClothes /* Opcional */, state }) => {
    const classUsed = classClothes ? classClothes : state.clothes.class;
    const cuts = Object.keys(clothesPropsByClassAndCut[classUsed]);
    const cutUsed = cutClothes ? cutClothes : cuts[0];
    const zonesValueObject = {};
    const propsFrontalOrDorsal = clothesPropsByClassAndCut[classUsed][cutUsed];
    const zonesArray = Object.keys({
        ...propsFrontalOrDorsal.frontal.color,
        ...propsFrontalOrDorsal.dorsal.color,
    });
    zonesArray.forEach(zone => {
        let savedValue = saveValues ? (state.clothes.color)[zone] : 'white';
        zonesValueObject[zone] = savedValue;
    });
    const newClothes = {
        ...state.clothes,
        class: classUsed,
        cut: cutUsed,
        color: { ...zonesValueObject, },
    };
    return newClothes;
};
