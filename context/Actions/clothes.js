// import AXIOS from 'axios';
import types from '../Reducer/types';
import { addtionalClothesColorZone, remeraColorZones } from '../Reducer/initialState';


export const updateClassClothes = (classClothes) => {
    return async (dispatch, state) => {
        try {
            const oldStateBasicZones = {};
            remeraColorZones.forEach(zone => oldStateBasicZones[zone] = state.clothes.color[zone]);
            const colorZones = {
                ...oldStateBasicZones,
                ...addtionalClothesColorZone[classClothes],
            };
            return dispatch({
                type: types.CLOTHES_CLASS_UPDATE,
                payload: { classClothes, colorZones },
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const updatePropClothes = (category, propAndValueEdited) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: types.CLOTHES_PROP_UPDATE,
                payload: { category, propAndValueEdited },
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const postClothes = (clothes) => {
    // const URL = process.env.REACT_APP_ONLINE_SERVER || `http://localhost:3001`;
    return async (dispatch) => {
        try {
            // const JSON = await AXIOS.post(`${URL}/clothes`, clothes);
            // const response = JSON.data;
            return dispatch({
                type: types.CLOTHES_POST,
                payload: /* response */'',
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};
