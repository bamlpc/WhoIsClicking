FROM denoland/deno:alpine-1.22.1 as base

RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts

WORKDIR /usr/app

COPY ./config ./config

COPY deps.ts denon.yml ./

RUN denon cache


