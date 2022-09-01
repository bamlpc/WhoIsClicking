FROM denoland/deno:alpine-1.22.1 as builder

RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts

WORKDIR /app/links-api/
COPY ["./config", "./config"]
COPY ["deps.ts", "denon.yml", "mod.ts", "./"]
RUN denon cache deps.ts
COPY ["./src", "./src"]
RUN denon cache mod.ts
RUN denon compile

FROM alpine:3.16 as base

WORKDIR /app/links-api/
#create user
RUN adduser \
    --disabled-password \
    --no-create-home \
    "deno"
# binary
COPY --from=builder --chown=deno:deno /app/links-api/main ./
#environment
COPY --chown=deno:deno ["app.env", "./"]
#change user
USER deno
#create new healthcheck
ENTRYPOINT [ "/app/links-api/" ]
CMD [ "./main" ]