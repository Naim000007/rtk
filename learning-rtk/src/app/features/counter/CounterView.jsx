import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incresebyamount } from './CounterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count); // Extract the count value from the state
    console.log(count); // You can log the count here
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2> {/* Display the count value */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incresebyamount(5))}>increseby amount</button>
        </div>
    )
}

export default CounterView;
