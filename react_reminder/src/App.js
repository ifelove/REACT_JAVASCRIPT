import React from "react";
import data from "./data";
import "./App.css";
import List from "./List";

function App() {
  const [people, setPeople] = React.useState(data);
  function clearAll() {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={clearAll}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
