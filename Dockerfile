# syntax=docker/dockerfile:1

FROM node:20-bookworm-slim AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM node:20-bookworm-slim AS backend-deps
WORKDIR /app/backend
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
COPY backend/package*.json ./
RUN npm ci --omit=dev

FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=9999 \
    DATA_DIR=/app/backend/data

COPY --from=backend-deps /app/backend/node_modules ./backend/node_modules
COPY backend/package*.json backend/tsconfig.json ./backend/
COPY backend/src ./backend/src
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

RUN mkdir -p /app/backend/data \
  && chown -R node:node /app

USER node
EXPOSE 9999
VOLUME ["/app/backend/data"]

CMD ["./backend/node_modules/.bin/tsx", "backend/src/server.ts"]
