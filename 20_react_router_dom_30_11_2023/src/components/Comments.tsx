import React, {useState, useEffect} from 'react'
import Comment from './Comment';


interface IComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body:string
}



const Comments: React.FC = (): JSX.Element => {

  const [comments, setComments] = useState<IComments[] | null>(null)

  useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => setComments(data))
  }, []);

  return (
    <ul>
        {comments?.map(({postId, id, name, email, body}, index) => (
            <Comment key = {index} postId={postId} id={id} name={name} email={email} body={body}/>
        ))
    }
    </ul>
  )
};

export default Comments