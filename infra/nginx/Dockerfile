FROM nginx:1.22.0-alpine-perl

#RUN rm -rf /etc/nginx
#RUN mkdir /etc/nginx
COPY default.conf /etc/nginx/config.d/default.conf

CMD ["nginx", "-g", "daemon off;"]