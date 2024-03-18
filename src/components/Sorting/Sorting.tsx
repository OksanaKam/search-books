import { FC } from "react";
import style from "./styles.module.scss";
import { SORTING } from "../../utils/constants";

type Props = {
  onChange: any,
}

const Sorting: FC<Props> = ({ onChange }) => {
  return (
    <form className={style.sorting}>
      <label className="sorting__title" htmlFor="categories">Sorting by</label>
      <select
        className={style.sorting__select}
        name="sorting"
        id="sorting"
        onChange={onChange}
      >
      {SORTING.map((sort) => (
        <option
          key={sort.id}
          value={sort.category}
        >
          {sort.category}
        </option>
      ))}
      </select>
    </form>
  )
}

export default Sorting;