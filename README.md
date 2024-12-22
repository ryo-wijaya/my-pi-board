## My Raspberry Pi Personal Dashboard

A personal dashboard built with React + Vite. Meant to be ran 24/7 on a Raspberry Pi 5 and a 15.6 inch 16:9 1920 x 1080 resolution display.

Consumed 2 backend microservices to populate the dashboard:

1. **pi-stock-trader**: https://github.com/ryo-wijaya/pi-stock-trader
   - Handle personal stock trading data display
2. **pi-bus**: https://github.com/ryo-wijaya/pi-bus
   - Handle bus timings data display

Backend microservices are referenced remotely via docker-compose.

Configure parameters via `pi\my-pi-board\frontend\config.js`.

### Commands

1. Spin up services with image rebuild
   ```bash
      docker-compose up --build
   ```
