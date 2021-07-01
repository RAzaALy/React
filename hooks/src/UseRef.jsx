import { useRef, useState } from "react";
import React from "react";

const UseRef = () => {
  /* UseRef is same as useState and preserve the state but not render  */
  const name = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const NAME = name.current.value;
    NAME === "" ? alert("plz fill the form") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" ref={name} />
          <button className="btn">Submit</button>
          <p>{show ? `Your name is ${name.current.value}` : " "}</p>
        </div>
      </form>
    </div>
  );
};

export default UseRef;
