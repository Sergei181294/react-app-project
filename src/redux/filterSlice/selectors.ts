import type { RootStore } from "..";
import { FilterStore } from "./slice";

export const getCategoryId = (store: RootStore):FilterStore["categoryId"] => store.filters.categoryId;

export const getSort = (store: RootStore): FilterStore["sort"] => store.filters.sort;

export const getCurrentPage = (store: RootStore): FilterStore["currentPage"] => store.filters.currentPage;

export const getCountPizzas = (store: RootStore): FilterStore["countPizzas"] => store.filters.countPizzas;

