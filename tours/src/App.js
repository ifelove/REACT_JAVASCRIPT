import React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";
//import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [tours, setTours] = React.useState([]);
  const removeTours = function (id) {
    const newTours = tours.filter((tour) => {
      if (tour.id !== id) return tour;
    });
    setTours(newTours);
  };

  const fetchTour = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();

      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTour();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="tittle">
          <h2>No tour left</h2>
          <button onClick={fetchTour} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {" "}
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
