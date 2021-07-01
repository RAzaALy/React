import React, { useContext } from "react";
import Transcation from "./Transcation.jsx";
import { GlobalContext } from "../context/GlobalState";

const TranscationList = () => {
  const { transcations } = useContext(GlobalContext);
  return (
    <>
      <h1>History</h1>
      <ul className="list">
        {transcations.map((transcation) => (<Transcation
          key={transcation.id} transcation={transcation}/>))}
      </ul>
    </>
  );
};

export default TranscationList;
