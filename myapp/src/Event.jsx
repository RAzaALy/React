import React, { useState } from 'react';

const Event = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Click Me');
    const bgChange = () => {
        setBg('teal');
        setName("changed 😝")
    };
    const bgBack = () => {
        setBg(purple);
        setName("Click Me");
    };
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={bgBack} onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            </div>
        </>
    );
};
export default Event;