// import AXIOS from 'axios';
import types from '../Reducer/types';
import { initializateLinkedList, updateLinkedList } from './AuxiliaryFunctions/linkedList';
import { refreshWhenClassCutClothesChange } from './AuxiliaryFunctions/clothes';


export const updateClassClothes = ({ classClothes }) => {
    return async (dispatch, state) => {
        try {
            const newClothes = refreshWhenClassCutClothesChange({ classClothes, state });
            initializateLinkedList({ clothes: newClothes, state });
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

export const updateCutClothes = ({ cutClothes }) => {
    return async (dispatch, state) => {
        try {
            const newClothes = refreshWhenClassCutClothesChange({ cutClothes, state });
            const { currentNode } = updateLinkedList({ clothes: newClothes, state });
            return dispatch({
                type: types.CLOTHES_CUT_UPDATE,
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

export const updatePropClothes = ({ typeOfProp, propAndValueEdited }) => {
    return async (dispatch, state) => {
        try {
            const newClothes = {
                ...state.clothes,
                [typeOfProp]: {
                    ...state.clothes[typeOfProp],
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
