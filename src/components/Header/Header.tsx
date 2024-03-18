import style from "./styles.module.scss";

const Header = () => {

  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Book Search</h1>
    </header>
  )
}

export default Header;