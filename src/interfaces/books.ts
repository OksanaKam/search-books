export interface IVolumeInfo {
  title: string;
  authors: string[];
  description: string;
  categories: string[];
  previewLink: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
  };
  publisher: string;
  publishedDate: string;
  language: string;
  pageCount: number;
}

export interface IBook {
  id: string;
  volumeInfo: IVolumeInfo;
}

export interface IBooksApi {
  totalItems: number;
  items: IBook[];
}

export interface IBookApi {
  id: string;
}

export type TBooksArgs = {
  query?: string;
  categories: string,
  orderBy: string;
  startIndex: number;
  maxResults: number;
}

export interface Books {
  totalItems: number;
  books: {
    id: string;
    volumeInfo: {
      title?: string;
      subtitle?: string;
      authors?: string[];
      categories?: string[];
      description?: string;
      imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  };
};

export interface ICategories {
  id: number;
  category: string;
}