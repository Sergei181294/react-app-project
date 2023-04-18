import React, { useState, useEffect, useRef, useCallback } from "react"
import { Categories, Sort, PizzaBlock, Sceleton } from "../../components"
import type { PizzaItem } from "../../types/PizzaItem";
import { Pagination } from "antd"
import scss from "./home.module.scss"
import { SearchContext } from "../../App";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getCategoryId, getCountPizzas, getCurrentPage, getSort } from "../../redux/filterSlice/selectors";
import { actions } from "../../redux/filterSlice/slice";
import axios from "axios"




export const Home = () => {
       const dispatch = useAppDispatch()

       const { searchValue }: any = React.useContext(SearchContext)
       const [items, setItems] = useState<PizzaItem>([]);
       const [isLoading, setIsLoading] = useState(true);


       const categoryId = useAppSelector(getCategoryId)
       const sortType = useAppSelector(getSort)
       const currentPage = useAppSelector(getCurrentPage)
       const pageSize = useAppSelector(getCountPizzas)

       const fetchPizzas = () => {
              setIsLoading(true);

              const category = categoryId > 0 ? `category=${categoryId}` : "";
              const sortBy = sortType.sortProperty.replace("-", "");
              const order = sortType.sortProperty.includes("-") ? "asd" : "desc";
              const search = searchValue ? `&search=${searchValue}` : "";

              axios.get(`https://63de7bcc3d94d02c0babff3a.mockapi.io/types?${category}&sortBy=${sortBy}&order=${order}${search}&limit=${pageSize}&page=${currentPage}`)
                     .then((res) => {
                            setItems(res.data);
                            setIsLoading(false);
                     })
       }

       useEffect(() => {
              window.scrollTo(0, 0)    
                     fetchPizzas();
       }, [categoryId, sortType, searchValue, currentPage, pageSize]);

       

       const pizzas = items.map((pizza) => (<PizzaBlock key={pizza.id} {...pizza} />))
       const sceleton = [... new Array(6)].map((_, index) => <Sceleton key={index} />)


       return (
              <div className="container">
                     <div className="content__top">
                            <Categories value={categoryId} onChangeCategory={useCallback((id: number) => dispatch(actions.setCategoryId(id)), [])} />
                            <Sort />
                     </div>
                     <h2 className="content__title">Все пиццы</h2>
                     <div className="content__items">
                            {isLoading ? sceleton : pizzas}
                     </div>
                     <Pagination
                            pageSizeOptions={[5, 10]}
                            showSizeChanger={true}
                            className={scss.pagination}
                            current={currentPage}
                            pageSize={pageSize}
                            total={10}
                            onChange={((page, pageSize) => {
                                   dispatch(actions.setCurrentPage(page))
                                   dispatch(actions.setCountPizzas(pageSize))
                            })
                            }
                     />
              </div>
       )
}