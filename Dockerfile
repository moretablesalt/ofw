# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /poop
COPY . .
RUN npm install

# Inject build-info.ts with timestamp-based version
RUN BUILD_TIMESTAMP=$(date -u +"%Y%m%d%H%M") && \
    BUILD_DATE=$(date -u +"%Y-%m-%d %H:%M:%S UTC") && \
    echo "export const BUILD_INFO = { version: '$BUILD_TIMESTAMP', buildTime: '$BUILD_DATE' };" > src/environments/build-info.ts

RUN npm run build:uat

# Stage 2
FROM nginx:alpine
COPY --from=builder /poop/dist/ofw-reborn/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
