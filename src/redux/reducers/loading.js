import { ActionTypes } from '../constants/actiontypes';

export const loading = (state =false, action) => {
    switch (action.type)
    {
        case ActionTypes.START_LOADING:
            //logic for START_LOADINGSTART_LOADING
            console.warn("  START_LOADING Reducers", ActionTypes.START_LOADING);
             return { ...state, loading: true };
        case ActionTypes.STOP_LOADING:
            //logic for STOP_LOADING
            console.warn("  STOP_LOADING Reducers", ActionTypes.STOP_LOADING);
             return { ...state, loading: false };
        default:
            return state;
    }
};
