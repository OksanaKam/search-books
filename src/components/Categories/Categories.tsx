import { FC } from "react";
import style from "./styles.module.scss";
import { CATEGORIES } from "../../utils/constants";

type Props = {
  onChange: any,
}

const Categories: FC<Props> = ({ onChange }) => {

  return (
    <form className={style.categories}>
      <label className="categories__title" htmlFor="categories">Categories</label>
      <select
        className={style.categories__select}
        name="categories"
        id="categories"
        onChange={onChange}
      >
      {CATEGORIES.map((category) => (
        <option
          key={category.id}
          value={category.category}
        >
          {category.category}
        </option>
      ))}
      </select>
    </form>
  )
}

export default Categories;