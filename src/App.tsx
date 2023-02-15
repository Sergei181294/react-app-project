import "./scss/app.scss";
import { Header, Categories, Sort, PizzaBlock } from "./components";
import { useState, useEffect } from "react";
// import pizzas from "./assets/pizzas.json";
type PizzaItem = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}[];
export const App = () => {
  const [items, setItems] = useState<PizzaItem>([]);

  useEffect(() => {
    fetch("https://63de7bcc3d94d02c0babff3a.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((pizza) => (
                <PizzaBlock {...pizza} key={pizza.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
