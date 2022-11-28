import "./App.css";
import SingleQuestion from "./Question";
import data from "./data";

import React from "react";

function App() {
  const [questions, setQuestions] = React.useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer</h3>

        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
