import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }

    const reset = () => {
        setCount(count => count = 0);
    }

    return (
        <section className='container'>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <div className="btn-container">
                <button className='btn' onClick={increment}>Increment</button>
                <button className='btn' onClick={reset}>Reset</button>
                <button className='btn' onClick={decrement}>Decrement</button>
            </div>
        </section>
    )
}
