import types from './types';
import initialState from './initialState';


const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // Clothes
        case types.CLOTHES_CLASS_UPDATE: 
        case types.CLOTHES_CUT_UPDATE: 
        case types.CLOTHES_PROP_UPDATE: {
            return {
                ...state,
                currentNode: { ...payload.currentNode, },
                clothes: { ...payload.clothes, },
            };
        };
        case types.CLOTHES_POST: {
            return { ...state, };
        };
        // CurrentNode
        case types.CURRENT_NODE_UPDATE: {
            return { 
                ...state,
                currentNode: { ...payload, },
                clothes: { ...payload.data, },
            };
        };
        default: {
            return { ...state, };
        };
    };
};

export default reducer;
