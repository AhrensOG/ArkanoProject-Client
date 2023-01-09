import types from './types';
import initialState from './initialState';


const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.CLOTHES_CLASS_UPDATE: {
            return {
                ...state,
                clothes: { 
                    ...state.clothes,
                    class: payload.classClothes,
                    color: { ...payload.colorZones, }
                },
            };
        };
        case types.CLOTHES_PROP_UPDATE: {
            return {
                ...state,
                clothes: { 
                    ...state.clothes,
                    [payload.category]: {
                        ...state.clothes[payload.category],
                        ...payload.propAndValueEdited,
                    },
                },
            };
        };
        case types.CLOTHES_POST: {
            return { ...state, };
        };
        default: {
            return { ...state, };
        };
    };
};

export default reducer;
