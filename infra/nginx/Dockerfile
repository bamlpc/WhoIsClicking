#FROM nginx:1.21.6-alpine
FROM nginx:1.22.0-alpine-perl

#RUN rm /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx
RUN mkdir /etc/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy.development.conf /etc/nginx/conf.d/proxy.conf

EXPOSE 80

HEALTHCHECK --interval=5s --timeout=5s --start-period=5s --retries=3 \
    CMD curl --fail http://nginx_ip:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]