FROM denoland/deno:alpine-1.22.1 as base

RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts

EXPOSE 8000

WORKDIR /deno-dir/links-api

COPY ./config ./config

COPY deps.ts denon.yml mod.ts ./

RUN denon cache deps.ts

COPY ./src ./src

RUN denon cache mod.ts

#RUN chown -R deno:deno /deno-dir/links-api

#USER deno

HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 \
  CMD deno run --allow-net --allow-env ./src/helper/healthCheck.ts

CMD [ "denon", "start" ]


