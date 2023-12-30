import { ActionTypes } from "../constants/actiontypes";

 // Set your default language here

export const languageReducer = (state = "English", action) => {
  switch (action.type) {
    case ActionTypes.SELECT_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
