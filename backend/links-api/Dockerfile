FROM denoland/deno:alpine-1.22.1 as base

RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts

EXPOSE 8000

WORKDIR /usr/app

COPY ./config ./config

COPY deps.ts denon.yml mod.ts ./

RUN denon cache

COPY ./src ./src

#USER deno

CMD [ "denon", "start" ]