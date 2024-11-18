export async function getStockData() {
  // Mocked data
  return [
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
  ];
}
