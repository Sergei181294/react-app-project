import type { RootStore } from "..";
import { CartStore } from "./slice";

export const getTotalPrice = (store: RootStore):CartStore["totalPrice"] => store.cart.totalPrice;

export const getItemsFromCart = (store: RootStore):CartStore["items"] => store.cart.items