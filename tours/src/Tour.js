import React from "react";

export default function Tour(tour) {
  const [readMore, setReadMore] = React.useState(false);
  const { id, info, image, name, price, removeTours } = tour;

  return (
    <div>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}... `}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read Less" : "Read More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTours(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </div>
  );
}
