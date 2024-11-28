// src/components/EntryList.js
import React, { useContext } from "react";
import { EntryContext } from "../context/EntryContext";

function EntryList({ filter }) {
  const { entries, deleteEntry } = useContext(EntryContext);

  const filteredEntries = entries.filter((entry) => {
    if (filter === "All") return true;
    return entry.type === filter;
  });

  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.description}</td>
              <td>${entry.amount.toFixed(2)}</td>
              <td>{entry.type}</td>
              <td>
                <button onClick={() => deleteEntry(entry.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              No entries yet!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default EntryList;
