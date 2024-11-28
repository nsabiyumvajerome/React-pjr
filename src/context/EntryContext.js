import React, { createContext, useState, useEffect } from "react";

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, { id: Date.now(), ...entry }]);
  };

  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <EntryContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </EntryContext.Provider>
  );
};

export { EntryContext, EntryProvider };
