FROM denoland/deno:alpine-1.22.1 as builder
#denon as script runner
RUN deno install -qAf --unstable https://deno.land/x/denon@2.5.0/denon.ts
#preparing binary
WORKDIR /usr/app
COPY ["./config", "./config"]
COPY ["deps.ts", "denon.yml", "mod.ts", "./"]
RUN denon cache deps.ts
COPY ["./src", "./src"]
RUN denon cache mod.ts
RUN denon compile

FROM alpine:3.16 as base

WORKDIR /usr/app
#create user
RUN adduser \
    --disabled-password \
    --no-create-home \
    "deno"
# binary
COPY --from=builder /usr/app/main ./
#environment
COPY ["app.env", "./"]
#change user
RUN chown -R deno:deno /usr/app
USER deno

ENTRYPOINT [ "/usr/app" ]
CMD [ "./main" ]