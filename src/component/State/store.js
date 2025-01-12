import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import restaurantreducer from "./Restaurant/Reducer";

const rooteReducer=combineReducers ({
    auth: authReducer,
    restaurantreducers:restaurantreducer
});


export const store=legacy_createStore(rooteReducer,applyMiddleware (thunk));
