import React from 'react';


function App() {
    let time = new Date();
    time = time.getHours();
    const style = {};
    let greeting = "";
    if (time >= 1 && time < 12) {
        greeting = 'Good Morning';
        style.color = 'green';
    } else if (time >= 12 && time < 19) {
        greeting = 'Good Afternoon';
        style.color = 'orange';

    } else {
        greeting = 'Good Night';
        style.color = 'black';

    }
    return (
        <>
            <div className="center">
                <h1>Hello Sir, <span style={style}> {greeting}</span></h1>
            </div>
        </>
    );
}
export default App;