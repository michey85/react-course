import React, { useState } from 'react';

const ClickerFn = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className='count'>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
};

export default ClickerFn;
