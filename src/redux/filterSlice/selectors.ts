import type { RootStore } from "..";
import { FilterStore } from "./slice";

export const getCategoryId = (store: RootStore):FilterStore["categoryId"] => store.filters.categoryId;

export const getSort = (store: RootStore): FilterStore["sort"] => store.filters.sort

