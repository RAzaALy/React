import React, { useState } from "react";

//spread Operator in Array:
// const name = ["Ali", "Raza"];
// const data = [...name, "male", "developer", 20, "React"];
// const fullData = [...name, ...data];
// console.log(name);
// console.log(data);
// console.log(fullData);

// const games = ["need for speed", "farm franzy", "pubg", "spiderman"];
// const [first, ...remaining] = games;
// console.log(first);
// console.log(remaining);

//spread operator in object:

// const fullName = {
//     fname: "ali",
//     lname: "raza"
// }
// const biodata = {
//     id : 235,
//     ...fullName,
//     age:20,
//     gender: "male"
// }
// console.log(fullName);
// console.log(biodata);

const Forms = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    age: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    const { value, name } = event.target;
    setData((prev) => {
      // console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
      // const name = event.target.name;
      // const value = event.target.vlaue;
      // if (name === "fname") {
      //     return {
      //         fname: value,
      //         lname: prev.lname,
      //         email: prev.email,
      //         phone: prev.phone
      //     }
      // } else if (name === "lname") {
      //     return {
      //         lname: value,
      //         fname: prev.fname,
      //         email: prev.email,
      //         phone: prev.phone
      //     }
      // } else if (name === "email") {
      //     return {
      //         email: value,
      //         fname: prev.fname,
      //         lname: prev.lname,
      //         phone: prev.phone
      //     }
      // } else if (name === "phone") {
      //     return {
      //         phone: value,
      //         fname: prev.fname,
      //         lname: prev.lname,
      //         email: prev.email,
      //     }
      // }
    });
  };

  const submit = (event) => {
    event.preventDefault();
    alert(`Welcome ${data.fname}  ${data.lname}`);
  };

  return (
    <div id="form">
      <form onSubmit={submit}>
        <h1>
          Hello {data.fname} {data.lname}{" "}
        </h1>
        <p>Email:{data.email}</p>
        <p>Phone:{data.phone}</p>
        <p>Age:{data.age}</p>
        <input
          type="text"
          name="fname"
          value={data.fname}
          placeholder="Enter Your First Name"
          onChange={inputEvent}
          autoComplete="off"
        />
        <input
          type="text"
          name="lname"
          placeholder="Enter Your Last Name"
          onChange={inputEvent}
          value={data.lname}
          autoComplete="off"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          onChange={inputEvent}
          value={data.age}
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={inputEvent}
          value={data.email}
          autoComplete="off"
        />
        <input
          type="number"
          name="phone"
          placeholder="Enter Your Phone Number"
          onChange={inputEvent}
          value={data.phone}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Forms;
