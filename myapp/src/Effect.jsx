import React, { useState, useEffect } from 'react';

const Effect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    useEffect(() => {
        // alert('clicked');
        document.title = `You clicked me ${num} times`;

    }, [num]);

    return (
        <>
            <button onClick={() => { setNum(num + 1); }}>Click Me {num}</button><br />

            <button onClick={() => { setNums(nums + 1); }}>Click Me {nums}</button>
        </>
    );
}
export default Effect;