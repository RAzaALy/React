import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/580x400/?${props.name}`;
  return <img src={img} alt="img" />;
};
export default SearchResult;
