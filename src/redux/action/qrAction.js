import { ActionTypes } from "../constants/actiontypes";

export const fetchQRProducts = () => ({
    type: ActionTypes.FETCH_QR_REQUEST,
  });
  
  export const fetchQRProductsSuccess = (products) => ({
    type: ActionTypes.FETCH_QR_SUCCESS,
    payload: products,
  });
  
  export const fetchQRProductsFailure = (error) => ({
    type: ActionTypes.FETCH_QR_FAILURE,
    payload: error,
  });