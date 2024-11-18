import React, { useState, useEffect } from "react";
import { BusCard } from "./BusCard";

export default function BusContainer({ isDarkMode }) {
  const [busData, setBusData] = useState([
    {
      busStop: "Raffles Place",
      busNumber: "97",
      firstBusTime: "4 mins",
      secondBusTime: "14 mins",
    },
    {
      busStop: "Marina Bay",
      busNumber: "36",
      firstBusTime: "6 mins",
      secondBusTime: "16 mins",
    },
    {
      busStop: "Jurong East",
      busNumber: "187",
      firstBusTime: "2 mins",
      secondBusTime: "12 mins",
    },
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const refreshData = () => {
    setBusData([...busData]); // Simulate fetching new data
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5 mt-2">
        <h4 className="fw-bold">Bus Timings</h4>
        <div>
          <small
            className="me-3"
            style={{
              color: isDarkMode ? "#cfcfcf" : "#6c757d",
            }}
          >
            Last Updated: {lastUpdated}
          </small>
          <button
            onClick={refreshData}
            className={`btn btn-sm ${isDarkMode ? "btn-light" : "btn-outline-primary"}`}
          >
            Refresh
          </button>
        </div>
      </div>
      {busData.map((bus, index) => (
        <BusCard key={index} {...bus} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}
