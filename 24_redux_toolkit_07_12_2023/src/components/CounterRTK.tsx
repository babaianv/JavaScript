import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/storeRTK';
import { decrement, increment } from '../redux/counter/counterSlice';

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch(decrement(-1))
    }

    const handlePlus = () => {
        dispatch(increment(1))
    }

    const handleMinus10 = () => {
        dispatch(decrement(-10))
  }

  const handlePlus10 = () => {
        dispatch(increment(10))
  }

  return (
    <div>
        <div>Counter: {counter} </div>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleMinus10}>Minus10</button>
        <button onClick={handlePlus10}>Plus10</button>
    </div>
  )
}

export default Counter