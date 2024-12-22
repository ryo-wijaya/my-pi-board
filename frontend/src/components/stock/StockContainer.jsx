import React from "react";
import StockTicker from "./StockTicker";
import StockNews from "./StockNews";
import StockEvents from "./StockEvents";

export default function StockContainer() {
  const tickerSymbols = [
    { description: "", proName: "NASDAQ:GOOG" },
    { description: "", proName: "NASDAQ:NVDA" },
    { description: "", proName: "NASDAQ:AMD" },
    { description: "", proName: "NASDAQ:INTC" },
    { description: "", proName: "NASDAQ:SMCI" },
    { description: "", proName: "NASDAQ:OKTA" },
    { description: "", proName: "NASDAQ:IBKR" },
    { description: "", proName: "NASDAQ:RXRX" },
    { description: "", proName: "NYSE:EVH" },
    { description: "", proName: "NASDAQ:ASML" },
  ];

  const tickerConfig = {
    symbols: tickerSymbols,
    showSymbolLogo: true,
    isTransparent: false,
    displayMode: "compact",
    colorTheme: "dark",
    locale: "en",
  };

  const newsConfig = {
    isTransparent: false,
    displayMode: "regular",
    width: "100%",
    height: "100%",
    colorTheme: "dark",
    locale: "en",
  };

  const eventsConfig = {
    width: "100%",
    height: "100%",
    colorTheme: "dark",
    isTransparent: false,
    locale: "en",
    importanceFilter: "0,1",
    countryFilter: "us,eu",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "15% 85%",
        height: "100vh",
      }}
    >
      <div style={{ marginBottom: "5px" }}>
        <StockTicker config={tickerConfig} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gap: "5px",
          height: "100%",
        }}
      >
        <div style={{ height: "100%" }}>
          <StockNews feedMode="market" config={{ ...newsConfig, market: "stock" }} />
        </div>

        <div style={{ height: "100%" }}>
          <StockEvents config={eventsConfig} />
        </div>
      </div>
    </div>
  );
}
