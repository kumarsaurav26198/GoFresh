import { ActionTypes } from '../constants/actiontypes';
const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  

export const qrReducers = (state = initialState, action) => {
    switch (action.type)
    {
        case ActionTypes.FETCH_QR_REQUEST:
            console.warn("FETCH_QR_REQUEST Reducers", ActionTypes.FETCH_QR_REQUEST);
            console.log("FETCH_QR_REQUEST Reducers action===>", action.type);
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ActionTypes.FETCH_QR_SUCCESS:
            console.warn("FETCH_QR_SUCCESS Reducers", ActionTypes.FETCH_QR_SUCCESS);
            console.log("FETCH_QR_SUCCESS Reducers action===>", action.payload);
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case ActionTypes.FETCH_QR_FAILURE:
            console.warn("FETCH_QR_FAILURE Reducers", ActionTypes.FETCH_QR_FAILURE);
            console.log("FETCH_QR_FAILURE Reducers action===>", action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
