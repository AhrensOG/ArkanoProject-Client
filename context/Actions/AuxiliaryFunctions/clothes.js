import clothesPropsByClassAndCut from '../../Reducer/SVGScrapping';
import custom from '../Customize';


const { saveValues } = custom;

// const isObject = (posibleObj) => {  // Comprueba si el argumento es un objeto clásico o no
//     return Object.prototype.toString.call(posibleObj) === '[object Object]';
// };

export const refreshWhenClassCutClothesChange = ({ classClothes /* Opcional */, cutClothes /* Opcional */, state }) => {
    console.log({clothesPropsByClassAndCut})
    const classUsed = classClothes ? classClothes : state.clothes.class;
    const cuts = Object.keys(clothesPropsByClassAndCut[classUsed]);
    const cutUsed = cutClothes ? cutClothes : cuts[0];
    const propsFrontalOrDorsal = clothesPropsByClassAndCut[classUsed][cutUsed];
    const zonesValueObject = {
        ...propsFrontalOrDorsal.frontal.color,
        ...propsFrontalOrDorsal.dorsal.color,
    };
    const zonesArray = Object.keys(zonesValueObject);
    zonesArray.forEach(zone => {
        saveValues 
            && (state.clothes.color)[zone] 
            && (zonesValueObject[zone] = (state.clothes.color)[zone]);
    });
    const newClothes = {
        ...state.clothes,
        class: classUsed,
        cut: cutUsed,
        color: { ...zonesValueObject, },
    };
    return newClothes;
};
