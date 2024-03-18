import { FC } from "react";
import style from "./styles.module.scss";
import { IBook } from "../../interfaces/books";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { actions } from "../../store/booksReducer";
//import * as ImageNotFound from "../../assets/images/purple-search.svg";

interface IProps {
  book: IBook;
}

const BooksCard: FC<IProps> = ({ book }) => {
  const logo = require("../../assets/images/purple-search.svg")

  const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : logo;
  const dispatch = useAppDispatch();

  return (
    <Link className={style.book} to={`/book/${book.id}`} onClick={() => dispatch(actions.getCurrentBook(book))}>
      <li>
        <img
          className={style.book__image}
          src={imageLink}
          alt={book.volumeInfo.title}></img>
        <h2 className={style.book__title}>{book.volumeInfo.title}</h2>
        <p className={style.book__author}>{book.volumeInfo.authors}</p>
        <p className={style.book__category}>{book.volumeInfo.categories}</p>
      </li>
    </Link>
  )
}

export default BooksCard;