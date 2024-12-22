import React, { useEffect } from "react";

export default function StockNews({ feedMode, config }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.innerHTML = JSON.stringify({
      feedMode: feedMode,
      ...config,
    });

    const container = document.getElementById("timeline-left-widget");
    container.appendChild(script);

    // Cleanup
    return () => {
      container.innerHTML = "";
    };
  }, [feedMode, config]);

  return (
    <div className="tradingview-widget-container" id="timeline-left-widget">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
