import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as filterReducer } from "./filterSlice/slice"
import { reducer as cartReducer } from "./cartSlice/slice"
 

const reducer = combineReducers({
       filters: filterReducer,
       cart: cartReducer,
});


export const store = configureStore({
       reducer: reducer
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch