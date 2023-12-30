import { ActionTypes } from "../constants/actiontypes";

export const selectLanguage = (language) => ({
  type: ActionTypes.SELECT_LANGUAGE,
  payload: language,
});
