import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as filterReducer } from "./filterSlice/slice"
 

const reducer = combineReducers({
       filters: filterReducer,
});


export const store = configureStore({
       reducer: reducer
})

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch