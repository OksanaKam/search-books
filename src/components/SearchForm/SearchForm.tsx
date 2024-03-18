import { FC } from "react";
import style from "./styles.module.scss";

type Props = {
  query: string,
  validMessage: string,
  handleSubmit: any,
  onChange: any,
}

const SearchForm: FC<Props> = ({ query,
                      validMessage,
                      handleSubmit,
                      onChange }) => {
  return (
    <section className={style.search}>
      <form className={style.search__form} onSubmit={handleSubmit} noValidate>
        <div className={style.search__inputs}>
          <input className={style.search__input}
                 name="search"
                 placeholder="Search book"
                 type="text"
                 value={query}
                 onChange={onChange}/>
          <button className={style.search__button} type="submit"></button>
        </div>
        <span className={style.search__error}>{validMessage}</span>
      </form>
    </section>
  )
}

export default SearchForm;