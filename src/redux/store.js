import { configureStore } from "@reduxjs/toolkit";
import { cartReducers } from "./reducers/cartReducers";
import {themeReducers} from './reducers/themeReducers';
 import {loading} from './reducers/loading';
 import { languageReducer } from './reducers/languageReducer'

export default configureStore({
    reducer: {
        cartReducers: cartReducers,
        themeReducers:themeReducers,
        loading:loading,
        language:languageReducer,
    },
});