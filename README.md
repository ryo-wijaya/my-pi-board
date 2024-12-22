## My Raspberry Pi Personal Dashboard

A personal dashboard built with React + Vite. Meant to be ran 24/7 on a Raspberry Pi 5 and a 15.6 inch 16:9 1920 x 1080 resolution display in my room.

Consumed backend microservices to populate the dashboard:

1. **pi-stock-trader (deprecated)**: Now handled via TradingView widgets and parameterized inputs
   - Handle personal stock trading data display, including tickers, news, heatmap, and events.
2. **pi-bus**: https://github.com/ryo-wijaya/pi-bus
   - Handle bus timings data display.

Backend microservices are referenced remotely via docker-compose.

### Demo

**Dark Mode**

![Dark Mode Demo](./static/dashboard-dark-gif.gif)

**Light Mode**

![Light Mode Demo](./static/dashboard-light-gif.gif)

### Usage

My Raspberry Pi pulls from this repository thrice a day via a CRON job. This means that configuration updates will only take effect thrice a day.

Configure parameters via `pi\my-pi-board\frontend\config.js`. Current Configurations:

```js
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

// Modify according to
export const STOCK_TICKER_SYMBOLS = [
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

export const STOCK_TICKER_CONFIG = {
  symbols: tickerSymbols,
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: "compact",
  colorTheme: "dark",
  locale: "en",
};

export const STOCK_NEWS_CONFIG = {
  isTransparent: false,
  displayMode: "regular",
  width: "100%",
  height: "100%",
  colorTheme: "dark",
  locale: "en",
};

export const STOCK_EVENTS_CONFIG = {
  width: "100%",
  height: "100%",
  colorTheme: "dark",
  isTransparent: false,
  locale: "en",
  importanceFilter: "0,1",
  countryFilter: "us,eu",
};

export const STOCK_HEATMAP_CONFIG = {
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
```

### Commands

1. Spin up services with image rebuild
   ```bash
      docker-compose up --build
   ```
