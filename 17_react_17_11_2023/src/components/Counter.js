import React, { useState } from "react";



const Counter = () => {

   const [count, setCount] = useState(0);

  //  const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const increment = () => {
    
  //     setCount(count + 1);
    
  // };

  const changeCountByBtn = (x) => setCount(count+ x);



    return (
    <>
    <h2>Counter: {count}</h2>
    <button onClick ={() => changeCountByBtn(-1)}>Decrement</button>
    <button onClick ={()=> changeCountByBtn(-10)}>Decrement10</button>
    <button onClick={() => setCount(count +1)}>Increment</button>
    <button onClick={() => setCount(count +10)}>Increment10</button>
    </>
    );
}

export default Counter;