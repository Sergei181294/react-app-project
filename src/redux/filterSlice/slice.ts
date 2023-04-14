import { createSlice } from "@reduxjs/toolkit";



export interface FilterStore {
       categoryId: number;
       sort: {
              name: string;
              sortProperty: string;
       }
}

const initialState: FilterStore = {
       categoryId: 0,
       sort: {
              name: "популярности",
              sortProperty: "rating",
       }
}

export const { reducer, actions } = createSlice({
       name: "filters",
       initialState,
       reducers: {
              setCategoryId(state, action) {
                     state.categoryId = action.payload;
              },
              setSort(state, action) {
                     state.sort = action.payload;
              }
       }

})

