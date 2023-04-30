import React, { useEffect, useCallback, FC } from "react"
import { Categories, Sort, PizzaBlock, Sceleton } from "../../components"
import { fetchPizzas } from "../../redux/pizzaSlice/slice";
import { Pagination } from "antd"
import scss from "./home.module.scss"
import { SearchContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCategoryId, getCountPizzas, getCurrentPage, getSort } from "../../redux/filterSlice/selectors";
import { actions } from "../../redux/filterSlice/slice";
import { getLoadStatus, getPizzaItems } from "../../redux/pizzaSlice/selectors";
import { LOAD_STATUSES_TYPES } from "../../types/LoadStatuses";
import axios from "axios";

export const Home: FC = () => {
       const dispatch = useAppDispatch()

       const { searchValue }: any = React.useContext(SearchContext)
       const isLoading = useAppSelector(getLoadStatus)
       const items = useAppSelector(getPizzaItems)

       const categoryId = useAppSelector(getCategoryId)
       const sortType = useAppSelector(getSort)
       const currentPage = useAppSelector(getCurrentPage)
       const pageSize = useAppSelector(getCountPizzas)

       const getPizzas = async () => {

              const category = categoryId > 0 ? `category=${categoryId}` : "";
              const sortBy = sortType.sortProperty.replace("-", "");
              const order = sortType.sortProperty.includes("-") ? "asd" : "desc";
              const search = searchValue ? `&search=${searchValue}` : "";

              dispatch(fetchPizzas({ category, sortBy, order, search, currentPage, pageSize }));
       }

       
       useEffect(() => {
              window.scrollTo(0, 0)
              getPizzas();
       }, [categoryId, sortType, searchValue, currentPage, pageSize]);

       const pizzas = items.map((pizza: any) => <PizzaBlock  {...pizza} key={pizza.id} />)
       const sceleton = [... new Array(6)].map((_, index) => <Sceleton key={index} />)

       return (
              <div className="container">
                     <div className="content__top">
                            <Categories value={categoryId} onChangeCategory={useCallback((id: number) => dispatch(actions.setCategoryId(id)), [])} />
                            <Sort />
                     </div>
                     {isLoading === LOAD_STATUSES_TYPES.SET_ERROR ?
                            <div className="content__error-info">
                                   <h2 >Произошла ошибка 😕</h2>
                                   <p>К сожалению не удалось получить данные. Попробуйте повторить попытку позже.</p>
                            </div> :
                            <>
                                   <h2 className="content__title">Все пиццы</h2>
                                   <div className="content__items">
                                          {isLoading === LOAD_STATUSES_TYPES.SET_LOADING ? sceleton : pizzas}
                                   </div>
                                   <Pagination
                                          pageSizeOptions={[5, 10]}
                                          showSizeChanger={true}
                                          className={scss.pagination}
                                          current={currentPage}
                                          pageSize={pageSize}
                                          total={10}
                                          onChange={((page: number, pageSize: number) => {
                                                 dispatch(actions.setCurrentPage(page))
                                                 dispatch(actions.setCountPizzas(pageSize))
                                          })
                                          }
                                   />
                            </>}

              </div>
       )
}