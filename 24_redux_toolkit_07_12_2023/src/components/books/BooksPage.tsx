import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/storeRTK";
import EditForm from "./EditForm";
import { deleteBook } from "../../redux/book/bookSlice";
import './librarystyle.css'

const BooksPage: React.FC = (): JSX.Element => {
  const books = useSelector((state: RootState) => state.library.books);

  const dispatch = useDispatch();

  return (
    <div className="container_booksPage">
      <h1 className="header">Books in our library:</h1>
      <ul className="container">
        {books.map(({ author, isbn, title, year }) => (
          <li className="item" key={isbn}>
            <div className="book_info">
             <p>ISBN: {isbn}</p>
             <p>Title: "{title}"</p> 
             <p>Author: {author}</p>
             <p>Year: {year}</p>
            </div>
            <button className="btn" onClick={() => dispatch(deleteBook(isbn))}>
              Delete Book
            </button>
            <EditForm isbn={isbn} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
