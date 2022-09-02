FROM node:16-alpine3.15 as builder

RUN npm install -g pnpm

WORKDIR /usr/app
# preparing static files
COPY ["index.html", "tsconfig.json", "tsconfig.node.json", "vite.config.ts", "./"]
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm install
CMD [ "pnpm", "build"]

FROM alpine:3.16 as base

WORKDIR /usr/app
#create user
RUN adduser \
    --disabled-password \
    --no-create-home \
    "node"
# static files
COPY --from=builder /usr/app/dist ./
#change user
RUN chown -R node:node /usr/app
USER node

ENTRYPOINT [ "/usr/app" ]