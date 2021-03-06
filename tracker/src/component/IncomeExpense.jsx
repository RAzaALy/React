import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transcations } = useContext(GlobalContext);
  const amounts = transcations.map((transcation) => transcation.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const income = (
    amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{Math.abs(income).toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
