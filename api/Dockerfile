FROM deno:1.21.3

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

WORKDIR usr/app

## COPY deps.ts .
## deno cache deps.ts

COPY . .