FROM node:22.11

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4000

# Run the development server locally
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
