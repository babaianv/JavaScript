import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/book/bookSlice";
import { uid } from "uid";
import './librarystyle.css'

const CreateBook: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBook = {
      isbn: uid(),
      title: title,
      author: author,
      year: year,
    };

    dispatch(addBook(newBook));

    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="container_createBook">
      <h1 className="header">Create book</h1>

      <form className= "form_container" onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <input className="input"
          type="text"
          placeholder="author"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          required
        />
        <input className="input"
          type="text"
          placeholder="year"
          value={year}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setYear(e.target.value)
          }
          required
        />

        <button className="btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default CreateBook;
