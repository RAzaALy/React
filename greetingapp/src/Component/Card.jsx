import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="meal">
        <img src={props.image} alt="img" />
        <div className="content mealInfo">
          <h2>{props.name}</h2>
          <small>{props.category}</small>
          <h3>Price : {props.price}</h3>
          <p>{props.desc}</p>
          <div className="button">
            <a
              href="https://www.youtube.com/watch?v=XivddFddthc"
              target="_blank"
            >
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
