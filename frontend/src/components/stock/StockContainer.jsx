import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

export default function StockContainer({ isDarkMode }) {
  const [stockData, setStockData] = useState([
    {
      stockLabel: "AAPL",
      currentPrice: 150,
      boughtPrice: 140,
      ownedAmount: 10,
      totalProfitOrLoss: 100,
      totalPercentageProfitOrLoss: 7.14,
      percentageChangeYesterday: -0.5,
      targetPrice: 160,
    },
    {
      stockLabel: "GOOGL",
      currentPrice: 2800,
      boughtPrice: 2500,
      ownedAmount: 5,
      totalProfitOrLoss: 1500,
      totalPercentageProfitOrLoss: 12,
      percentageChangeYesterday: 1.2,
      targetPrice: 3000,
    },
    {
      stockLabel: "AMZN",
      currentPrice: 3500,
      boughtPrice: 3400,
      ownedAmount: 2,
      totalProfitOrLoss: 200,
      totalPercentageProfitOrLoss: 5.88,
      percentageChangeYesterday: 0.3,
      targetPrice: 3600,
    },
    {
      stockLabel: "AMZN",
      currentPrice: 3500,
      boughtPrice: 3400,
      ownedAmount: 2,
      totalProfitOrLoss: 200,
      totalPercentageProfitOrLoss: 5.88,
      percentageChangeYesterday: 0.3,
      targetPrice: 3600,
    },
    {
      stockLabel: "AMZN",
      currentPrice: 3500,
      boughtPrice: 3400,
      ownedAmount: 2,
      totalProfitOrLoss: 200,
      totalPercentageProfitOrLoss: 5.88,
      percentageChangeYesterday: 0.3,
      targetPrice: 3600,
    },
    {
      stockLabel: "AMZN",
      currentPrice: 3500,
      boughtPrice: 3400,
      ownedAmount: 2,
      totalProfitOrLoss: 200,
      totalPercentageProfitOrLoss: 5.88,
      percentageChangeYesterday: 0.3,
      targetPrice: 3600,
    },
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());

  const refreshData = () => {
    setStockData([...stockData]); // Simulate fetching new data
    setLastUpdated(new Date().toLocaleTimeString());
  };

  return (
    <div className="d-flex flex-column align-items-center mt-2" style={{ width: "100%" }}>
      <div className="d-flex justify-content-between align-items-center w-100 mb-4">
        <h4 className="fw-bold mb-3">Stock Portfolio</h4>
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
      <div className="d-flex flex-wrap justify-content-center">
        {stockData.map((stock, index) => (
          <StockCard key={index} {...stock} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
}
