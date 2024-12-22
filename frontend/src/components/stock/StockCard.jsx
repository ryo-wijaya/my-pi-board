export default function StockCard({
  stockLabel,
  currentPrice,
  boughtPrice,
  ownedAmount,
  totalProfitOrLoss,
  totalPercentageProfitOrLoss,
  percentageChangeYesterday,
  targetPrice,
  isDarkMode,
}) {
  return (
    <div
      className={`card m-3 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{
        width: "300px",
        borderRadius: "8px",
        border: "none",
        boxShadow: isDarkMode ? "0 4px 8px rgba(255, 255, 255, 0.1)" : "0 4px 8px rgba(0, 0, 0, 0.2)",
        padding: "5px",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title text-warning mb-1">{stockLabel}</h5>
          <span
            className={`badge rounded-pill ${totalProfitOrLoss >= 0 ? "bg-success" : "bg-danger"}`}
            style={{
              fontSize: "0.9rem",
              color: "white",
              padding: "8px 12px",
            }}
          >
            {totalProfitOrLoss >= 0 ? "+" : ""}${totalProfitOrLoss} ({totalPercentageProfitOrLoss}%)
          </span>
        </div>

        <h6 className="text-primary fw-bold" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          ${currentPrice.toFixed(2)}
        </h6>

        <div className="d-flex justify-content-between">
          <small style={{ color: isDarkMode ? "#cfcfcf" : "#6c757d" }}>Target: ${targetPrice}</small>
          <small style={{ color: isDarkMode ? "#cfcfcf" : "#6c757d" }}>Owned: {ownedAmount}</small>
        </div>

        <hr />
        <p
          className={`fw-bold ${percentageChangeYesterday >= 0 ? "text-success" : "text-danger"}`}
          style={{ fontSize: "0.9rem" }}
        >
          Yesterday: {percentageChangeYesterday >= 0 ? "+" : ""}
          {percentageChangeYesterday}%
        </p>
        <small style={{ color: isDarkMode ? "#cfcfcf" : "#6c757d" }}>
          Bought Price: ${boughtPrice.toFixed(2)}
        </small>
      </div>
    </div>
  );
}
