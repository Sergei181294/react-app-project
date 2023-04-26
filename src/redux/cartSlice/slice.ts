import { createSlice } from "@reduxjs/toolkit";

export interface Pizza {
       id: number;
       imageUrl: string;
       title: string;
       type?: number[];
       size: number[];
       price: number;
       category?: number;
       rating?: number;
       count: number;
}

export interface CartStore {
       totalPrice: number;
       items: Pizza[]
}

const initialState: CartStore = {
       totalPrice: 0,
       items: [],
}

export const { reducer, actions } = createSlice({
       name: "cart",
       initialState,
       reducers: {
              addItem(state, action) {
                     const findItem = state.items.find((obj) => obj.id === action.payload.id)
                     if (findItem) {
                            findItem.count++
                     } else {
                            state.items.push({
                                   ...action.payload,
                                   count: 1
                            })
                     }
                     state.totalPrice = state.items.reduce((sum: number, obj: Pizza) => {
                            console.log(action.payload)
                            return obj.price * obj.count + sum;
                     }, 0)

              },
              minusItem(state, action) {
                     const findItem = state.items.find((obj) => obj.id === action.payload)
                     if (findItem && findItem.count > 0) {
                            findItem.count--;
                            state.totalPrice = state.items.reduce((sum: number, obj: Pizza) => {
                                   return obj.price * obj.count + sum;
                            }, 0)
                     }
                     if (!findItem?.count) {
                            state.items = state.items.filter(item => item.count > 0)
                     }
              },
              removeItem(state, action) {
                     state.items = state.items.filter((item: Pizza) => item.id !== action.payload)
              },
              clearItems(state) {
                     state.items = [];
                     state.totalPrice = 0;
              },

       }

})