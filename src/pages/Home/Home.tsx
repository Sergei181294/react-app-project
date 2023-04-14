import React, { useState, useEffect } from "react"
import { Categories, Sort, PizzaBlock, Sceleton } from "../../components"
import type { PizzaItem } from "../../types/PizzaItem";
import { Pagination } from "antd"
import scss from "./home.module.scss"
import { SearchContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCategoryId, getSort } from "../../redux/filterSlice/selectors";
import { actions } from "../../redux/filterSlice/slice";



export const Home = () => {

       const { searchValue }: any = React.useContext(SearchContext)

       const [items, setItems] = useState<PizzaItem>([]);
       const [isLoading, setIsLoading] = useState(true);
       const [params, setParams] = useState<{ page: number, limit: number }>({ page: 1, limit: 5 })

       const categoryId = useAppSelector(getCategoryId)
       const dispatch = useAppDispatch()
       const sortType = useAppSelector(getSort)

       useEffect(() => {
              setIsLoading(true);

              const category = categoryId > 0 ? `category=${categoryId}` : "";
              const sortBy = sortType.sortProperty.replace("-", "");
              const order = sortType.sortProperty.includes("-") ? "asd" : "desc";
              const search = searchValue ? `&search=${searchValue}` : "";

              fetch(`https://63de7bcc3d94d02c0babff3a.mockapi.io/types?${category}&sortBy=${sortBy}&order=${order}${search}&limit=${params.limit}&page=${params.page}`)
                     .then((res) => res.json())
                     .then((arr) => {
                            setItems(arr);
                            setIsLoading(false);
                     })
              window.scrollTo(0, 0)
       }, [categoryId, sortType, searchValue, params]);

       const pizzas = items.map((pizza) => (<PizzaBlock key={pizza.id} {...pizza} />))
       const sceleton = [... new Array(6)].map((_, index) => <Sceleton key={index} />)


       return (
              <div className="container">
                     <div className="content__top">
                            <Categories value={categoryId} onChangeCategory={(id: number) => dispatch(actions.setCategoryId(id))} />
                            <Sort />
                     </div>
                     <h2 className="content__title">Все пиццы</h2>
                     <div className="content__items">
                            {isLoading ? sceleton : pizzas}
                     </div>
                     <Pagination
                            className={scss.pagination}
                            current={params.page}
                            pageSize={params.limit}
                            total={10}
                            onChange={(page, pageSize) => {
                                   setParams((prevParams) => ({
                                          ...prevParams,
                                          ...(pageSize !== undefined && { limit: pageSize }),
                                          ...(page !== undefined && { page: page }),
                                   }));
                            }}

                     />
              </div>
       )
}