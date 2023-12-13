import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { editTitle } from "../../redux/book/bookSlice";


const EditForm: React.FC<{ isbn: string }> = ({ isbn }): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTitle({  isbn, title }));
    setTitle("");
  };
  return (
    <div className="container_edit">
      <form onSubmit={handleSubmit}>
      <input className="input"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button className="btn" type="submit">Edit</button>
    </form>
    </div>
  );
};

export default EditForm;
