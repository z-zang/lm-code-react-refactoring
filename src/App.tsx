import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, isLoading, error } = useFetch();

  return (
    <>
      <nav>
        <h1>Humm Dinger's Extra-terrestrial Excursions</h1>
      </nav>
      {isLoading && <h2>Loading...</h2>}
      {data && (
        <ul>
          {data.map(
            ({ id, tripName, description, imageUrl, cost, lengthInDays }) => {
              return (
                <li key={id}>
                  <h3>{tripName}</h3>
                  <p>{description}</p>
                  <img src={imageUrl} alt={`representation of ${tripName}`} />
                  <p>Duration: {lengthInDays} days</p>
                  <p>
                    Price:{" "}
                    {cost.toLocaleString("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
}

export default App;
