import React, { useContext } from "react";
import { EntryContext } from "../context/EntryContext";

function Summary() {
  const { entries } = useContext(EntryContext);

  const income = entries
    .filter((entry) => entry.type === "Income")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const expenses = entries
    .filter((entry) => entry.type === "Expense")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const balance = income - expenses;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expenses: ${expenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
