import React from "react";
import Card from "./Card.jsx";
import Data from "./Data.jsx";

const Service = () => {
  return (
    <>
      <section className="header">
        <div className="my-5">
          <h1 className="text-center mb-5">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                {Data.map((value, index) => {
                  return (
                    <Card
                      key={value.id}
                      imgSrc={value.imgSrc}
                      title={value.title}
                      content={value.content}
                      link={value.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
