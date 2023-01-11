import { addtionalClothesColorZone, remeraColorZones } from '../../Reducer/initialState';


export const refreshWhenClassClothesChange = ({ classClothes, state }) => {
        const oldStateBasicZones = {};
        remeraColorZones.forEach(zone => oldStateBasicZones[zone] = state.clothes.color[zone]);
        const colorZones = {
            ...oldStateBasicZones,
            ...addtionalClothesColorZone[classClothes],
        };
    return colorZones;
};
