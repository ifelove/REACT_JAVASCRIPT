import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Question({ id, title, info }) {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
      
          {showInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
