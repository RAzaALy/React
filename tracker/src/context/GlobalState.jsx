import React, { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer";
//Initial State
const initialState = {
  transcations: [],
};

//create context:
const GlobalContext = createContext(initialState);
//Provider:
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTranscation(id) {
    dispatch({
      type: "DELETE_TRANSCATION",
      payload: id,
    });
  }
  function addTranscation(transcation) {
    dispatch({
      type: "ADD_TRANSCATION",
      payload: transcation,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transcations: state.transcations,
        deleteTranscation,
        addTranscation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalProvider };
