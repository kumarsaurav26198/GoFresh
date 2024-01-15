import { ActionTypes } from '../constants/actiontypes';

export const userReducers = (state = [], action) => {
    switch (action.type)
    {
        case ActionTypes.SET_USER_LIST:
            //logic for SET_PRODUCT_LIST 
            console.warn("  SET_USER_LIST Reducers", action.data);
            return {
                ...state,
                userList: action.data,
              };

        default:
            return state;
    }
};