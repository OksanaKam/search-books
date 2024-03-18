import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../utils/books-api-slice";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;