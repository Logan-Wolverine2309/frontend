import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import restaurantreducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";

const rooteReducer=combineReducers ({
    auth: authReducer,
    restaurant:restaurantreducer,
    menu:menuItemReducer,
});


export const store=legacy_createStore(rooteReducer,applyMiddleware (thunk));
