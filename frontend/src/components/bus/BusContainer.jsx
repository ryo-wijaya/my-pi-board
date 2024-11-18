import React, { useState, useEffect } from "react";
import { BusCard } from "./BusCard";
import { getBusTimings } from "../../api/busService";
import { BUS_CONFIG, BUS_STOP_NAMES } from "../../../config";

export default function BusContainer({ isDarkMode }) {
  const [busData, setBusData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [error, setError] = useState(null);

  const fetchBusData = async () => {
    try {
      const results = await Promise.all(
        BUS_CONFIG.map(({ busStopId, busService }) => getBusTimings(busStopId, busService))
      );

      // Map bus stop IDs to their names
      const combinedData = results.map((result, index) => ({
        ...result,
        busStop: BUS_STOP_NAMES[BUS_CONFIG[index].busStopId],
        busNumber: BUS_CONFIG[index].busService,
      }));

      setBusData(combinedData);
      setLastUpdated(new Date().toLocaleTimeString());
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch bus data.");
    }
  };

  useEffect(() => {
    fetchBusData();
    const interval = setInterval(fetchBusData, 60000);
    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    fetchBusData();
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
      {error && <p className="text-danger">{error}</p>}
      {busData.map((bus, index) => (
        <BusCard
          key={index}
          busStop={bus.busStop}
          busNumber={bus.busNumber}
          timings={bus.timings}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}
