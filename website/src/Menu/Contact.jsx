import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    message:""
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your name is ${data.name} and your email is ${data.email} Phone no ${data.phone} and password is ${data.password} and message is ${data.message}`);
    setData({
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
      message:""
    });
  };
  return (
    <>
      <section id="header">
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contactDiv">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Username</label>
                  <input
                    onChange={inputEvent}
                    name="name"
                    value={data.name}
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter username"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    onChange={inputEvent}
                    name="email"
                    value={data.email}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputEmail1">Phone no</label>
                  <input
                    onChange={inputEvent}
                    name="phone"
                    value={data.phone}
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Phone no"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    onChange={inputEvent}
                    name="password"
                    value={data.password}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    onChange={inputEvent}
                    name="cpassword"
                    value={data.cpassword}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Confirm Password"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={inputEvent}
                    name="message"
                    value={data.message}
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-outline-primary my-3">
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
