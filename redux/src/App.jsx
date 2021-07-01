import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IncNum, DecNum, DivNum, MulNum } from "./actions/Index";
import "./App.css";
const App = () => {
  const myState = useSelector((state) => state.counter);
  const number = useSelector((state) => state.MulDiv);

  // console.log(myState)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h2>Using Redux</h2>
        <h1>Increment Decrement counter</h1>
        <div className="count">
          <button
            className="minus"
            title="Decrement"
            onClick={() => dispatch(DecNum())}
          >
            -
          </button>
          <input type="text" className="quantity" value={myState} readOnly />
          <button
            className="plus"
            title="Increment"
            onClick={() => dispatch(IncNum(5))}
          >
            +
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Using Redux</h2>
        <h1>Multiplication & Divder counter</h1>
        <div className="count">
          <button
            className="minus"
            title="Divide"
            onClick={() => dispatch(DivNum())}
          >
            /
          </button>
          <input type="text" className="quantity" value={number} readOnly />
          <button
            className="plus"
            title="Mulitply"
            onClick={() => dispatch(MulNum(5))}
          >
            *
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
