import { FC } from "react";

interface CategoryProps {
  value: number;
  onChangeCategory: (i: number) => void;
}

const arrayCategories = [
  { value: "Все", id: 0 },
  { value: "Мясные", id: 1 },
  { value: "Вегетарианская", id: 2 },
  { value: "Гриль", id: 3 },
  { value: "Острые", id: 4 },
  { value: "Закрытые", id: 5 },
];

export const Categories: FC<CategoryProps> = ({ value, onChangeCategory }) => {

  return (
    <div className="categories">
      <ul>
        {arrayCategories.map((categoryName, i) => (
          <li
            key={categoryName.value}
            onClick={() => onChangeCategory(categoryName.id)}
            className={value === categoryName.id ? "active" : ""}
          >
            {categoryName.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
