import logoPizza from "../../assets/img/pizza-logo.svg"
import { Link } from "react-router-dom"
import { Search } from "../Search";
import { ShoppingCartOutlined } from "@ant-design/icons";



export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoPizza} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <ShoppingCartOutlined />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
