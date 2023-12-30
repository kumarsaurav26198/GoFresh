import { ActionTypes } from '../constants/actiontypes';

export const themeReducers = (state =false, action) => {
    switch (action.type)
    {
        case ActionTypes.CHANGE_THEME:
            //logic for CHANGE_THEME
            console.warn("  CHANGE_THEME Reducers", ActionTypes.CHANGE_THEME);
             console.log("CHANGE_THEME Reducers action===>", action.payload)
            return state, action.payload;
        default:
            return state;
    }
};