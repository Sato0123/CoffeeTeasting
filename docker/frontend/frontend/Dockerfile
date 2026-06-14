FROM node:24.12.0-trixie-slim

RUN apt-get update && apt-get install -y \
  bash \ 
  curl \ 
  vim \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY frontend/package*.json ./
RUN npm install

WORKDIR /app
