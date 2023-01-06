import { createContext, useReducer } from "react";
import reducer from './Reducer';
import initialState from "./Reducer/initialState";


export const TheContext = createContext();

export const TheContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const dispatchFunction = (callback) => {
        return callback(dispatch, state);  // Se pasa el state como argumento por si es necesesario recurrir a él desde las actions, evitando lógica en el reducer.
    };

    return (
        <TheContext.Provider value={{ state, dispatchFunction }}>
            {props.children}
        </TheContext.Provider>
    );
};
