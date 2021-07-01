import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Common = (props) => {
  return (
    <>
      <section className="d-flex align-items-center" id="header">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.heading}
                    <strong className="brandName">{props.brnad}</strong>
                  </h1>
                  <h2 className="my-3">
                    {props.para}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 headerImg">
                  <img
                    src={props.imgSrc}
                    alt="img"
                    className="img-fluid"
                    id={props.animate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
