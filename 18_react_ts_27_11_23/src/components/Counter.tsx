import React, { useState, FC } from "react";



const Counter = () => {


//  const Counter: FC = (): JSX.Element => {

 

  const [count, setCount] = useState<number>(0);

  const changeCountByBtn = (x: number):void => setCount(count+ x);



    return (
    <>
    <h2>Counter: {count}</h2>
    <button onClick ={():void => changeCountByBtn(-1)}>Decrement</button>
    <button onClick ={():void=> changeCountByBtn(-10)}>Decrement10</button>
    <button onClick={():void => setCount(count +1)}>Increment</button>
    <button onClick={():void => setCount(count +10)}>Increment10</button>
    </>
    );
 }

// }

export default Counter;