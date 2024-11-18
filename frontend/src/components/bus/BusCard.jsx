import React from "react";

export function BusCard({ busStop, busNumber, timings, isDarkMode }) {
  return (
    <div
      className={`card m-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{
        borderRadius: "8px",
        border: "none",
        padding: "10px",
        boxShadow: isDarkMode ? "0 4px 8px rgba(255, 255, 255, 0.1)" : "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title text-warning">Bus {busNumber}</h5>
            <h6 className="card-subtitle mb-2" style={{ color: isDarkMode ? "#cfcfcf" : "#6c757d" }}>
              {busStop}
            </h6>
          </div>

          <div className="text-end">
            {timings[0]?.order === 1 && (
              <div className="d-flex align-items-center justify-content-end mb-2">
                <span
                  className="badge rounded-pill text-end"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 15px",
                    fontSize: "1rem",
                    minWidth: "80px",
                    textAlign: "right",
                  }}
                >
                  {timings[0]?.time}
                </span>
                <span
                  className={`badge ms-2 ${isDarkMode ? "bg-warning text-dark" : "bg-success text-light"}`}
                  style={{
                    fontSize: "1rem",
                    padding: "8px 12px",
                  }}
                >
                  {timings[0]?.type === "DD" ? "D" : "S"}
                </span>
              </div>
            )}
            {timings[1]?.order === 2 && (
              <div className="d-flex align-items-center justify-content-end">
                <span
                  className="badge rounded-pill text-end"
                  style={{
                    backgroundColor: "#6c757d",
                    color: "#fff",
                    padding: "10px 15px",
                    fontSize: "1rem",
                    minWidth: "80px",
                    textAlign: "right",
                  }}
                >
                  {timings[1]?.time}
                </span>
                <span
                  className={`badge ms-2 ${isDarkMode ? "bg-warning text-dark" : "bg-success text-light"}`}
                  style={{
                    fontSize: "1rem",
                    padding: "8px 12px",
                  }}
                >
                  {timings[1]?.type === "DD" ? "D" : "S"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
