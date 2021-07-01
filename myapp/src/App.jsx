import React from 'react';
import Heading from './Heading';
import List from './List';
import './index.css';
import image from '../src/pic.png';

//when we use html tag in react it is not html it's JSX(javascript xml or js extension)  

//In React version greater than v16 it's possible for render() to return an array of elements
const fname = "Ali Raza";
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const heading = {
    color: 'red',
    textTransform: 'uppercase',
    textAlign: 'center'
};
function App() {
    return (
        <>
            <Heading />
            <h1 style={heading}>My name is {fname}</h1>
            <img src={image} alt="random" />
            <p>Current Date is : {date}</p>
            <p>Current Time is : {time}</p>
            <p>My lucky number is {Math.random()}</p>
            <h1 className="heading">Code Tech Netflix Pick</h1>
            <p>Welcome to top five series of Netflix</p>
            <List />
            <Heading />
        </>

        // <React.Fragment>
        //   <h1>Hello World!!</h1>
        //   <p>how are you?</p>
        //   <h2>Code Tech</h2>
        // </React.Fragment>,

        // <div>
        //   <h1>Hello World!!</h1>
        //   <p>how are you?</p>
        //   <h2>Code Tech</h2>
        // </div>,

        // [
        //   <h1>Hello World!!</h1>,
        //   <p>how are you?</p>,
        //   <h2>Code Tech</h2>,
        // ],
    );
}
export default App;
//we import React because babel convert code into browser supported:
// ReactDom.render(React.createElement('h1', null, "Code Tech"),
//  document.getElementById('root'));

//we can do in pure java$cript as follows:
// var h1 = document.createElement('h1');
// h1.innerHTML = "Code Tech";
// document.getElementById('root').appendChild(h1);
