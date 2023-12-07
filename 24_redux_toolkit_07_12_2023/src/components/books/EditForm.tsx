import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTitle } from '../../redux/book/bookSlice';

const EditForm: React.FC<{isbn: string}> = ({isbn}): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editTitle({isbn: isbn, title:title}));
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <button type="submit">Edit</button>
        </form>
    )
}

export default EditForm