import {ActionTypes} from '../constants/actiontypes';
const initialState = {
  wishlistItems: [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

export const wishlistReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_TO_WISHLIST:
      //logic for ADD_TO_WISHLIST
      const wishlistTotalQuantity = console.warn(
        '  ADD_TO_WISHLIST Reducers',
        ActionTypes.ADD_TO_WISHLIST,
      );
      return {...state, wishlistItems: payload};

    case ActionTypes.REMOVE_FROM_WISHLIST:
      //logic for REMOVE_FROM_WISHLIST

      console.warn(
        '  REMOVE_FROM_WISHLIST Reducers',
        ActionTypes.REMOVE_FROM_WISHLIST,
      );
      const deleteArry = state.filter((item, index) => {
        return index !== payload;
      });

      return deleteArry;
    default:
      return initialState;
  }
};
