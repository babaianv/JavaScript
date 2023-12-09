import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

interface Book {
  isbn: string;
  title: string;
  year: string;
  author: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [
    {
      isbn: "1",
      title: "Harry Potter",
      author: "J.Rowling",
      year: "1997",
    },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push({ ...action.payload, isbn: uid() });
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.isbn !== action.payload);
    },
    editTitle: (
      state,
      action: PayloadAction<{ isbn: string; title: string }>
    ) => {
      state.books = state.books.map((book) => {
        if (book.isbn === action.payload.isbn) {
          return { ...book, title: action.payload.title };
        }
        return book;
      });
    },
  },
});

export const { addBook, deleteBook, editTitle } = bookSlice.actions;
export default bookSlice.reducer;
