import { useContext } from "react";
import { TheContext } from "./store";

const useTheContext = () => useContext(TheContext);

export const useSelector = (callback) => {
    const { state } = useTheContext();
    return callback(state);
};

export const useDispatch = () => {
    const { dispatchFunction } = useTheContext();
    return dispatchFunction;
};
