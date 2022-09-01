FROM nginx:1.22.0-alpine-perl

RUN rm -rf /etc/nginx
RUN mkdir /etc/nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy.conf /etc/nginx/conf.d/proxy.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]