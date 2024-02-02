import { ActionTypes } from "../constants/actiontypes";


export const registerUser = (payload) => ({
    type: ActionTypes.REGISTER_USER,
    payload: payload
});
export const registerSuccess = (data) => ({
    type: ActionTypes.REGISTER_USER_SUCCESS,
    payload: data
});
export const registerFailure = (error) => ({
    type: ActionTypes.REGISTER_USER_FAILURE,
    payload: error
});

export const loginRequest = (payload) => ({
    type: ActionTypes.LOGIN_REQUEST,
    payload: payload
});
export const loginSucess = (data) => ({
    type: ActionTypes.LOGIN_REQUEST_SUCCESS,
    payload:data
});
export const loginFailure = (error) => ({
    type: ActionTypes.LOGIN_REQUEST_FAILURE,
    payload: error
});