import React, { useState } from "react";
import EntryForm from "./components/EntryForm";
import Summary from "./components/Summary";
import EntryList from "./components/EntryList";
import Filters from "./components/Filters";
import { EntryProvider } from "./context/EntryContext";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <EntryProvider>
      <div className="App">
    <h1>Names:Nsabiyumva jerome</h1>
   <center> <h5>class:L5SWD</h5></center>
        <h1>Expense Tracker</h1>

        <Summary />
        <Filters setFilter={setFilter} />
        <EntryForm />
        <EntryList filter={filter} />
      </div>
    </EntryProvider>
  );
}

export default App;
