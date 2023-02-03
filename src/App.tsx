import "./scss/app.scss";
import { Header, Categories, Sort, PizzaBlock } from "./components"




export const App = () => {
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
              <PizzaBlock  title="Чизбургер-пицца" price={500}/>
              <PizzaBlock title="Мексиканская" price={350}/>
              <PizzaBlock title="Баварская" price={400}/>
              <PizzaBlock title="Грибной цыпленок" price={700}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
