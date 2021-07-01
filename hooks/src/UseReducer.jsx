import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
      case "increment":
        return state + 1;
        break;
      case "decrement":
        if (state === 0) {
          alert("can not decrement");
          return state;
        } else {
          return state - 1;
        }
        break;
      default:
        break;
    }
    // if (action.type === "increment") {
    //   return state + 1;
    // } else {
    //   return state - 1;
    // }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
        <h1>{state}</h1>
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer;
