import React from "react";

const Tabs = ({filterItem,tabs}) => {
  return (
    <>
      <div className="btnGroup">
      {
          tabs.map((cat,index) => {
              return <a className="c-btn" key={index} onClick={() => {filterItem(cat)}}>
          {cat}
        </a>
          })
      }
        {/* <a
          className="c-btn"
          onClick={() => {
            filterItem("Breakfast");
          }}
        >
          Breakfast
        </a>
        <a
          className="c-btn"
          onClick={() => {
            filterItem("Chicken");
          }}
        >
          Chicken
        </a>
        <a
          className="c-btn"
          onClick={() => {
            filterItem("Vegetarian");
          }}
        >
          Vegetarian
        </a>
        <a
          className="c-btn"
          onClick={() => {
            filterItem("Seafood");
          }}
        >
          Seafood
        </a>
        <a
          className="c-btn"
          onClick={() => {
            filterItem("Beef");
          }}
        >
          Beef
        </a>
        <a
          className="c-btn"
          onClick={() => {
            setItems(Data);
          }}
        >
          All
        </a> */}
      </div>
    </>
  );
};

export default Tabs;
