import { FC, useEffect, useState } from "react";
import style from "./styles.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import BooksCardList from "../BooksCardList/BooksCardList";
import Preloader from "../Preloader/Preloader";
import { useGetBooksQuery } from "../../utils/books-api-slice";
import { actions } from "../../store/booksReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Categories from "../Categories/Categories";
import Sorting from "../Sorting/Sorting";
import { ERROR_TEXT } from "../../utils/constants";
import Header from "../Header/Header";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";

const Books: FC = () => {

  const dispatch = useAppDispatch();
  const query = useAppSelector((store: any) => store.books.query);
  const category = useAppSelector((store: any) => store.books.categories);
  const sorting = useAppSelector((store: any) => store.books.orderBy);
  const startIndex = useAppSelector((store: any) => store.books.startIndex);
  const displayAmount = useAppSelector((store: any) => store.books.maxResults);

  const args = {
    query: query,
    categories: category || 'all',
    orderBy: sorting || 'relevance',
    startIndex: startIndex,
    maxResults: displayAmount
  };

  const {data: books, isLoading, isSuccess} = useGetBooksQuery(args);

  const [validMessage, setValidMessage] = useState('');
/*
  useEffect(() => {
    dispatch(actions.clearBooks);
  }, [dispatch]);
*/
  useEffect(() => {
    if (query) {
      dispatch(actions.getBooks(books?.items ? books.items : []));
    }
  }, [books, dispatch, query]);

  useEffect(() => {
    setValidMessage('');
  }, [query]);

  function onChange(e: any) {
    dispatch(actions.setQuery(e.target.value))
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    query ? isLoading : setValidMessage(ERROR_TEXT.ERROR_QUERY);
  }

  function handleLoadBooks() {
    dispatch(actions.setStartIndex(startIndex + 30));
  }

  function onChangeCategory(e: any) {
    dispatch(actions.setCategory(e.target.value));
  }

  function onChangeSorting(e: any) {
    dispatch(actions.setSorting(e.target.value));
  }

  return (
    <>
      <Header />
      <main className={style.books}>
        <SearchForm query={query}
                  validMessage={validMessage}
                  handleSubmit={handleSubmit}
                  onChange={onChange} />
        <div className={style.books__filter}>
          <Categories onChange={onChangeCategory} />
          <Sorting onChange={onChangeSorting} />
        </div>
        {isLoading ?
          <Preloader />
        : books?.items.length !== 0 && isSuccess && (
          <>
            <p className={style.books__count}>Found {books.totalItems} books</p>
            <BooksCardList books={books.items} />
            <button
              className={style.books__more}
              type="button"
              onClick={() => handleLoadBooks()}
            >
              Load more
            </button>
          </>
        )}
        <ScrollUpButton />
      </main>
    </>
  )
}

export default Books;