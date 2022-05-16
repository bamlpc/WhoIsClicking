FROM denoland/deno:latest as base

WORKDIR /app

COPY . ./

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts