#FROM nginx:1.21.6-alpine
FROM nginx:1.22.0-alpine-perl

#RUN rm /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx
RUN mkdir /etc/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy.conf /etc/nginx/conf.d/

EXPOSE 433

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl --fail http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]