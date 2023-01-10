// import AXIOS from 'axios';
import types from '../Reducer/types';


export const updateCurrentNode = ({ moveTo /* 'next' or 'back' */ }) => {
    return async (dispatch, state) => {
        try {
            const currentNode = state.currentNode[moveTo];
            return dispatch({
                type: types.CURRENT_NODE_UPDATE,
                payload: currentNode,
            });
        } catch(error) {
            return console.error(error.message);
        };
    };
};
