import { useState, useEffect } from "react"
import { Categories, Sort, PizzaBlock, Sceleton } from "../../components"
import type { PizzaItem } from "../../types/PizzaItem";


export const Home = () => {
       const [items, setItems] = useState<PizzaItem>([]);
       const [isLoading, setIsLoading] = useState(true);
       const [categoryId, setCategoryId] = useState(0);
       const [sortType, setSortType] = useState({ name: "популярности", sortProperty: "rating" });

       useEffect(() => {
              setIsLoading(true);

              const category = categoryId > 0 ? `category=${categoryId}` : "";
              const sortBy = sortType.sortProperty.replace("-", "");
              const order = sortType.sortProperty.includes("-") ? "asd" : "desc";

              fetch(`https://63de7bcc3d94d02c0babff3a.mockapi.io/types?
              ${category}&sortBy=${sortBy}&order=${order}`)
                     .then((res) => res.json())
                     .then((arr) => {
                            setItems(arr);
                            setIsLoading(false);
                     })
              window.scrollTo(0, 0)
       }, [categoryId, sortType]);


       return (
              <div className="container">
                     <div className="content__top">
                            <Categories value={categoryId} onChangeCategory={(id: any) => setCategoryId(id)} />
                            <Sort value={sortType} onChangeSort={(id: any) => setSortType(id)} />
                     </div>
                     <h2 className="content__title">Все пиццы</h2>
                     <div className="content__items">
                            {isLoading
                                   ? [... new Array(6)].map((_, index) => <Sceleton key={index} />)
                                   : items.map((pizza) => (<PizzaBlock key={pizza.id} {...pizza} />))}
                     </div>
              </div>
       )
}