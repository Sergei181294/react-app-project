import type { RootStore } from "..";
import { PizzaStore } from "./slice";

export const getPizzaItems = (store: RootStore):PizzaStore["items"] => store.pizza.items;

export const getLoadStatus = (store: RootStore):PizzaStore["loadStatus"] => store.pizza.loadStatus;
