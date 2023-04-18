import { createSlice } from "@reduxjs/toolkit";

export interface FilterStore {
       categoryId: number;
       currentPage: number;
       countPizzas: number;
       sort: {
              name: string;
              sortProperty: string;
       }
}

const initialState: FilterStore = {
       categoryId: 0,
       currentPage: 1,
       countPizzas: 5,
       sort: {
              name: "популярности",
              sortProperty: "rating",
       }
}

export const { reducer, actions } = createSlice({
       name: "filters",
       initialState,
       reducers: {
              
       }

})