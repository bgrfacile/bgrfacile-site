# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# ARG
ARG VITE_APP_TITLE
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_USER_ID

# ENV
ENV VITE_APP_TITLE=$VITE_APP_TITLE
ENV VITE_SERVICE_ID=$VITE_SERVICE_ID
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID
ENV VITE_USER_ID=$VITE_USER_ID

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]