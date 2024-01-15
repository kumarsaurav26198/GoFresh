import { ActionTypes } from "../constants/actiontypes";

export const productList =  () => {
    console.warn(" productList action is called",)
    return {
        type: ActionTypes.PRODUCT_LIST,
    }
}
