export const BUS_CONFIG = [
  { busStopId: "03059", busService: "10" },
  { busStopId: "03059", busService: "57" },
  { busStopId: "03059", busService: "100" },
];

export const BUS_STOP_NAMES = {
  "03059": "One Raffles Quay",
};

export const POLLING_INTERVAL_MS = 45000;

export const POLLING_SCHEDULE = {
  enabled: true,
  days: {
    Monday: [{ start: "08:30", end: "09:30" }],
    Tuesday: [{ start: "08:30", end: "09:30" }],
    Wednesday: [],
    Thursday: [],
    Friday: [{ start: "08:30", end: "09:30" }],
    Saturday: [],
    Sunday: [],
  },
};
