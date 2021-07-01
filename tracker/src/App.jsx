import React from "react";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TranscationList from "./component/TranscationList";
import AddTranscation from "./component/AddTranscation";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TranscationList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
};

export default App;
