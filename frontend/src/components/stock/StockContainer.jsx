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
          gap: "5px", // Slight gap added between News, Heatmap, and Events
          height: "100%",
          position: "relative",
          top: "-30px",
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
            gap: "5px", // Slight gap added between Heatmap and Events
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
