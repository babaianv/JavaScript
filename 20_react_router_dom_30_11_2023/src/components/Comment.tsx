import React from 'react'

interface ICommentProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body:string
}

const Comment: React.FC<ICommentProps> = ({postId, id, name, email,body}):JSX.Element => {
  
    return (
        <li>
         postID: = {postId}, id: = {id}, name: = {name}, email: ={email}, body:={body}
      </li>
  )
}

export default Comment