import { FC } from "react";
import style from "./styles.module.scss";
import BooksCard from "../BooksCard/BooksCard";
import { IBook } from "../../interfaces/books";

interface IProps {
  books: IBook[];
}

const BooksCardList: FC<IProps> = ({ books }) => {

  return (
    <section className={style.list}>
      <ul className={style.list__container}>
        {books.map((book) => {
          return (
            <BooksCard key={book.id} book={book} />
          );
        })}
      </ul>
    </section>
  )
}

export default BooksCardList;