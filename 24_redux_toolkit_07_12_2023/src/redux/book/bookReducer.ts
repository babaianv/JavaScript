import { bookAction } from "./bookAction";
import { BookState } from "./bookState";
import { uid } from "uid";

export const initialState = {
  books: [
    { isbn: "1", title: "Harry Potter", author: "J.Rowling", year:" 1997" },
  ],
};

export default function booksReducer(
  state: BookState = initialState,
  action: bookAction
): BookState {
  switch (action.type) {
    case "books/add":
      return {
        ...state,
        books: [...state.books, { isbn: uid(), ...action.payload }],
      };
    case "books/delete":
      return {
        ...state,
        books: [...state.books.filter((book) => book.isbn !== action.payload)],
      };
    case "books/editTitle":
      return {
        ...state,
        books: state.books.map((book) =>
          book.isbn === action.payload.isbn
            ? { ...book, title: action.payload.title }
            : book
        ),
      };
    default:
      return state;
  }
}
