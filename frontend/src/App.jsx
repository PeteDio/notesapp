import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State variable to hold the data fetched from the API
  const [data, setData] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch("http://localhost:8080/notes/v1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {data && (
        <div className="card">
          <h2>{data.message}</h2>
        </div>
      )}
    </>
  );
}

export default App;
