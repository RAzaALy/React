import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTranscation } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      const newTranscation = {
        id: new Date().getTime().toString(),
        text: text,
        amount: +amount,
      };
      addTranscation(newTranscation);
    } else {
      alert("please enter the following data :)");
    }
    setText("");
    setAmount("");
  };
  return (
    <>
      <h2>Add new transcation</h2>
      <form onSubmit={onSubmit}>
        <div className="form control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense,positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transcation</button>
      </form>
    </>
  );
};

export default AddTranscation;
