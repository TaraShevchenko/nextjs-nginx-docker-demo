FROM nginx:1.20-alpine

WORKDIR /app

COPY config/site.conf /etc/nginx/conf.d/default.conf

COPY config/cert.pem /etc/nginx/cert.pem
COPY config/key.pem /etc/nginx/key.pem