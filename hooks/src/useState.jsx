import React, { useState } from 'react';
import './fontawesome-free-5.15.2-web/css/all.min.css';
const App = () => {
  // const state = useState();
  // console.log(state);
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count + 1);
    // console.log("clicked " + count++);
  };
  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry! can't decrement.");
      setCount(0);
    }
    // console.log("clicked " + count++);
  };
  return (
    <>
      <div className="center">
        <h1>{count}</h1>
        <button onClick={incNum}>
          <i className="fas fa-plus fa-3x"></i>
        </button>
        <button onClick={decNum}>
          <i className="fas fa-trash  fa-3x"></i>
        </button>
      </div>
    </>
  );
};
export default App;