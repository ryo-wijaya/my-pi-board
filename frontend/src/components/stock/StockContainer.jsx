import React, { useState, useEffect } from "react";
import { getStockData } from "../../api/stockService";

import StockCard from "./StockCard";

export default function StockContainer({ isDarkMode }) {
  const stockData = [
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
  ];

  return (
    <div className="d-flex flex-column align-items-center" style={{ width: "100%", padding: "10px" }}>
      <h4 className="mb-4 text-center fw-bold">Stock Portfolio</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {stockData.map((stock, index) => (
          <StockCard key={index} {...stock} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
}
