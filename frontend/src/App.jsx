import React from "react";
import BusContainer from "./components/bus/BusContainer";
import StockContainer from "./components/stock/StockContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`container-fluid vh-100 d-flex flex-column ${
        isDarkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
      style={{ padding: "10px" }}
    >
      <button
        onClick={toggleTheme}
        className="btn btn-sm btn-outline-info mb-3 align-self-end d-flex align-items-center"
      >
        {isDarkMode ? (
          <>
            <i className="bi bi-brightness-high me-2"></i> Toggle Light Mode
          </>
        ) : (
          <>
            <i className="bi bi-moon-stars me-2"></i> Toggle Dark Mode
          </>
        )}
      </button>

      <div className="d-flex w-100 h-100">
        <div
          className={`${isDarkMode ? "bg-secondary text-light" : "bg-light text-dark"}`}
          style={{
            flex: "0 0 24.5%",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <BusContainer isDarkMode={isDarkMode} />
        </div>

        <div
          style={{
            flex: "0 0 1%",
          }}
        ></div>

        <div
          className={`${isDarkMode ? "bg-secondary text-light" : "bg-light text-dark"}`}
          style={{
            flex: "0 0 74.5%",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <StockContainer isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
