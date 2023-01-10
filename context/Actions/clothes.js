// import AXIOS from 'axios';
import types from '../Reducer/types';
import { addtionalClothesColorZone, remeraColorZones } from '../Reducer/initialState';
import { updateLinkedList } from './AuxiliaryFunctions/linkedList';


export const updateClassClothes = ({ classClothes }) => {
    return async (dispatch, state) => {
        try {
            const oldStateBasicZones = {};
            remeraColorZones.forEach(zone => oldStateBasicZones[zone] = state.clothes.color[zone]);
            const colorZones = {
                ...oldStateBasicZones,
                ...addtionalClothesColorZone[classClothes],
            };
            const newClothes = {
                ...state.clothes,
                class: classClothes,
                color: { ...colorZones, },
            };
            const { currentNode } = updateLinkedList({ clothes: newClothes, state });
            return dispatch({
                type: types.CLOTHES_CLASS_UPDATE,
                payload: { 
                    clothes: newClothes,
                    currentNode,
                },
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const updatePropClothes = ({ category, propAndValueEdited }) => {
    return async (dispatch, state) => {
        try {
            const newClothes = {
                ...state.clothes,
                [category]: {
                    ...state.clothes[category],
                    ...propAndValueEdited,
                },
            };
            const { currentNode } = updateLinkedList({ clothes: newClothes, state });
            return dispatch({
                type: types.CLOTHES_PROP_UPDATE,
                payload: { 
                    clothes: newClothes,
                    currentNode,
                },
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const postClothes = () => {
    // const URL = process.env.REACT_APP_ONLINE_SERVER || `http://localhost:3001`;
    return async (dispatch, state) => {
        try {
            const clothes = state.clothes;
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
