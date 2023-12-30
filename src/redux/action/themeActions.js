import { ActionTypes } from "../constants/actiontypes";

export const changeTheme = type => ({
    type: ActionTypes.CHANGE_THEME,
    payload: type
});

