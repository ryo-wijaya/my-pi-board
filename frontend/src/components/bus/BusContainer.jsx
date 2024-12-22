import React, { useState, useEffect } from "react";
import { isWithinPollingSchedule, initializeToast } from "../../util";
import { POLLING_INTERVAL_MS, BUS_CONFIG, BUS_STOP_NAMES } from "../../../config";
import { getBusTimings } from "../../api/busService";
import { BusCard } from "./BusCard";

export default function BusContainer({ isDarkMode }) {
  const [busData, setBusData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [error, setError] = useState(null);

  const fetchBusData = async (manual = false) => {
    if (!manual && !isWithinPollingSchedule()) {
      console.log("Outside polling schedule, skipping automatic API call.");
      return;
    }

    try {
      const results = await Promise.all(
        BUS_CONFIG.map(({ busStopId, busService }) => getBusTimings(busStopId, busService))
      );

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
      const errorMessage = err.response?.data?.detail || "Failed to fetch bus data.";
      setError(errorMessage);
      setTimeout(() => initializeToast("errorToast"), 0);
    }
  };

  useEffect(() => {
    fetchBusData();
    const interval = setInterval(() => fetchBusData(false), POLLING_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

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
            onClick={() => fetchBusData(true)}
            className={`btn btn-sm ${isDarkMode ? "btn-light" : "btn-outline-primary"}`}
          >
            Refresh
          </button>
        </div>
      </div>

      {busData.map((bus, index) => (
        <BusCard
          key={index}
          busStop={bus.busStop}
          busNumber={bus.busNumber}
          timings={bus.timings}
          isDarkMode={isDarkMode}
        />
      ))}

      {/* Bootstrap Toast */}
      <div
        id="errorToast"
        className="toast position-fixed top-0 end-0 m-3 bg-danger text-white"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-danger text-white">
          <strong className="me-auto">Error</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{error}</div>
      </div>
    </div>
  );
}
