import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksApi, TBooksArgs, IBookApi } from '../interfaces/books';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksApi, TBooksArgs>({
      query: (args) => ({
        url: '/volumes',
        params: {
          q: args.query +(args.categories !== 'All' ? `+subject:${args.categories}` : ''),
          /*q: args.query + (args.categories === 'all' ? '' : `+subject:${args.categories}`),*/
          /*subject: args.categories !== 'All' ? `+subject:${args.categories}` : '',*/
          orderBy: args.orderBy,
          startIndex: args.startIndex,
          maxResults: args.maxResults,
          /*key: API_Key*/
        }
      })
    }),
    getBook: builder.query<IBookApi, void>({
      query: (id) => ({
        url: `/volumes/${id}`,
      })
    })
  })
})

export const { useGetBooksQuery, useGetBookQuery } = apiSlice;