# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Définition des arguments et propagation en variables d'environnement
ARG VITE_APP_TITLE
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_USER_ID

ENV VITE_APP_TITLE=$VITE_APP_TITLE \
    VITE_SERVICE_ID=$VITE_SERVICE_ID \
    VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID \
    VITE_USER_ID=$VITE_USER_ID

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3000/ || exit 1
CMD ["nginx", "-g", "daemon off;"]