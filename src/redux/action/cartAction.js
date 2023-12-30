import { ActionTypes } from "../constants/actiontypes";

export const addItemToCart = data => ({
    type: ActionTypes.ADD_TO_CART,
    payload: data
});


export const removeFromCart = index => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: index
});