// import AXIOS from 'axios';
import types from '../Reducer/types';


export const updateClassClothes = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: types.CLOTHES_CLASS_UPDATE,
                payload: '',
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const updatePropClothes = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: types.CLOTHES_PROP_UPDATE,
                payload: '',
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};

export const postClothes = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: types.CLOTHES_POST,
                payload: '',
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};
