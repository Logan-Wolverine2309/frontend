// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust the path to your root reducer

const store = configureStore({
    reducer: rootReducer,
});

export default store;