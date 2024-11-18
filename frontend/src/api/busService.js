export async function getBusTimings() {
  // Mocked data
  return [
    {
      busstop: "Raffles Place",
      busnumber: "97",
      firstBusTime: "4 mins",
      secondBusTime: "14 mins",
    },
    {
      busstop: "Marina Bay",
      busnumber: "36",
      firstBusTime: "6 mins",
      secondBusTime: "16 mins",
    },
    {
      busstop: "Jurong East",
      busnumber: "187",
      firstBusTime: "2 mins",
      secondBusTime: "12 mins",
    },
  ];
}
