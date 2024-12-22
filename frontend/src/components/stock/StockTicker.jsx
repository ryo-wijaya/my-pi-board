import React, { useEffect } from "react";

export default function StockTicker({ config }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

    // Use the passed config, which includes symbols
    script.innerHTML = JSON.stringify(config);

    const container = document.getElementById("ticker-tape-widget");
    container.appendChild(script);

    // Cleanup
    return () => {
      container.innerHTML = "";
    };
  }, [config]);

  return (
    <div className="tradingview-widget-container" id="ticker-tape-widget">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
