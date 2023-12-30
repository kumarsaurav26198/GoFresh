import { ActionTypes } from '../constants/actiontypes';

export const cartReducers = (state = [], action) => {
    switch (action.type)
    {
        case ActionTypes.ADD_TO_CART:
            //logic for ADD_TO_CART
            console.warn("  ADD_TO_CART Reducers", ActionTypes.ADD_TO_CART);
            return [...state, action.payload];

        case ActionTypes.REMOVE_FROM_CART:
            //logic for REMOVE_FROM_CART

            console.warn("  REMOVE_FROM_CART Reducers", ActionTypes.REMOVE_FROM_CART);
            const deleteArry = state.filter((item, index) => {
                return index !== action.type.payload;
            });

            return deleteArry;
        default:
            return state;
    }
};