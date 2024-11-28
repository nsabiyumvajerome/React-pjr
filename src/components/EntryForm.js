import React, { useState, useRef, useContext } from "react";
import { EntryContext } from "../context/EntryContext";

function EntryForm() {
  const { addEntry } = useContext(EntryContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addEntry({ description, amount: parseFloat(amount), type });
    setDescription("");
    setAmount("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default EntryForm;
