#FROM nginx:1.21.6-alpine
FROM nginx:1.22.0-alpine-perl

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

VOLUME ./log/:/var/log/syslog

CMD ["nginx", "-g", "daemon off;"]