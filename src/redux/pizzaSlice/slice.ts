import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { LOAD_STATUSES_TYPES } from "../../types/LoadStatuses";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params: { category?: string, sortBy?: string, order?: string, search?: string, currentPage?: number, pageSize?: number }) => {
       const { category, sortBy, order, search, currentPage, pageSize } = params
       const res = await axios.get(
              `https://63de7bcc3d94d02c0babff3a.mockapi.io/types?${category}&sortBy=${sortBy}&order=${order}${search}&limit=${pageSize}&page=${currentPage}`)
       return res.data
})

export interface Pizza {
       title: string;
       price: number;
       imageUrl: string;
       sizes: number[];
       types: number[];
       id: number;
}

export interface PizzaStore {
       items: Pizza[];
       loadStatus: LOAD_STATUSES_TYPES;
}

const initialState: PizzaStore = {
       items: [],
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
}

export const { reducer, actions } = createSlice({
       name: "pizza",
       initialState,
       reducers: {
              setItems(state, action) {
                     state.items = action.payload;
              }
       },
       extraReducers: (builder) => {
              builder.addCase(fetchPizzas.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING
              });
              builder.addCase(fetchPizzas.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR
              });
              builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED
                     state.items = action.payload
              });

       }
})

export const { setItems } = actions;