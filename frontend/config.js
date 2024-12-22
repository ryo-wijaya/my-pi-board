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

export const tickerSymbols = [
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

export const tickerConfig = {
  symbols: tickerSymbols,
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: "compact",
  colorTheme: "dark",
  locale: "en",
};

export const newsConfig = {
  isTransparent: false,
  displayMode: "regular",
  width: "100%",
  height: "100%",
  colorTheme: "dark",
  locale: "en",
};

export const eventsConfig = {
  width: "100%",
  height: "100%",
  colorTheme: "dark",
  isTransparent: false,
  locale: "en",
  importanceFilter: "0,1",
  countryFilter: "us,eu",
};

export const heatmapConfig = {
  exchanges: [],
  dataSource: "SPX500",
  grouping: "sector",
  blockSize: "market_cap_basic",
  blockColor: "change|240",
  locale: "en",
  symbolUrl: "",
  colorTheme: "dark",
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: "100%",
  height: "100%",
};
