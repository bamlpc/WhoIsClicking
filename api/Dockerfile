FROM denoland/deno:1.22.0 as base

RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts

WORKDIR /usr/app

COPY deps.ts ./

COPY ./config ./config

RUN deno cache --importmap=config/import_map.json deps.ts

COPY . .