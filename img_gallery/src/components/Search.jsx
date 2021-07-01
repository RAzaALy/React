import React, { useState } from "react";


const Search = ({ setText }) => {
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setText(input);
    setInput("");
}
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={submit} className="w-full max-w-sm">
        <div className=" flex items-center py-2">
          <input
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            type="text"
            value={input}
            className="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;
