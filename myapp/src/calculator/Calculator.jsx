import React from "react";

const Calculator = () => {
  function add(a, b) {
    let sum = a + b;
    return sum;
  }
  function sub(a, b) {
    let result = a - b;
    return result;
  }
  function div(a, b) {
    let result = a / b;
    result = result.toFixed(2);
    return result;
  }
  function mul(a, b) {
    let result = a * b;
    return result;
  }
  return (
    <>
      <ul>
        <li>Sum:{add(40, 4)}</li>
        <li>Subtraction:{sub(98, 33)}</li>
        <li>Division:{div(285, 75)}</li>
        <li>{mul(3, 8)}</li>
      </ul>
    </>
  );
};
export default Calculator;
