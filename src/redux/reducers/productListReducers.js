import { ActionTypes } from '../constants/actiontypes';

export const productReducers = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCT_LIST:
          return {
            ...state,
            productList: action.data,
          };
        default:
          return state;
      }
};