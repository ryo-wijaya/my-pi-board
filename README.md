## My Raspberry Pi Personal Dashboard

A personal dashboard built with React + Vite. Meant to be ran 24/7 on a Raspberry Pi 5 and a 15.6 inch 16:9 1920 x 1080 resolution display.

Consumed 2 backend microservices to populate the dashboard:

1. pi-stock-trader
   - Handle personal stock trading data display and stop-loss algorithms
2. pi-bus
   - Handle bus timings data display

Backend microservices are referenced remotely via docker-compose
