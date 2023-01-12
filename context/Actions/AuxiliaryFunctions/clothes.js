import { clothesPropsByClass } from '../../Reducer/initialState';


// const isObject = (posibleObj) => {  // Comprueba si el argumento es un objeto clásico o no
//     return Object.prototype.toString.call(posibleObj) === '[object Object]';
// };

export const refreshWhenClassClothesChange = ({ classClothes, state }) => {
    const zonesValueObject = {};
        const zonesArray = Object.keys(clothesPropsByClass[classClothes].color);
        zonesArray.forEach(zone => zonesValueObject[zone] = (state.clothes.color)[zone] || '');
        const newClothes = {
            ...state.clothes,
            class: classClothes,
            color: { ...zonesValueObject, },
        };
    return newClothes;
};
