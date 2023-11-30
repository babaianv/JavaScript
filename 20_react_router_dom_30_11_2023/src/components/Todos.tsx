import React, { useEffect, useState } from 'react'


interface ITodos{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const Todos = () => {

    const [todoList, setTodoList] = useState<ITodos[] | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res => res.json())
          .then(data => setTodoList(data))
    }, [])

  return (
    <>
        {
            todoList && 
            todoList.map((todo,index) => (
                <React.Fragment key={index}>
                {todo.title} {todo.completed}      
                </React.Fragment>

            ))
           
        }
    </>
  );
};

export default Todos