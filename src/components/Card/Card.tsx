import { FC } from "react";
import style from "./styles.module.scss";
import { useAppSelector } from "../../hooks/hooks";
import Header from "../Header/Header";

const Card: FC  = () => {
  const logo = require("../../assets/images/purple-search.svg");
  const book = useAppSelector((state) => state.books.currentBook);

  const authors = book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(' | ') : book.volumeInfo.authors;

  const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : logo;

  return (
    <>
      <Header />
      <div className={style.card}>
        <img
          className={style.card__image}
          src={imageLink}
          alt={book.volumeInfo.title}></img>
        <div className={style.card__group}>
          <h1 className={style.card__title}>{book.volumeInfo.title}</h1>
          <p className={style.card__author}>{authors}</p>
          <p className={style.card__category}>{book.volumeInfo.categories}</p>
          <p className={style.card__description}>{book.volumeInfo.description}</p>
          <div className={style.card__info}>
            <p className={style.card__category}>Publisher: {book.volumeInfo.publisher}</p>
            <p className={style.card__category}>Publication date: {book.volumeInfo.publishedDate}</p>
            <p className={style.card__category}>Language: {book.volumeInfo.language}</p>
            <p className={style.card__category}>Page count: {book.volumeInfo.pageCount}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;