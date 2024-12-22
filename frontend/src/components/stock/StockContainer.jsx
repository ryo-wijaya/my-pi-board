import React from "react";
import StockTicker from "./StockTicker";
import StockNews from "./StockNews";
import StockEvents from "./StockEvents";
import StockHeatmap from "./StockHeatmap";
import { tickerConfig, newsConfig, heatmapConfig, eventsConfig } from "../../../config";

export default function StockContainer({ isDarkMode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "15% 85%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div style={{ zIndex: 2 }}>
        <StockTicker config={{ ...tickerConfig, colorTheme: isDarkMode ? "dark" : "light" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          gap: "0",
          height: "100%",
          position: "relative",
          top: "-40px", // Adjust negative margin between ticker and bottom section here
        }}
      >
        <div style={{ height: "100%" }}>
          <StockNews
            feedMode="market"
            config={{
              ...newsConfig,
              market: "stock",
              colorTheme: isDarkMode ? "dark" : "light",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateRows: "60% 40%",
            gap: "0",
          }}
        >
          <div style={{ height: "100%" }}>
            <StockHeatmap
              config={{
                ...heatmapConfig,
                colorTheme: isDarkMode ? "dark" : "light",
              }}
            />
          </div>
          <div style={{ height: "100%" }}>
            <StockEvents
              config={{
                ...eventsConfig,
                colorTheme: isDarkMode ? "dark" : "light",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
