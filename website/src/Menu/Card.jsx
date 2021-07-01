import React from "react";

function Card(props) {
  return (
    <>
      <div className="col-md-4 mx-auto col-10">
        <div class="card shadow mb-3">
          <img src={props.imgSrc} class="card-img-top" alt="img" style={{widht: "20rem",height:"20rem"}} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.content}</p>
            <a href={props.link} class="btn btn-outline-secondary">
              Check Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
