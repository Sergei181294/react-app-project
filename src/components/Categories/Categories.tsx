import { useState } from "react";

const arrayCategories = [
  { value: "Все", id: 0 },
  { value: "Мясные", id: 1 },
  { value: "Вегетарианская", id: 2 },
  { value: "Гриль", id: 3 },
  { value: "Острые", id: 4 },
  { value: "Закрытые", id: 5 },
];

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {arrayCategories.map((pizza) => (
          <li
            key={pizza.value}
            onClick={() => setActiveIndex(pizza.id)}
            className={activeIndex === pizza.id ? "active" : ""}
          >
            {pizza.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
