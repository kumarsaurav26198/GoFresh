import { ActionTypes } from "../constants/actiontypes";

export const usertList =  () => {
    console.warn(" usertList action is called",)
    return {
        type: ActionTypes.USER_LIST,
    }
}
