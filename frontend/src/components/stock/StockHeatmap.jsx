import React, { useEffect } from "react";

export default function StockHeatmap({ config }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.innerHTML = JSON.stringify(config);

    const container = document.getElementById("stock-heatmap-widget");
    container.appendChild(script);

    // Cleanup
    return () => {
      container.innerHTML = "";
    };
  }, [config]);

  return (
    <div className="tradingview-widget-container" id="stock-heatmap-widget">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
