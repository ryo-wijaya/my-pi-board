import React, { useState, useEffect } from "react";

import { BusCard } from "./BusCard";

import { getBusTimings } from "../../api/busService";

export default function BusContainer({ isDarkMode }) {
  const busData = [
    {
      busStop: "Raffles Place",
      busNumber: "97",
      firstBusTime: "4 mins",
      secondBusTime: "14 mins",
    },
    {
      busStop: "Marina Bay",
      busNumber: "36",
      firstBusTime: "6 mins",
      secondBusTime: "16 mins",
    },
    {
      busStop: "Jurong East",
      busNumber: "187",
      firstBusTime: "2 mins",
      secondBusTime: "12 mins",
    },
  ];

  return (
    <div>
      <h4 className="mb-5 text-center fw-bold">Bus Timings</h4>
      {busData.map((bus, index) => (
        <BusCard key={index} {...bus} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}
