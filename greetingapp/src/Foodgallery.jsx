import React, { useState } from "react";
import Card from "./Component/Card.jsx";
import Data from "./Component/Data.jsx";
import Tabs from "./Component/Tabs.jsx";

const Foodgallery = () => {
  const [items, setItems] = useState(Data);
  const categories = [...new Set(Data.map((elem) => elem.category)), "All"];
  // console.log(categories);
  const [tabs, setTabs] = useState(categories);
  const filterItem = (category) => {
    if (category === "All") {
      setItems(Data);
      return;
    } else {
      const updateItem = Data.filter((curElem) => {
        return curElem.category === category;
      });
      setItems(updateItem);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Get Your Meal</h1>
        <h2>Browse your favourite meal</h2>
      </div>
      {/* tabs will come here 🅱️ */}
      <Tabs filterItem={filterItem} tabs={tabs} />
      <div id="meals" className="meals">
        {items.map((item, index) => {
          const { category, price, description, name, img } = item;
          return (
            <Card
              key={index}
              category={category}
              price={price}
              desc={description}
              name={name}
              image={img}
            />
          );
        })}
      </div>
    </>
  );
};

export default Foodgallery;
