import { FC } from "react";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { actions } from "../../redux/cartSlice/slice";
import { getItemsFromCart } from "../../redux/cartSlice/selectors";

interface PizzaBlockProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: number;
}

export const PizzaBlock: FC<PizzaBlockProps> = ({ title, price, imageUrl, sizes, types, id }) => {

  const typeNames = ["тонкое", "традиционное"];

  const [activeTypes, setActiveTypes] = useState(0);
  const [activeSizes, setActiveSizes] = useState(0);
  const itemsInCart = useAppSelector(getItemsFromCart)
  const itemInCart = itemsInCart.find((obj) => obj.id === id)
  const addedCount = itemInCart ? itemInCart.count : 0;

  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item = {
      id, title, price, imageUrl, type: typeNames[activeTypes], size: sizes[activeSizes]
    }
    dispatch(actions.addItem(item))
  }

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveTypes(type)}
                className={activeTypes === type ? "active" : ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSizes(i)}
                className={activeSizes === i ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <PlusOutlined />
            <span>Добавить</span>
            {addedCount> 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
