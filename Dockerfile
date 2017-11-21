# Dockerfile (tag: v3)
FROM nginx

COPY config/nginx.conf /etc/nginx/nginx.conf

WORKDIR /referentiel-personnes-ui
ADD build /referentiel-personnes-ui

EXPOSE 8080
