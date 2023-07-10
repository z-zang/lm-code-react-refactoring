import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const [trips, setTrips] = useState(0);
  const { data, isLoading, error } = useFetch();

  useEffect(() => {
    if (data) setTrips(data.length);
  }, [data]);

  // TODO: breadcrumb with React links
  // TODO: style li

  return (
    <>
      <div className="header">
        <img className="logo" src="/icons8-space-64.png" alt="spaceship logo" />
        <h1>Extraterrestrial Excursions for Earthlings</h1>
        <ul>
          <li>
            <a>trending</a>
          </li>
          <li>
            <a>your orders</a>
          </li>
          <li>
            <a>community</a>
          </li>
        </ul>
      </div>

      {isLoading && <h2>Loading...</h2>}
      {data && (
        <div className="trips">
          <h2>We found {trips} trips for you!</h2>
          <ul className="trip-list">
            {data.map(
              ({ id, tripName, description, imageUrl, cost, lengthInDays }) => {
                return (
                  <li key={id} className="trip-card">
                    <h3 className="grid-col-span-2">{tripName}</h3>
                    <p className="grid-col-span-2">{description}</p>
                    <img
                      className="trip-thumbnail"
                      src={imageUrl}
                      alt={`representation of ${tripName}`}
                    />
                    <p className="trip-duration">
                      Duration: {lengthInDays} days
                    </p>
                    <p className="trip-price">
                      Price:{" "}
                      {cost.toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP",
                      })}
                    </p>
                    <button className="grid-col-span-2 trip-book-button">
                      book
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
