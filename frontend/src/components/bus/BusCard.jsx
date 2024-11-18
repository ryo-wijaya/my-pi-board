export function BusCard({ busStop, busNumber, firstBusTime, secondBusTime, isDarkMode }) {
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
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title text-warning">{busStop}</h5>
          <h6 className="card-subtitle mb-2" style={{ color: isDarkMode ? "#cfcfcf" : "#6c757d" }}>
            Bus {busNumber}
          </h6>
        </div>

        <div style={{ textAlign: "right" }}>
          <div className="mb-2">
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 15px",
                fontSize: "1rem",
              }}
            >
              {firstBusTime}
            </span>
          </div>
          <div>
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#6c757d",
                color: "#fff",
                padding: "8px 12px",
                fontSize: "0.9rem",
              }}
            >
              {secondBusTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
