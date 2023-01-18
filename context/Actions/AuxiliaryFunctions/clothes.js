import { clothesPropsByClass } from '../../Reducer/initialState';
import custom from '../Customize';


const { saveValues } = custom;

// const isObject = (posibleObj) => {  // Comprueba si el argumento es un objeto clásico o no
//     return Object.prototype.toString.call(posibleObj) === '[object Object]';
// };

export const refreshWhenClassClothesChange = ({ classClothes, state }) => {
    const zonesValueObject = {};
        const zonesArray = Object.keys(clothesPropsByClass[classClothes].color);
        zonesArray.forEach(zone => {
            let savedValue = saveValues ? (state.clothes.color)[zone] : '';
            zonesValueObject[zone] = savedValue;
    });
        const newClothes = {
            ...state.clothes,
            class: classClothes,
            color: { ...zonesValueObject, },
        };
    return newClothes;
};
