import React from "react";
import data from "./data";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {  
      amount = 8
    }
    setText(data.slice(0, amount));
  }
  return (
    <section className="section-center">
      <h3>Lorem project</h3>
      <form className="lorem-form" onClick={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p className="" key={index}>
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
